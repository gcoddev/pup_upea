<template>
    <div class="main-body">
        <div class="container">
            <div class="main-grid">
                <SidebarUsuario />
                <div class="main-content ">
                    <div class="table-container">
                        <div class="table-top mb-3">
                            <div class="d-flex mt-3">
                                <label>Ver</label>
                                <div class="dropdown view-filter-btns ml-2">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle"
                                        data-toggle="dropdown">
                                        <span class="status" :class="status"></span>
                                        <span>{{ selectedStatusLabel }}</span>
                                        <UIcon name="i-material-symbols-arrow-drop-down" class="w-5 h-5" />
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li>
                                            <a href="#" @click="filterByStatus('', 'hidden')">
                                                <span class="status">
                                                    Todas las entradas
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPagoName.PROCESADO}`, `${Estado.PROCESADO}`)">
                                                <span class="status" :class="Estado.PROCESADO">
                                                    {{ EstadoPagoName.PROCESADO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPagoName.EN_PROCESO}`, `${Estado.EN_PROCESO}`)">
                                                <span class="status" :class="Estado.EN_PROCESO">
                                                    {{ EstadoPagoName.EN_PROCESO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPagoName.EXPIRADO}`, `${Estado.EXPIRADO}`)">
                                                <span class="status" :class="Estado.EXPIRADO">
                                                    {{ EstadoPagoName.EXPIRADO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPagoName.FALLIDO}`, `${Estado.FALLIDO}`)">
                                                <span class="status" :class="Estado.FALLIDO">
                                                    {{ EstadoPagoName.FALLIDO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPagoName.ANULADO}`, `${Estado.ANULADO}`)">
                                                <span class="status" :class="Estado.ANULADO">
                                                    {{ EstadoPagoName.ANULADO }}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="d-flex">
                                <label>Buscar</label>
                                <input type="search" class="form-control h-8 mt-1" id="customSearch">
                            </div>
                        </div>
                        <div class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <div class="listtable">
                                <!-- <div class="dataTables_filter">
                                    <label>
                                        <input type="search" class="form-control form-control-sm" placeholder="">
                                    </label>
                                </div> -->
                                <table class="table table-list dataTable no-footer dtr-inline" role="grid"
                                    id="tablaPedidos">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting">
                                                #
                                                <UIcon name="i-material-symbols-unfold-more"
                                                    class="w-3 h-3 d-inline-block" />
                                            </th>
                                            <th class="sorting">
                                                Concepto
                                                <UIcon name="i-material-symbols-unfold-more"
                                                    class="w-3 h-3 d-inline-block" />
                                            </th>
                                            <th class="sorting">
                                                Lista de costos
                                                <UIcon name="i-material-symbols-unfold-more"
                                                    class="w-3 h-3 d-inline-block" />
                                            </th>
                                            <th class="sorting">
                                                Fecha de pedido
                                                <UIcon name="i-material-symbols-unfold-more"
                                                    class="w-3 h-3 d-inline-block" />
                                            </th>
                                            <th class="sorting">
                                                Estado
                                                <UIcon name="i-material-symbols-unfold-more"
                                                    class="w-3 h-3 d-inline-block" />
                                                <span class="sorting-arrows"></span>
                                            </th>
                                            <th class="sorting">
                                                &nbsp;
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(order, id_order) of orders" :key="id_order">
                                            <td class="text-nowrap">
                                                {{ id_order + 1 }}
                                            </td>
                                            <td class="dtr-control">
                                                <button type="button" class="btn-table-collapse"></button>
                                                <b v-if="order.orden.persona">
                                                    {{ order.orden.persona.nombres }}
                                                    {{ order.orden.persona.paterno }}
                                                    {{ order.orden.persona.materno }}
                                                </b>
                                                <b v-if="order.orden.user">
                                                    {{ order.orden.user.nombres }}
                                                    {{ order.orden.user.paterno }}
                                                    {{ order.orden.user.materno }}
                                                </b>
                                                <br>
                                                <div class="ssl-info">
                                                    <!-- <img id="sslStatus1029"
                                                        src="/public/assets/admin/img/ssl-loading.gif"
                                                        data-toggle="tooltip" title="Cargando..." width="12px"
                                                        class="ssl-statusssl-state ssl-active ssl-sync"> -->
                                                    {{ order.convocatoria.carrera.nombre_completo }}
                                                </div>
                                                &nbsp;<span class="text-small">{{ order.codigoOrden }}</span>
                                            </td>
                                            <td class="text-nowrap">
                                                Bs. {{ order.orden.montoTotal }}<br>
                                                <!-- <span class="small">Anual</span> -->
                                            </td>
                                            <td class="text-nowrap">
                                                {{ order.fecha.split('T')[0] }}
                                            </td>
                                            <td class="text-nowrap">
                                                <span class="status" :class="Estado[order.orden.estadoPago]">
                                                    {{ EstadoPagoName[order.orden.estadoPago] }}
                                                </span>
                                            </td>
                                            <td class="cell-action">
                                                <div class="dropdown">
                                                    <a href="#" class="btn btn-icon dropdown-toggle"
                                                        data-toggle="dropdown">
                                                        <UIcon name="i-heroicons-ellipsis-horizontal"
                                                            class="w-5 h-5 mr-2" />
                                                    </a>
                                                    <ul class="dropdown-menu  pull-right" role="menu">
                                                        <li>
                                                            <a :href="`${apiUrl}/comprobante/${order.orden.codigoTransaccion}`"
                                                                target="_blank">
                                                                <UIcon name="i-heroicons-list-bullet"
                                                                    class="w-5 h-5 mr-2" />
                                                                Ver Detalle
                                                            </a>
                                                        </li>
                                                        <li v-if="order.orden.estadoPago === EstadoPago.EN_PROCESO">
                                                            <a href="#">
                                                                <UIcon name="i-material-symbols-block"
                                                                    class="w-5 h-5 mr-2" />
                                                                Cancelar pedido
                                                            </a>
                                                        </li>
                                                        <li v-if="order.orden.estadoPago === EstadoPago.COMPLETADO">
                                                            <a href="#">
                                                                <UIcon name="i-heroicons-ticket-solid"
                                                                    class="w-5 h-5 mr-2" />
                                                                Ver comprobante
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <div class="dataTables_paginate paging_simple_numbers">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled">
                                        <a href="#" class="page-link">
                                            Anterior
                                        </a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" class="page-link">
                                            1
                                        </a>
                                    </li>
                                    <li class="paginate_button page-item next disabled">
                                        <a href="#" class="page-link">Siguiente</a>
                                    </li>
                                </ul>
                            </div> -->
                            <div class="dataTables_length">
                                <label>
                                    Ver
                                    <select class="custom-select custom-select-sm form-control form-control-sm"
                                        id="entrySelect">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="-1">Todo</option>
                                    </select>
                                    Entradas
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Ordenes | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Orden | Admin'
})

import SidebarUsuario from '~/components/admin/administracion/Sidebar'
import { EstadoPagoName, EstadoPago, Estado } from '~/enums/EstadoPago.enum';
import 'datatables.net';
import { useUserStore } from '~/stores/user';
const user = useUserStore()
const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)

const orders = ref([])
const getOrders = async () => {
    try {
        const data = await useApiFetch('/preinscripcion/carrera')

        // for (const o of data) {
        //     if (o.convocatoria.id_carrera == user.data.id_carrera) {
        //         orders.value.push(o)
        //     }
        // }
        console.log(data)
        orders.value = data
        // console.log(orders.value);
        // console.log(user.data);
    } catch (err) {
        console.log(err);
    }
}

const selectedStatusLabel = ref('Todas las entradas');
const status = ref('hidden')
const filterByStatus = (statusValue, stat) => {
    selectedStatusLabel.value = statusValue ? statusValue : 'Todas las entradas';
    status.value = stat;
    const table = $('#tablaPedidos').DataTable();
    table.column(4).search(statusValue).draw();
};

onMounted(() => {
    getOrders()

    setTimeout(() => {
        const table = $('#tablaPedidos').DataTable({
            language: {
                "sEmptyTable": "No hay datos disponibles en la tabla",
                "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                "sInfoEmpty": "Mostrando 0 a 0 de 0 entradas",
                "sInfoFiltered": "(filtrado de _MAX_ entradas totales)",
                "sLengthMenu": "Ver _MENU_ entradas",
                "sLoadingRecords": "Cargando...",
                "sProcessing": "Procesando...",
                "sSearch": "Buscar:",
                "sZeroRecords": "No se encontraron resultados",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": activar para ordenar la columna de manera descendente"
                }
            },
            lengthChange: false,
            pageLength: 5,
            paging: true,
            searching: true,
            ordering: true,
        })

        $('#customSearch').on('keyup', function () {
            table.search(this.value).draw();
        });

        $('#entrySelect').on('change', function () {
            const value = $(this).val();
            table.page.len(value === "-1" ? -1 : parseInt(value)).draw();
        });
    }, 250)
})
</script>

<style>
/* @import 'datatables.net-dt/css/dataTables.dataTables.min.css'; */
</style>