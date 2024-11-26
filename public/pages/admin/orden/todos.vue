<template>
    <div>
        <AdminTitle title="Todos los pedidos" keyTitle="todos" />
        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <OrdenAcciones />
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
                                                    Concepto/Producto
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Lista de costos
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Sub total
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Monto total
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting text-center">
                                                    Fecha de pedido
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting text-center">
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
                                                    <b>{{ order.descripcion }}</b>
                                                    <br>
                                                    <div class="ssl-info">
                                                        <img id="sslStatus1029"
                                                            src="/public/assets/admin/img/ssl-loading.gif"
                                                            data-toggle="tooltip" title="Cargando..." width="12px"
                                                            class="ssl-statusssl-state ssl-active ssl-sync">
                                                    </div>
                                                    &nbsp;<span class="text-small">{{ order.user ?
                                                        `${order.user.numeroDocumento} ${order.user.nombres}` :
                                                        `${order.persona.ci} ${order.persona.nombres}` }}</span>
                                                </td>
                                                <td class="text-nowrap">
                                                    <ul class="list-disc">
                                                        <li v-for="(oc, id_oc) of order.ordenConcepto" :key="id_oc"
                                                            class="list-item">
                                                            Bs. {{ oc.costo }}<br>
                                                            <span class="small">{{ oc.concepto.concepto }}</span>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="text-nowrap">
                                                    Bs. {{ order.subTotal }}<br>
                                                    <span class="small">Bs. {{ order.comision }} comisión</span>
                                                </td>
                                                <td class="text-nowrap">
                                                    Bs. {{ order.montoTotal }}<br>
                                                    <!-- <span class="small">Bs. {{ order.comision }} comisión</span> -->
                                                </td>
                                                <td class="text-nowrap text-center">
                                                    <DateFormat :date="order.creadoEl" />
                                                </td>
                                                <td class="text-nowrap">
                                                    <span class="status" :class="Estado[order.estadoPago]">
                                                        {{ EstadoPagoName[order.estadoPago] }}
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
                                                                <a href="#">
                                                                    <UIcon name="i-heroicons-list-bullet"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Ver Detalle
                                                                </a>
                                                            </li>
                                                            <li v-if="order.estadoPago === EstadoPago.EN_PROCESO">
                                                                <a href="#">
                                                                    <UIcon name="i-material-symbols-block"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Cancelar pedido
                                                                </a>
                                                            </li>
                                                            <li v-if="order.estadoPago === EstadoPago.PROCESADO">
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
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Todos los pedidos | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Todos los pedidos | Admin'
})

import AdminTitle from '~/components/admin/AdminTitle.vue';
import OrdenAcciones from '~/components/admin/orden/Acciones.vue'
import { EstadoPago, Estado, EstadoPagoName } from '~/enums/EstadoPago.enum';
import 'datatables.net';
import { useApiFetch } from '~/composables/useApiFetch'
import DateFormat from '~/components/admin/administracion/DateFormat.vue';

const orders = ref(null)
const getOrders = async () => {
    try {
        const data = await useApiFetch('/orden/all')

        orders.value = data
        console.log(orders.value);

        // orders.value = [
        //     {
        //         "idOrden": 1,
        //         "descripcion": "Compra de materiales",
        //         "codigoOrden": 12345,
        //         "cantidad": 1,
        //         "estadoPago": EstadoPagoName.PENDIENTE.toUpperCase(),
        //         "montoTotal": 22.00,
        //         "idUser": 7
        //     },
        //     {
        //         "idOrden": 2,
        //         "descripcion": "Compra de ",
        //         "codigoOrden": 12345,
        //         "cantidad": 1,
        //         "estadoPago": EstadoPagoName.CANCELADO.toUpperCase(),
        //         "montoTotal": 25.00,
        //         "idUser": 7
        //     },
        // ]
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
    table.column(5).search(statusValue).draw();
};

const initializeTable = () => {
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
}

onMounted(() => {
    setTimeout(() => {
        getOrders()
        setTimeout(() => {
            initializeTable()
        }, 250)
    }, 250)
})
</script>

<style>
/* @import 'datatables.net-dt/css/dataTables.dataTables.min.css'; */
</style>