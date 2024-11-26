import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Or, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Request } from 'express'
import { decrypt, encryptCode } from 'src/common/helpers/encryption.helper';
import { UsersService } from '../auth/users/users.service';
import { OrdenConceptoService } from '../orden-concepto/orden-concepto.service';
import { PersonasService } from '../preuniversitario/personas/personas.service';
import { Persona } from '../preuniversitario/personas/entities/persona.entity';
import { ConvocatoriaService } from '../preuniversitario/convocatoria/convocatoria.service';
import { PreinscripcionService } from '../preuniversitario/preinscripcion/preinscripcion.service';
import { MonedaService } from 'src/v1/tesoro/moneda/moneda.service';
import axios from 'axios'
import { HttpService } from '@nestjs/axios';
import { Concepto } from 'src/v1/tesoro/concepto/entities/concepto.entity';
import { ConceptoService } from 'src/v1/tesoro/concepto/concepto.service';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
    private readonly ordenConceptoservice: OrdenConceptoService,
    private readonly conceptoService: ConceptoService,
    private readonly usersService: UsersService,
    private readonly personasService: PersonasService,
    private readonly convocatoriaService: ConvocatoriaService,
    private readonly preinscripcionService: PreinscripcionService,
    private readonly monedaService: MonedaService,
    private readonly httpService: HttpService
  ) { }

  async create(createOrdenDto: CreateOrdenDto, req: Request) {
    if (req['user']) {
      const ci = req['user']['iss']
      const user = await this.usersService.findByCi(decrypt(ci))

      let old: Orden
      if (user) {
        old = await this.ordenRepository.findOne({
          order: {
            idOrden: 'DESC'
          },
          where: {
            user: user
          }
        })
      } else {
        old = await this.ordenRepository.findOne({
          order: {
            idOrden: 'DESC'
          },
          where: {
            user: user
          }
        })
      }

      let correlativo: number
      if (old) {
        try {
          const code = decrypt(old.codigoOrden)
          correlativo = Number(code.split('_')[0])
          correlativo += 1
        } catch (error) {
          correlativo = 1
        }
      } else {
        correlativo = 1
      }

      let newOrden: Orden
      let codigo: string

      if (old) {
        codigo = encryptCode(correlativo, old.user.numeroDocumento)
        newOrden = await this.ordenRepository.save({
          ...createOrdenDto,
          codigoOrden: codigo,
          user: old.user
        });
      } else {
        codigo = encryptCode(correlativo, user.numeroDocumento)
        newOrden = await this.ordenRepository.save({
          ...createOrdenDto,
          codigoOrden: codigo,
          user: user
        });
      }

      for (const ordenConcepto of createOrdenDto.ordenConcepto) {
        this.ordenConceptoservice.create({
          ...ordenConcepto,
          orden: newOrden
        })
      }

      const gestion = new Date().getFullYear()
      const conceptos = []
      for (const oc of createOrdenDto.ordenConcepto) {
        const concepto = await this.conceptoService.findOne(oc.id_concepto)
        conceptos.push({
          ...oc,
          concepto
        })
      }
      const productos = []

      for (const concepto of conceptos) {
        productos.push({
          actividadEconomica: "122025022",
          // codigoSin: "",
          // codigo: "JN-PROD 001",
          descripcion: concepto.concepto.concepto,
          precioUnitario: concepto.concepto.montoMinimo,
          unidadMedida: 1,
          montoDescuento: '0.00',
          cantidad: 1
        })
      }

      const response = await this.postOrden(newOrden.idOrden, {
        descripcion: newOrden.descripcion,
        // metaDatosTransaccion: {},
        codigoOrden: `${newOrden.idOrden}-${gestion}`,
        datosPago: {
          nombresCliente: newOrden.user.nombres ?? newOrden.persona.nombres,
          apellidosCliente: `${newOrden.user.paterno ?? newOrden.persona.paterno} ${newOrden.user.materno ?? newOrden.persona.materno}`,
          tipoDocumentoCliente: 1,
          numeroDocumentoCliente: newOrden.user.numeroDocumento ?? newOrden.persona.ci,
          fechaNacimientoCliente: newOrden.user.fecha_nac ?? newOrden.persona.fecha_nac,
          // cuentaBancaria: "",
          montoTotal: newOrden.montoTotal,
          moneda: "BOB",
          tipoCambioMoneda: 1,
          correo: newOrden.user.email ?? newOrden.persona.email
        },
        productos
      });

      return {
        success: true,
        message: 'Orden creada correctamente',
        orden: newOrden,
        response
      }
    } else if (createOrdenDto.persona) {
      let persona: Persona = await this.personasService.findByCiExpNac(createOrdenDto.persona.ci, createOrdenDto.persona.expedido, createOrdenDto.persona.fecha_nac)

      if (!persona) {
        persona = await this.personasService.create(createOrdenDto.persona)
      }

      let old: Orden = await this.ordenRepository.findOne({
        order: {
          idOrden: 'DESC'
        },
        where: {
          persona: persona
        }
      })

      let correlativo: number
      if (old) {
        try {
          const code = decrypt(old.codigoOrden)
          correlativo = Number(code.split('_')[0])
          correlativo += 1
        } catch (error) {
          correlativo = 1
        }
      } else {
        correlativo = 1
      }

      const codigo: string = encryptCode(correlativo, persona.ci)
      const newOrden: Orden = await this.ordenRepository.save({
        ...createOrdenDto,
        codigoOrden: codigo,
        persona: persona
      });

      const convocatoria = await this.convocatoriaService.findOne(createOrdenDto.idConvocatoria)
      const preinscripcion = await this.preinscripcionService.create({
        persona,
        convocatoria,
        orden: newOrden
      })

      for (const ordenConcepto of createOrdenDto.ordenConcepto) {
        this.ordenConceptoservice.create({
          ...ordenConcepto,
          orden: newOrden
        })
      }

      const gestion = new Date().getFullYear()
      const conceptos = []
      for (const oc of createOrdenDto.ordenConcepto) {
        const concepto = await this.conceptoService.findOne(oc.id_concepto)
        conceptos.push({
          ...oc,
          concepto
        })
      }
      const productos = []

      for (const concepto of conceptos) {
        productos.push({
          actividadEconomica: "122025022",
          // codigoSin: "",
          // codigo: "JN-PROD 001",
          descripcion: concepto.concepto.concepto,
          precioUnitario: concepto.concepto.montoMinimo,
          unidadMedida: 1,
          montoDescuento: '0.00',
          cantidad: 1
        })
      }

      const response = await this.postOrden(newOrden.idOrden, {
        descripcion: newOrden.descripcion,
        // metaDatosTransaccion: {},
        codigoOrden: `${newOrden.idOrden}-${gestion}`,
        datosPago: {
          nombresCliente: newOrden.user.nombres ?? newOrden.persona.nombres,
          apellidosCliente: `${newOrden.user.paterno ?? newOrden.persona.paterno} ${newOrden.user.materno ?? newOrden.persona.materno}`,
          tipoDocumentoCliente: 1,
          numeroDocumentoCliente: newOrden.user.numeroDocumento ?? newOrden.persona.ci,
          fechaNacimientoCliente: newOrden.user.fecha_nac ?? newOrden.persona.fecha_nac,
          // cuentaBancaria: "",
          montoTotal: newOrden.montoTotal,
          moneda: "BOB",
          tipoCambioMoneda: 1,
          correo: newOrden.user.email ?? newOrden.persona.email
        },
        productos
      });

      return {
        success: true,
        message: 'Orden solicitada correctamente',
        orden: newOrden,
        preinscripcion,
        response
      }
    } else {
      throw new BadRequestException('Debe especificar el usuario o la persona')
    }
  }

  async postOrden(idOrden: number, datos: any): Promise<any> {
    // const token = 'ey'

    // try {
    //   const response = await this.httpService.post(`${process.env.URL_PPE}/transaccion/deuda`, datos, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`
    //     }
    //   })

    //   if (response['finalizado'] == true) {
    //     this.ordenRepository.update(idOrden, {
    //       codigoTransaccion: response['datos']['codigoTransaccion']
    //     })
    //   } else if (response['metodoPago'] == 'QR') {
    //     this.ordenRepository.update(idOrden, {
    //       notaAdicional: response['mensaje'],
    //       estadoPago: response['estado'],
    //       metodoPago: response['metodoPago'],
    //       idQr: response['datos']['data']['idQr'],
    //       finVigencia: response['datos']['data']['finVigencia']
    //     })
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    const old = await this.ordenRepository.find({
      order: {
        idOrden: 'DESC'
      }
    })
    console.log(old[1]);
    const codigoTransaccion = Number(old[1].codigoTransaccion) + 1
    this.ordenRepository.update(idOrden, {
      codigoTransaccion: codigoTransaccion.toString()
    })

    return {
      finalizado: true,
      mensaje: "Registro creado con exito!",
      datos: {
        codigoTransaccion: codigoTransaccion,
        urlRedireccion: "http://<url-front-ppe>/transaccion/?id=" + codigoTransaccion
      }
    }
  }

  async createWithPersona() {

  }

  async findAll() {
    const orders = await this.ordenRepository.find({
      order: {
        idOrden: 'DESC'
      }
    });
    const ordenes = []
    for (const orden of orders) {
      const ordenConcepto = await this.ordenConceptoservice.findAllWithConceptos(orden)
      ordenes.push({
        ...orden,
        ordenConcepto
      })
    }

    return ordenes
  }

  async findAllByUser(req: Request) {
    const iss = req['user']['iss']
    const ci = decrypt(iss)
    const user = await this.usersService.findByCi(ci)
    const orders = await this.ordenRepository.find({
      where: {
        user
      },
      order: {
        idOrden: 'DESC'
      }
    })

    const ordenes = []
    for (const orden of orders) {
      const preinscripcion = await this.preinscripcionService.findByOrden(orden)
      const conceptos = await this.ordenConceptoservice.findAllWithConceptos(orden)
      ordenes.push({
        ...orden,
        preinscripcion,
        conceptos
      })
    }

    return ordenes
  }

  // async findAllByUser(req: Request) {
  //   const iss = req['user']['iss']
  //   const ci = decrypt(iss)
  //   const user = await this.usersService.findByCi(ci)
  //   let preinscripcion
  //   if (user.role === Role.TEC) {
  //     preinscripcion = await this.preinscripcionService.findAllByCarrera(user.id_carrera)
  //   }
  //   const orders = await this.ordenRepository.find({
  //     where: {
  //       user
  //     },
  //     order: {
  //       idOrden: 'DESC'
  //     }
  //   })

  //   const ordenes = []
  //   for (const o of orders) {
  //     const preinscripcion = await this.preinscripcionService.findByOrden(o)
  //     const conceptos = await this.ordenConceptoservice.findAllWithConceptos(o)

  //     ordenes.push({
  //       ...o,
  //       conceptos,
  //       preinscripcion
  //     })
  //   }

  //   return {
  //     ordenes,
  //     preinscripcion
  //   }
  // }

  async findCodigoSeguimiento(codigo: string) {
    const orden = await this.ordenRepository.findOneBy({ codigoTransaccion: codigo })

    if (!orden) {
      throw new NotFoundException({
        success: false,
        error: 'Not Found',
        message: 'Orden no existente. Compruebe el código de transacción/seguimiento.'
      })
    }

    const moneda = await this.monedaService.findOne(orden.id_moneda);
    const conceptos = await this.ordenConceptoservice.findAllWithConceptos(orden);
    const preinscripcion = await this.preinscripcionService.findByOrden(orden)

    return {
      ...orden,
      conceptos,
      moneda,
      preinscripcion
    }
  }

  async findOne(id: number) {
    const orden = await this.ordenRepository.findOneBy({ idOrden: id })

    if (!orden) {
      throw new NotFoundException({
        success: false,
        error: 'Not Found',
        message: 'Orden no existente. Compruebe el código de transacción/seguimiento.'
      })
    }

    const moneda = await this.monedaService.findOne(orden.id_moneda);
    const conceptos = await this.ordenConceptoservice.findAllWithConceptos(orden);
    const preinscripcion = await this.preinscripcionService.findByOrden(orden)

    return {
      ...orden,
      conceptos,
      moneda,
      preinscripcion
    }
  }

  update(id: number, updateOrdenDto: UpdateOrdenDto) {
    return this.ordenRepository.update(id, updateOrdenDto)
  }

  remove(id: number) {
    return `This action removes a #${id} orden`;
  }
}
