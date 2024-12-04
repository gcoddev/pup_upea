<template>
    <div class="main-body">
        <div class="container-fluid">
            <div class="main-grid" v-if="seguimiento">
                <div class="main-content">
                    <div class="table-scrollbar">
                        <div class="invoice-gary">
                            <div class="section d-flex align-items-center justify-content-between">
                                <div class="d-flex">
                                    <img src="~/public/images/upea.png" alt="UPEA" width="60">
                                    <h1 class="h3">&nbsp; PUP UPEA</h1>
                                </div>
                                <div class="m-0 p-0">
                                    <img :src="qrcode" alt="UPEA" width="200">
                                </div>
                            </div>
                            <div class="mt-0 mb-3 px-5 py-3 row" :class="EstadoBg[seguimiento.estadoPago]">
                                <span class="invoice-title text-white col-8 h3" style="font-weight: 500!important;">
                                    Orden #{{ seguimiento.idOrden }}
                                </span>
                                <span class="invoice-title text-white col-4 h4 mt-2">
                                    {{ EstadoPagoName[seguimiento.estadoPago] }}
                                </span>
                            </div>
                            <div class="section">
                                <div class="section-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <ul class="list-info list-info-50">
                                                <li>
                                                    <span class="list-info-title">Fecha del pago</span>
                                                    <span class="list-info-text">{{
                                                        seguimiento.creadoEl.split('T')[0] }}</span>
                                                </li>
                                                <li>
                                                    <span class="list-info-title">Método de Pago</span>
                                                    <span class="list-info-text">{{ seguimiento.metodoPago
                                                        }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <span class="list-info-title">A:</span>
                                            <address class="list-info-text" v-if="seguimiento.persona">
                                                {{ seguimiento.persona.ci }}
                                                {{ seguimiento.persona.expedido }}<br>
                                                {{ seguimiento.persona.nombres }}
                                                {{ seguimiento.persona.paterno }}
                                                {{ seguimiento.persona.materno }}<br>
                                                El Alto, La Paz<br>
                                                Bolivia
                                            </address>
                                            <address class="list-info-text" v-if="seguimiento.user">
                                                {{ seguimiento.user.numeroDocumento }}
                                                {{ seguimiento.user.expedido }}<br>
                                                {{ seguimiento.user.nombres }}
                                                {{ seguimiento.user.paterno }}
                                                {{ seguimiento.user.materno }}<br>
                                                El Alto, La Paz<br>
                                                Bolivia
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h3>Conceptos</h3>
                                <div class="section-body">
                                    <div class="table-responsive">
                                        <table class="table table-condensed">
                                            <thead>
                                                <tr>
                                                    <th width="61%">Descripción</th>
                                                    <th width="20%"></th>
                                                    <th width="19%" class="">Importe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-blue-100">
                                                    <td colspan="2" class="px-3">
                                                        {{ seguimiento.conceptos[0].concepto.concepto }}
                                                        <span v-if="seguimiento.convocatoria">
                                                            ({{
                                                                seguimiento.preinscripcion.convocatoria.carrera.nombre_completo
                                                            }})
                                                        </span>
                                                    </td>
                                                    <td class="">Bs. {{ seguimiento.conceptos[0].costo }}</td>
                                                </tr>
                                                <tr class="sub-total-row first">
                                                    <td></td>
                                                    <td>Sub Total</td>
                                                    <td>Bs. {{ seguimiento.subTotal }}</td>
                                                </tr>
                                                <tr class="sub-total-row last">
                                                    <td></td>
                                                    <td>Comisión</td>
                                                    <td>Bs. {{ seguimiento.comision }}</td>
                                                </tr>
                                                <tr class="total-row" style="background-color:#4ADE80!important;">
                                                    <td></td>
                                                    <td>
                                                        <b>Total</b>
                                                    </td>
                                                    <td>
                                                        <b>Bs. {{ seguimiento.montoTotal }}</b>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="section">
                                <h3>Transacciones</h3>
                                <div class="section-body">
                                    <div class="table-responsive">
                                        <table class="table table-condensed m-b-0">
                                            <thead>
                                                <tr>
                                                    <th width="41%" class=""><span>Fecha</span></th>
                                                    <th width="20%" class=""><span>Método</span></th>
                                                    <th width="20%" class=""><span>ID Transacción</span></th>
                                                    <th width="19%" class=""><span>Total</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="total-row">
                                                    <td class="px-3">
                                                        {{ seguimiento.modificadoEl.split('T')[0] }}
                                                    </td>
                                                    <td class="">{{ seguimiento.metodoPago }}</td>
                                                    <td class="">{{ seguimiento.codigoTransaccion }}</td>
                                                    <td class="">Bs. {{ seguimiento.montoTotal }}</td>
                                                </tr>
                                                <tr class="">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Balance</td>
                                                    <td>Bs.
                                                        {{ ((Number(seguimiento.subTotal) +
                                                            Number(seguimiento.comision)) -
                                                            Number(seguimiento.montoTotal)).toFixed(2) }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-grid" v-if="!seguimiento && errorSeguimiento">
                <div class="alert alert-info d-flex align-items-center p-4 w-100" role="alert">
                    <UIcon name="i-material-symbols-warning" class="w-5 h-5" />
                    <div>
                        &nbsp; {{ errorSeguimiento.message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { EstadoPagoName, EstadoBg } from '~/enums/EstadoPago.enum'
import { useRoute } from 'vue-router';
import QRCode from 'qrcode'

const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)

const route = useRoute();
const seguimiento = ref(null)
const errorSeguimiento = ref(null)
const qrcode = ref('')
onMounted(async () => {
    const codigoSeguimiento = route.query.cod;

    verificarOrden(codigoSeguimiento)
});


const verificarOrden = async (codigoSeguimiento) => {
    if (codigoSeguimiento) {
        try {
            const data = await useApiFetch(`/orden/codigo/${codigoSeguimiento}`)

            seguimiento.value = data
            qrcode.value = await QRCode.toDataURL(`${apiUrl.value}/comprobante/${seguimiento.value.codigoTransaccion}`, {
                margin: 1
            })

            errorSeguimiento.value = null
        } catch (err) {
            seguimiento.value = null
            if (!err.data.success) {
                errorSeguimiento.value = err.data
            } else {
                errorSeguimiento.value = null
            }
        }
    }
}
</script>
<style scoped>
/* Ajustes generales */
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.main-body {
    margin: 0;
    padding: 0 !important;
}

/* Reglas específicas para impresión */
@media print {
    body {
        margin: 0;
        padding: 0;
    }

    .main-body {
        margin: 0;
        padding: 0 !important;
    }
}

.main-body * {
    font-size: 1.05em;
}
</style>
