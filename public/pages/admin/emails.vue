<template>
    <div>
        <AdminTitle title="Email recibidos" keyTitle="emails" />

        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarProfile />

                    <div class="main-content ">
                        <div class="table-container">
                            <div class="table-top mb-3">
                                <div class="d-flex">
                                    <label>Buscar</label>
                                    <input type="search" class="form-control h-8 mt-1" id="customSearch">
                                </div>
                            </div>
                            <div class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="listtable">
                                    <table class="table table-list table-hover dataTable no-footer dtr-inline"
                                        role="grid" id="tablaUsuarios">
                                        <thead>
                                            <tr role="row">
                                                <th class="sorting">
                                                    #
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting text-center">
                                                    Fecha del envío
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                                <th class="sorting text-center">
                                                    Asunto
                                                    <UIcon name="i-material-symbols-unfold-more"
                                                        class="w-3 h-3 d-inline-block" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(mail, id) of mails" :key="id" class="cursor-pointer"
                                                @click="openInNewTab(mail.idMail)">
                                                <td class="text-nowrap">
                                                    {{ id + 1 }}
                                                </td>
                                                <td class="dtr-control text-nowrap text-center">
                                                    <DateFormat :date="mail.creadoEl" />
                                                </td>
                                                <td class="text-nowrap">
                                                    <b>
                                                        .:: Orden #{{ mail.orden.idOrden }}
                                                        - {{ mail.orden.codigoTransaccion }} ::.
                                                    </b>
                                                    {{ mail.subject }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Email recibidos | Admin'
})

import SidebarProfile from '~/components/admin/administracion/SidebarProfile.vue'
import DateFormat from '~/components/admin/administracion/DateFormat.vue';
import { ref, onMounted } from 'vue'


const mails = ref([])
const getMails = async () => {
    try {
        const data = await useApiFetch('/mail')
        mails.value = data
        console.log(mails.value)
    } catch (err) {
        console.log(err.data)
    }
}

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

function openInNewTab(idMail) {
    if (typeof window !== 'undefined') {
        window.open(
            `/mail?id=${idMail}`,
            'MailDetail',
            'width=800,height=600,scrollbars=yes,resizable=yes'
        );
    }
}

onMounted(() => {
    setTimeout(() => {
        getMails()
        setTimeout(() => {
            initializeTable()
            $('#tablaUsuarios').DataTable().search('').draw();
        }, 250)
    }, 250)
})
</script>