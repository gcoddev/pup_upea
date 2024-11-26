<template>
    <div>
        <AdminTitle :title="`Detalle - Orden #${seguimiento.idOrden}`" keyTitle="orden" v-if="seguimiento" />
        <div class="main-body">
            <div class="container">
                <div class="main-grid" v-if="seguimiento">
                    <OrdenAcciones />
                    <div class="main-content">
                        <div class="table-scrollbar">
                            <div class="invoice">
                                <div class="section">
                                    <div class="section-body">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <span class="invoice-title"> Orden #{{ seguimiento.idOrden }}
                                                    <span class="invoice-status label label-lg"
                                                        :class="EstadoLabel[seguimiento.estadoPago]">
                                                        {{ EstadoPagoName[seguimiento.estadoPago] }}
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-5">
                                                <ul class="list-info list-info-50">
                                                    <li>
                                                        <span class="list-info-text">Fecha del pago</span>
                                                        <span class="list-info-title">{{
                                                            seguimiento.creadoEl.split('T')[0] }}</span>
                                                    </li>
                                                    <li>
                                                        <span class="list-info-text">Método de Pago</span>
                                                        <span class="list-info-title">
                                                            {{ seguimiento.metodoPago }}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="section-body">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <h3>Pagar a:</h3>
                                                <address>

                                                </address>
                                            </div>
                                            <div class="col-md-5">
                                                <h3>A:</h3>
                                                <address v-if="seguimiento.persona">
                                                    {{ seguimiento.persona.ci }}
                                                    {{ seguimiento.persona.expedido }}<br>
                                                    {{ seguimiento.persona.nombres }}
                                                    {{ seguimiento.persona.paterno }}
                                                    {{ seguimiento.persona.materno }}<br>
                                                    El Alto, La Paz<br>
                                                    Bolivia
                                                </address>
                                                <address v-if="seguimiento.user">
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
                                                    <tr>
                                                        <td colspan="2">
                                                            {{ seguimiento.conceptos[0].concepto.concepto }}
                                                            <span v-if="seguimiento.preinscripcion">
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
                                                    <tr class="total-row">
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
                                                    <tr>
                                                        <td class="">{{ seguimiento.modificadoEl.split('T')[0] }}</td>
                                                        <td class="">{{ seguimiento.metodoPago }}</td>
                                                        <td class="">{{ seguimiento.codigoTransaccion }}</td>
                                                        <td class="">Bs. {{ seguimiento.montoTotal }}</td>
                                                    </tr>
                                                    <tr class="total-row">
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
                    <div class="main-sidebar ">
                        <div class="sidebar-sticky">
                            <div class="panel panel-sidebar">
                                <div class="panel-heading">
                                    <h6 class="panel-title">
                                        <i class="fa fa-bookmark"></i>&nbsp; Acciones
                                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                                    </h6>
                                </div>
                                <div class="list-group">
                                    <a :href="`${apiUrl}/comprobante/${seguimiento.codigoTransaccion}`"
                                        class="list-group-item d-flex" target="_blank">
                                        <UIcon name="i-material-symbols-download-rounded" class="w-5 h-5" />
                                        <span class="bottom-5">&nbsp;Descargar</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-grid" v-if="!seguimiento && errorSeguimiento">
                    <OrdenAcciones />
                    <div class="alert alert-info d-flex align-items-center p-4 w-100" role="alert">
                        <UIcon name="i-material-symbols-warning" class="w-5 h-5" />
                        <div>
                            &nbsp; {{ errorSeguimiento.message }}
                        </div>
                    </div>
                </div>
                <div class="main-grid" v-if="!seguimiento">
                    <OrdenAcciones />
                    <div class="d-flex">
                        <div class="alert alert-warning d-flex align-items-center p-4 w-100" role="alert">
                            <UIcon name="i-material-symbols-warning" class="w-5 h-5" />
                            <div>
                                &nbsp; Error en el Detalle
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" @click="history.back()">
                            <UIcon name="heroicons-arrow-turn-up-left" class="w-5 h-5" />
                            &nbsp; Volver atrás
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Detalle | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Detalle | Admin'
})

import { useUserStore } from '~/stores/user'
const user = useUserStore()

import AdminTitle from '~/components/admin/AdminTitle.vue';
import OrdenAcciones from '~/components/admin/orden/Acciones.vue'
import { EstadoPago, Estado, EstadoPagoName, EstadoLabel } from '~/enums/EstadoPago.enum';
import DateFormat from '~/components/admin/administracion/DateFormat.vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const id_orden = ref('')
const seguimiento = ref(null)
const errorSeguimiento = ref(null)
const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)

const verificarOrden = async () => {
    try {
        const data = await useApiFetch(`/orden/${id_orden.value}`)
        seguimiento.value = data
        errorSeguimiento.value = null
        console.log(seguimiento.value)
    } catch (err) {
        seguimiento.value = null
        if (!err.data.success) {
            errorSeguimiento.value = err.data
        } else {
            errorSeguimiento.value = null
        }
    }
}

onMounted(() => {
    setTimeout(() => {
        id_orden.value = route.params.id
        verificarOrden()
    }, 250)
})
</script>

<style>
/* @import 'datatables.net-dt/css/dataTables.dataTables.min.css'; */
</style>