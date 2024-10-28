<template>
    <div>
        <AdminTitle title="Usuarios" keyTitle="usuario" />
        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarUsuario />
                    <div class="main-content ">
                        <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />

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
                                                <a href="#" @click="filterByStatus(Estado.ACTIVO, EstadoClass.ACTIVO)">
                                                    <span class="status" :class="EstadoClass.ACTIVO">
                                                        {{ EstadoName[Estado.ACTIVO] }}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    @click="filterByStatus(Estado.INACTIVO, EstadoClass.INACTIVO)">
                                                    <span class="status" :class="EstadoClass.INACTIVO">
                                                        {{ EstadoName[Estado.INACTIVO] }}
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
                                        id="tablaUsuarios">
                                        <thead>
                                            <tr role="row">
                                                <th class="sorting">
                                                    #
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    CI
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Nombres
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Apellidos
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Fecha nacimiento
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Usuario
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting">
                                                    Rol
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
                                            <tr v-for="(user, id_user) of users" :key="id_user">
                                                <td class="text-nowrap">
                                                    {{ id_user + 1 }}
                                                </td>
                                                <td class="dtr-control text-nowrap">
                                                    <button type="button" class="btn-table-collapse"></button>
                                                    <b>{{ user.numeroDocumento }}</b>
                                                    <br>
                                                    <span class="text-small">{{ user.expedido }}</span>
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ user.nombres }}
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ user.paterno }} {{ user.materno }}
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ user.fecha_nac }}
                                                </td>
                                                <td class="text-nowrap">
                                                    {{ user.username }}
                                                    <!-- <span class="small">Anual</span> -->
                                                </td>
                                                <td class="text-nowrap">
                                                    <span class="badge bg-primary px-3 py-1" style="font-size: .9em;">
                                                        {{ RoleName[user.role] }}
                                                    </span>
                                                </td>
                                                <td class="text-nowrap">
                                                    <span class="status"
                                                        :class="user.estado == Estado.ACTIVO ? EstadoClass.ACTIVO : EstadoClass.INACTIVO">
                                                        {{ EstadoName[user.estado] }}
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
                                                                <NuxtLink :to="'/admin/usuario/' + user.id">
                                                                    <UIcon name="i-heroicons-pencil-square"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Editar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <a href="#" @click="updateEstado(user.id, user.estado)"
                                                                    v-if="user.estado == Estado.ACTIVO">
                                                                    <UIcon name="i-heroicons-lock-closed"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Inhabilitar
                                                                </a>
                                                                <a href="#" @click="updateEstado(user.id, user.estado)"
                                                                    v-if="user.estado == Estado.INACTIVO">
                                                                    <UIcon name="i-heroicons-lock-open"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Habilitar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" @click="id_us = user.id"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#passwordModal">
                                                                    <UIcon name="i-heroicons-lock-closed-solid"
                                                                        class="w-5 h-5 mr-2" />
                                                                    Actualizar contraseña
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

            <div class="modal modal-lg fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <form action="PUT" @submit.prevent="changePassword()">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="passwordModalLabel">Actualizar contraseña</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="inputPassword">Contraseña</label>
                                    <input type="password" name="password" id="password" class="form-control"
                                        v-model="password">
                                </div>
                                <div class="form-group mt-3">
                                    <label for="confirmPassword">Confirmar contraseña</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword"
                                        class="form-control" v-model="confirm_password">
                                </div>
                                <div class="alert alert-danger" v-if="errorMessageModal">
                                    {{ errorMessageModal }}
                                    <UIcon name="i-heroicons-x-mark" class="w-5 h-5 cursor-pointer"
                                        @click="errorMessageModal = null">
                                    </UIcon>
                                </div>
                                <div class="modal-footer mt-5 p-0">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                        aria-label="Close">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Usuarios | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Usuarios | Admin'
})

import AdminTitle from '~/components/admin/AdminTitle.vue'
import { inject } from 'vue'
import SidebarUsuario from '~/components/admin/administracion/Sidebar'
import { Estado, EstadoClass, EstadoName } from '~/enums/Estado.enum';
import { RoleName } from '~/enums/Role.enum'
import 'datatables.net';
import { useApiFetch } from '~/composables/useApiFetch'

import Message from '~/components/Message.vue';

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

const password = ref(null)
const confirm_password = ref(null)

const id_us = ref(null)
const errorMessageModal = ref('')

const users = ref(null)
const getUsuarios = async () => {
    try {
        const data = await useApiFetch('/usuario')
        users.value = data
    } catch (e) {
        if (!e.data) {
            messageAlert = e.data.message
            statusAlert = 'danger'
        } else {
            console.log(e.data)
        }
    }
}

const updateEstado = async (id_user, estado) => {
    try {
        const data = await useApiFetch(`/usuario/${id_user}`, {
            method: 'PATCH',
            body: {
                estado: estado == Estado.ACTIVO ? Estado.INACTIVO : Estado.ACTIVO
            }
        })

        messageAlert.value = data.message;
        statusAlert.value = 'success';

        setTimeout(() => {
            getUsuarios()
        }, 250)
    } catch (e) {
        if (!e.data) {
            messageAlert = e.message
            statusAlert = 'danger'
        } else {
            console.log(e);
        }
    }
}
const changePassword = async () => {
    if (password.value) {
        if (password.value === confirm_password.value) {
            try {
                const data = await useApiFetch(`/usuario/${id_us.value}`, {
                    method: 'PATCH',
                    body: {
                        password: password.value
                    }
                })

                messageAlert.value = data.message;
                statusAlert.value = 'success';

                setTimeout(() => {
                    getUsuarios()
                }, 250)

                const closeButton = document.querySelector('#passwordModal .close')
                if (closeButton) {
                    closeButton.click()
                }

                password.value = null
                confirm_password.value = null
                errorMessageModal.value = null
                id_us.value = null
            } catch (e) {
                if (!e.data) {
                    messageAlert = e.message
                    statusAlert = 'danger'
                } else {
                    console.log(e);
                }
            }
        } else {
            errorMessageModal.value = 'Las contraseñas no coinciden';
        }
    } else {
        errorMessageModal.value = 'Ingrese una contraseña';
    }
}

const selectedStatusLabel = ref('Todas las entradas');
const status = ref('hidden')
const filterByStatus = (statusValue, stat) => {
    selectedStatusLabel.value = statusValue ? EstadoName[statusValue] : 'Todas las entradas';
    status.value = stat;
    const table = $('#tablaUsuarios').DataTable();

    $.fn.dataTable.ext.search.pop();
    $.fn.dataTable.ext.search.push((settings, data) => {
        const estadoActual = data[7] || '';
        return statusValue ? estadoActual === selectedStatusLabel.value : true;
    });

    table.draw();
};

const initializeTable = () => {
    const table = $('#tablaUsuarios').DataTable({
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
    $.fn.dataTable.ext.search.pop();
}

const setTitle = inject('setTitle')
onMounted(() => {
    setTimeout(() => {
        getUsuarios()
        if (setTitle) {
            setTitle('usuario')
        }
        setTimeout(() => {
            initializeTable()
            $('#tablaUsuarios').DataTable().search('').draw();
        }, 250)
    }, 250)

    const message = sessionStorage.getItem('successMessage')
    if (message) {
        messageAlert.value = message
        statusAlert.value = 'success'
        sessionStorage.removeItem('successMessage')
    }
})
</script>