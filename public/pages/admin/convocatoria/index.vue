<template>
    <div>
        <AdminTitle title="Convocatorias" keyTitle="convocatoria" />
        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarUsuario />
                    <div class="main-content ">
                        <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />

                        <div class="table-container">
                            <div class="table-top mb-3">
                                <div class="d-flex mt-3" v-if="user.data.role == Role.ADMIN">
                                    <label>Ver</label>
                                    <div class="dropdown view-filter-btns ml-2">
                                        <button type="button" class="btn btn-default btn-xs dropdown-toggle"
                                            data-toggle="dropdown">
                                            <span class="status" :class="status"></span>
                                            <span>{{ selectedCarreraLabel }}</span>
                                            <UIcon name="i-material-symbols-arrow-drop-down" class="w-5 h-5" />
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li>
                                                <a href="#" @click="filterByCarrera('', 'hidden')">
                                                    <span class="status">
                                                        Todas las carreras
                                                    </span>
                                                </a>
                                            </li>
                                            <li v-for="(carr, id_carr) of carreras" :key="id_carr">
                                                <a href="#" @click="filterByCarrera(carr.nombre_completo)">
                                                    <span class="status status-answered">
                                                        {{ carr.nombre_completo }}
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div v-else></div>
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
                                    <table class="table table-list dataTable table-hover no-footer dtr-inline"
                                        role="grid" id="tablaConvocatorias">
                                        <thead>
                                            <tr role="row">
                                                <th class="sorting">
                                                    #
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Fecha
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Carrera
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Gestión
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Modalidades
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sortin">
                                                    Cupos
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Estado
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    &nbsp;
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(conv, id_conv) of convocatorias" :key="id_conv">
                                                <td class="text-nowrap">
                                                    {{ id_conv + 1 }}
                                                </td>
                                                <td class="text-nowrap text-center">
                                                    <DateRange :fecha_ini="conv.fecha_ini"
                                                        :fecha_fin="conv.fecha_fin" />
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ conv.carrera ? conv.carrera.nombre_completo : '' }}
                                                    <p class="text-muted d-flex align-items-center">
                                                        <UIcon name="i-heroicons-home-solid" class="w-3 h-3" />
                                                        &nbsp;Sede {{ conv.sede ? conv.sede.nombre : '' }}
                                                    </p>
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ conv.gestion ? `${conv.gestion.periodo} -
                                                    ${conv.gestion.gestion}` : '' }}
                                                </td>
                                                <td class="text-nowrap">
                                                    <ul class="list-disc">
                                                        <li v-for="(mod, id_mod) of conv.modalidad" :key="id_mod"
                                                            class="list-item">
                                                            {{ mod.modalidad }}
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="text-center">
                                                    {{ conv.cupos }}
                                                    <!-- <span class="small">Anual</span> -->
                                                </td>
                                                <td class="text-nowrap">
                                                    <span class="status"
                                                        :class="conv.estado == Estado.ACTIVO ? 'status-active' : 'status-unpaid'">
                                                        {{ EstadoName[conv.estado] }}
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
                                                                <NuxtLink
                                                                    :to="`/admin/convocatoria/${conv.idConvocatoria}`">
                                                                    <UIcon name="i-heroicons-pencil-square"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Editar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <a href="#"
                                                                    @click="updateEstado(conv.idConvocatoria, conv.estado)"
                                                                    v-if="conv.estado == Estado.ACTIVO">
                                                                    <UIcon name="i-heroicons-lock-closed"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Inhabilitar
                                                                </a>
                                                                <a href="#"
                                                                    @click="updateEstado(conv.idConvocatoria, conv.estado)"
                                                                    v-if="conv.estado == Estado.INACTIVO">
                                                                    <UIcon name="i-heroicons-lock-open"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Habilitar
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
    title: 'Convocatorias | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Convocatorias | Admin'
})

import { useApiFetch } from '~/composables/useApiFetch'
import AdminTitle from '~/components/admin/AdminTitle.vue'
import { inject, computed } from 'vue'
import SidebarUsuario from '~/components/admin/administracion/Sidebar.vue'
import { Estado, EstadoName, EstadoClass } from '~/enums/Estado.enum';
import 'datatables.net';

import { Role } from '~/enums/Role.enum';
import { useUserStore } from '~/stores/user'
const user = useUserStore()

import Message from '~/components/Message.vue';
import DateRange from '~/components/admin/administracion/DateRange.vue';

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

const theme = ref('')

const errorMessage = ref('')
const successMessage = ref('')

const convocatorias = ref(null)
const getConvocatoria = async () => {
    try {
        const data = await useApiFetch('/convocatoria')

        console.log(data);

        convocatorias.value = data
    } catch (e) {
        console.log(e);
    }
}

const updateEstado = async (id, estado) => {
    try {
        const data = await useApiFetch(`/convocatoria/${id}`, {
            method: 'PATCH',
            body: {
                estado: estado == Estado.ACTIVO ? Estado.INACTIVO : Estado.ACTIVO
            }
        })

        messageAlert.value = data.message;
        statusAlert.value = 'success'

        setTimeout(() => {
            getConvocatoria()
        }, 250)
    } catch (e) {
        console.log(e);
    }
}

const carreras = ref(null)
const getCarreras = async () => {
    try {
        const data = await useApiFetch('/carrera')

        carreras.value = data
    } catch (e) {
        console.log(e);
    }
}
const selectedCarreraLabel = ref('Todas las carreras');
const status = ref('hidden')
const filterByCarrera = (carrera) => {
    selectedCarreraLabel.value = carrera ? carrera : 'Todas las carreras';
    const table = $('#tablaConvocatorias').DataTable();
    table.search(carrera).draw();
};

const initializeTable = () => {
    const table = $('#tablaConvocatorias').DataTable({
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
        autoWidth: false,
        // scrollX: true,
        // responsive: false
    })

    $('#customSearch').on('keyup', function () {
        table.search(this.value).draw();
    });

    $('#entrySelect').on('change', function () {
        const value = $(this).val();
        table.page.len(value === "-1" ? -1 : parseInt(value)).draw();
    });
}

const formatDate = computed((date_ini, date_fin) => {
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    const dateObj = new Date(date_ini)
    const day = dateObj.getDate().toString().padStart(2, '0')
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    const dateObj2 = new Date(date_fin)
    const day2 = dateObj2.getDate().toString().padStart(2, '0')
    const month2 = months[dateObj2.getMonth()]
    const year2 = dateObj2.getFullYear()
    return `${day} de ${month} de ${year}<br>al<br>${day2} de ${month2} de ${year2}`
})

const setTitle = inject('setTitle')
onMounted(() => {
    setTimeout(() => {
        getCarreras()
        getConvocatoria()
        if (setTitle) {
            setTitle('usuario')
        }

        setTimeout(() => {
            initializeTable()
            $('#tablaConvocatorias').DataTable().search('').draw();
        }, 250)
    }, 250)
    const message = sessionStorage.getItem('successMessage')

    if (message) {
        messageAlert.value = message
        statusAlert.value = 'success'
        sessionStorage.removeItem('successMessage')
    }

    if (localStorage.theme) {
        theme.value = localStorage.theme
    }
})
</script>

<style>
/* @import 'datatables.net-dt/css/dataTables.dataTables.min.css'; */
/* .dataTables_scrollBody {
    overflow: auto hidden !important;
}

.dataTables_scroll {
    z-index: 999!important;
} */
</style>