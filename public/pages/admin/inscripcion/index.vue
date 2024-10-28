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
                                                @click="filterByStatus(`${EstadoPago.COMPLETADO}`, `${Estado.COMPLETADO}`)">
                                                <span class="status" :class="Estado.COMPLETADO">
                                                    {{ EstadoPago.COMPLETADO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPago.PENDIENTE}`, `${Estado.PENDIENTE}`)">
                                                <span class="status" :class="Estado.PENDIENTE">
                                                    {{ EstadoPago.PENDIENTE }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPago.ERRONEO}`, `${Estado.ERRONEO}`)">
                                                <span class="status" :class="Estado.ERRONEO">
                                                    {{ EstadoPago.ERRONEO }}
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                @click="filterByStatus(`${EstadoPago.CANCELADO}`, `${Estado.CANCELADO}`)">
                                                <span class="status" :class="Estado.CANCELADO">
                                                    {{ EstadoPago.CANCELADO }}
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
                                                <b>{{ order.descripcion }}</b>
                                                <br>
                                                <div class="ssl-info">
                                                    <img id="sslStatus1029"
                                                        src="/public/assets/admin/img/ssl-loading.gif"
                                                        data-toggle="tooltip" title="Cargando..." width="12px"
                                                        class="ssl-statusssl-state ssl-active ssl-sync">
                                                </div>
                                                &nbsp;<span class="text-small">{{ order.codigoOrden }}</span>
                                            </td>
                                            <td class="text-nowrap">
                                                Bs. {{ order.montoTotal.toFixed(2) }}<br>
                                                <span class="small">Anual</span>
                                            </td>
                                            <td class="text-nowrap">
                                                24/12/2024
                                            </td>
                                            <td class="text-nowrap">
                                                <span class="status" :class="Estado[order.estadoPago]">
                                                    {{ EstadoPago[order.estadoPago] }}
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
                                                        <li
                                                            v-if="order.estadoPago === EstadoPago.PENDIENTE.toUpperCase()">
                                                            <a href="#">
                                                                <UIcon name="i-material-symbols-block"
                                                                    class="w-5 h-5 mr-2" />
                                                                Cancelar pedido
                                                            </a>
                                                        </li>
                                                        <li
                                                            v-if="order.estadoPago === EstadoPago.COMPLETADO.toUpperCase()">
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
import { EstadoPago, Estado } from '~/enums/EstadoPago.enum';
import 'datatables.net';
import { useApiFetch } from '~/composables/useApiFetch'

const orders = ref(null)
const getOrders = async () => {
    try {
        const { data, error } = await useApiFetch('/orden')

        orders.value = data.value
        console.log(data.value);

        orders.value = [
            {
                "idOrden": 1,
                "descripcion": "Compra de materiales",
                "codigoOrden": 12345,
                "cantidad": 1,
                "estadoPago": EstadoPago.PENDIENTE.toUpperCase(),
                "montoTotal": 22.00,
                "idUser": 7
            },
            {
                "idOrden": 2,
                "descripcion": "Compra de ",
                "codigoOrden": 12345,
                "cantidad": 1,
                "estadoPago": EstadoPago.CANCELADO.toUpperCase(),
                "montoTotal": 25.00,
                "idUser": 7
            },
        ]
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