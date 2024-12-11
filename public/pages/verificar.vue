<template>
    <div>
        <section class="m-auto container pt-10">
            <div class="">
                <div class="space-y-2 pb-8 pt-6 md:space-y-5 text-center">
                    <h1
                        class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 font-heading">
                        Verificar pago
                    </h1>
                    <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        Verificar el estado de su pago realizado con anterioridad
                    </p>
                </div>

                <div class=" flex flex-col justify-center">
                    <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                        <!-- <div class="overflow-hidden z-0 rounded-full relative p-3">
                            <div class="relative flex z-50 bg-white rounded-full" @keydown.enter="verificarOrden()">
                                <input type="text" placeholder="ingrese código de seguimiento"
                                    class="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 placeholder-gray-600 outline-none input-codigo"
                                    v-model="codigoSeguimiento">
                                <button type="button"
                                    class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                                    @click="verificarOrden()">
                                    Buscar
                                </button>
                            </div>
                            <div class="glow glow-1 z-10 bg-pink-400 absolute"></div>
                            <div class="glow glow-2 z-20 bg-purple-400 absolute"></div>
                            <div class="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                            <div class="glow glow-4 z-40 bg-blue-400 absolute"></div>
                        </div> -->
                        <div
                            class="mb-16 p-1.5 xl:pl-7 inline-block md:max-w-xl w-full border border-gray-200 rounded-3xl focus-within:ring focus-within:ring-blue-500">
                            <div class="flex flex-wrap items-center">
                                <div class="w-full xl:flex-1">
                                    <input
                                        class="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 placeholder-gray-600 outline-none"
                                        name="domain" id="searchDomain" type="text"
                                        placeholder="Ingrese el código de transacción" v-model="codigoSeguimiento"
                                        @keydown.enter="verificarOrden()">
                                </div>
                                <div class="w-full xl:w-auto">
                                    <div class="block">
                                        <button type="submit"
                                            class="py-4 px-7 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                                            @click="verificarOrden()">
                                            Encontrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="main-body">
            <div class="container">
                <div class="main-grid" v-if="seguimiento">
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
                                                        <span class="list-info-title">{{ seguimiento.metodoPago
                                                            }}</span>
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
                    <div class="alert alert-info d-flex align-items-center p-4 w-100" role="alert">
                        <UIcon name="i-material-symbols-warning" class="w-5 h-5" />
                        <div>
                            &nbsp; {{ errorSeguimiento.message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})

import { ref, onMounted } from 'vue'
import { EstadoPagoName, EstadoLabel } from '~/enums/EstadoPago.enum'

const codigoSeguimiento = ref('')
const seguimiento = ref(null)
const errorSeguimiento = ref(null)
const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)

const verificarOrden = async () => {
    if (codigoSeguimiento.value) {
        try {
            const data = await useApiFetch(`/orden/codigo/${codigoSeguimiento.value}`)

            seguimiento.value = data
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

onMounted(() => {
    // verificarOrden()
})
</script>

<style scoped>
.input-codigo {
    padding: 20px 30px !important;
    height: auto !important;
    border-radius: 50px !important;
}
</style>