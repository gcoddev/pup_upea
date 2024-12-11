<template>
    <div>
        <AdminTitle title="Tu perfil" keyTitle="security" />

        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarProfile />

                    <div class="main-content ">
                        <div class="panel panel-default">
                            <ul class="panel-tabs nav nav-tabs">
                                <li>
                                    <a class="active" href="#linked-accounts" data-toggle="tab" aria-expanded="false">
                                        <UIcon name="i-heroicons-link" />&nbsp; Cuentas Vinculadas
                                    </a>
                                </li>
                            </ul>
                            <div class="panel-body tab-content">
                                <div class="tab-pane active" id="linked-accounts">
                                    <p class="">Conecte su cuenta con cualquiera de los servicios a continuación para
                                        simplificar su experiencia de inicio de sesión. Solo utilizamos esta información
                                        para verificar su cuenta y nunca publicaremos en su nombre.</p>
                                    <br>
                                    <div class="providerPreLinking" v-if="user.data.googleId == null">
                                        <div class="social-signin-btns m-b-3x">
                                            <a :href="`${apiUrl}/auth/redirect?op=2`" class="btn btn-social btn-google">
                                                <img src="" width="17px" height="17px" alt="googleIcon">
                                                Vincular con google
                                            </a>
                                        </div>
                                    </div>
                                    <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert"
                                        v-if="message">
                                        {{ message }}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                                            @click="message = ''">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="providerLinkingFeedback"></div>
                                    <div class="table-container table-responsive">
                                        <div id="tableLinkedAccounts_wrapper"
                                            class="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div class="listtable">
                                                <table id="tableLinkedAccounts"
                                                    class="table display w-100 data-driven m-b-0 dataTable no-footer"
                                                    role="grid" style="width: 878px;">
                                                    <thead>
                                                        <tr class="text-center" role="row">
                                                            <th class="sorting_asc" tabindex="0"
                                                                aria-controls="tableLinkedAccounts" rowspan="1"
                                                                colspan="1" style="width: 189px;"
                                                                aria-label="Proveedor: activate to sort column descending"
                                                                aria-sort="ascending">Proveedor<span
                                                                    class="sorting-arrows"></span></th>
                                                            <th class="sorting" tabindex="0"
                                                                aria-controls="tableLinkedAccounts" rowspan="1"
                                                                colspan="1" style="width: 146px;"
                                                                aria-label="Nombre: activate to sort column ascending">
                                                                Nombre<span class="sorting-arrows"></span></th>
                                                            <th class="sorting" tabindex="0"
                                                                aria-controls="tableLinkedAccounts" rowspan="1"
                                                                colspan="1" style="width: 273px;"
                                                                aria-label="Dirección de Email: activate to sort column ascending">
                                                                Dirección de Email<span class="sorting-arrows"></span>
                                                            </th>
                                                            <th class="sorting" tabindex="0"
                                                                aria-controls="tableLinkedAccounts" rowspan="1"
                                                                colspan="1" style="width: 174px;"
                                                                aria-label="Acciones: activate to sort column ascending">
                                                                Acciones<span class="sorting-arrows"></span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="odd" v-if="user.data.googleId == null">
                                                            <td valign="top" colspan="4" class="dataTables_empty">No se
                                                                han encontrado cuentas vinculadas</td>
                                                        </tr>
                                                        <tr class="odd" v-else>
                                                            <td valign="top">
                                                                <span
                                                                    class="btn-social btn-google border-none">Google</span>
                                                            </td>
                                                            <td valign="top">
                                                                {{ user.data.nombres }}
                                                                {{ user.data.paterno }}
                                                                {{ user.data.materno }}
                                                            </td>
                                                            <td valign="top">{{ user.data.email }}</td>
                                                            <td valign="top">
                                                                <button type="button" class="btn btn-danger"
                                                                    @click="confirmDesvinculate()">Desvincular</button>
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

                        <div class="panel panel-default">
                            <ul class="panel-tabs nav nav-tabs">
                                <li>
                                    <a class="active" href="#linked-accounts" data-toggle="tab" aria-expanded="false">
                                        <UIcon name="i-heroicons-link" />&nbsp; Cambiar correo electrónico
                                    </a>
                                </li>
                            </ul>
                            <div class="panel-body tab-content">
                                <div class="tab-pane active" id="linked-accounts">
                                    <!-- <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" /> -->
                                    <form method="post" @submit.prevent="confirmEmail()">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="inputEmail" class="control-label">
                                                        Dirección de correo
                                                    </label>
                                                    <div class="row">
                                                        <input type="email" name="email" id="inputEmail" v-model="email"
                                                            class="form-control col-md-8 col-12">
                                                        <div class="col-md-4 col-12 d-flex align-items-center">
                                                            <!-- Ajustar la columna -->
                                                            <label class="toggle">
                                                                <input type="checkbox" id="receiveEmails"
                                                                    v-model="receiveEmails"
                                                                    @change="confirmReceiveEmails()">
                                                                <span class="slider"></span>
                                                                <span class="text">Recibir correos electrónicos</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="alert alert-primary">
                                                    El email actual será donde recibirá los estados de sus pagos,
                                                    asegúrese de ser un correo que use actualmente.
                                                </div>
                                                <div class="alert alert-warning" v-if="user.data.googleId">
                                                    Su email está vinculado con Google, si lo modifica se quitará la
                                                    vinculación.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions mt-0">
                                            <input class="btn btn-primary"
                                                :class="user.data.email == email ? 'disabled' : ''"
                                                :type="user.data.email == email ? 'button' : 'submit'" name="save"
                                                value="Guardar Cambios">
                                        </div>
                                    </form>
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
    title: 'Ajustes de seguridad | Admin'
})

import { title } from 'process';
import { ref, watch } from 'vue'
import SidebarProfile from '~/components/admin/administracion/SidebarProfile.vue'
import Message from '~/components/Message.vue';
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)
const { $swal } = useNuxtApp()

const email = ref('')
const googleId = ref('')
const receiveEmails = ref(true)
watch(
    () => user.data,
    (user) => {
        setTimeout(() => {
            email.value = user.email
            googleId.value = user.googleId
            receiveEmails.value = user.receiveEmails
        }, 1000)
    },
    { immediate: true }
)

const message = ref('');

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

import { useRoute } from 'vue-router'
const route = useRoute()

const confirmEmail = () => {
    $swal({
        title: '¿Estás seguro de actualizar el email?',
        text: 'Se eliminara su vinculación de google',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            updateEmail()
        }
    })
}
const updateEmail = async () => {
    try {
        const data = await useApiFetch(`/usuario/${user.data.id}`, {
            method: 'PATCH',
            body: {
                email: email.value,
                googleId: null,
            }
        })
        messageAlert.value = data.message + '. La pagina se recargara en unos instantes.'
        statusAlert.value = 'success'
        setTimeout(() => {
            location.reload()
        }, 1000)
    } catch (err) {
        messageAlert.value = err.data.message[0]
        statusAlert.value = 'danger'

        email.value = user.data.email
    }
}
const confirmReceiveEmails = () => {
    let titulo = ''
    let texto = ''
    let boton = ''
    if (receiveEmails.value) {
        titulo = '¿Esta seguro que quiere recibir emails?'
        texto = 'Recibirás estados de sus pagos por correo electrónico'
        boton = 'Si, recibir'
    } else {
        titulo = '¿Esta seguro que quiere dejar de recibir emails?'
        texto = 'No recibirás estados de sus pagos por correo electrónico'
        boton = 'Si, dejar de recibir'
    }
    $swal({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: boton,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            updateReceiveEmails()
        } else {
            receiveEmails.value = user.data.receiveEmails
        }
    })
}
const updateReceiveEmails = async () => {
    try {
        const data = await useApiFetch(`/usuario/${user.data.id}`, {
            method: 'PATCH',
            body: {
                receiveEmails: receiveEmails.value
            }
        })
        messageAlert.value = data.message + '. La pagina se recargara en unos instantes.'
        statusAlert.value = 'success'
        setTimeout(() => {
            location.reload()
        }, 1000)
    } catch (err) {
        messageAlert.value = err.data.message[0]
        statusAlert.value = 'danger'

        email.value = user.data.email
    }
}

const confirmDesvinculate = () => {
    $swal({
        title: '¿Estás seguro de quitar la vinculación?',
        text: 'Se eliminara su vinculación actual',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, desvincular',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            desvincular()
        }
    })
}
const desvincular = async () => {
    try {
        const data = await useApiFetch('/usuario/' + user.data.id, {
            method: 'PATCH',
            body: {
                googleId: null
            }
        })
        messageAlert.value = data.message + '. La pagina se recargara en unos instantes.'
        statusAlert.value = 'success'
        setTimeout(() => {
            location.reload()
        }, 1000)
    } catch (err) {
        messageAlert.value = err.data.message[0]
        statusAlert.value = 'danger'
    }
}

onMounted(() => {
    const res = route.query
    if (res.success == 'true') {
        if (res.vinculate == 'true') {
            messageAlert.value = res.message
            statusAlert.value = 'success'

            navigateTo('/admin/security')
            // location.reload()
        } else {
            messageAlert.value = res.message
            statusAlert.value = 'warning'

            navigateTo('/admin/security')
        }

        // const token = route.query.accessToken
        // Cookies.set('token', token, { expires: 2 / 24 })
        // sessionStorage.setItem('logged', true)

        // return navigateTo('/admin')
    } else {
        messageAlert.value = res.message
        statusAlert.value = 'danger'

        navigateTo('/admin/security')
    }
})
</script>

<style scoped>
.toggle {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 50px;
    height: 25px;
}

.toggle input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 25px;
    transition: 0.4s;
}

.slider::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2.5px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
}

.toggle input:checked+.slider {
    background-color: #4ade80;
}

.toggle input:checked+.slider::before {
    transform: translateX(24px);
}

.text {
    margin-left: 60px;
    font-size: 14px;
    color: #333;
    transition: color 0.4s;
}

.toggle input:checked+.slider+.text {
    color: #4ade80;
}
</style>