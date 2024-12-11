<template>
    <div>
        <AdminTitle title="Usuarios" keyTitle="" />
        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarUsuario />
                    <div class="main-content">
                        <div class="login login-lg">
                            <div class="login-wrapper">
                                <div class="login-body register" id="registration">
                                    <form method="post" class="loginFor" @submit.prevent="submitForm">
                                        <div class="section section-sm" id="containerNewUserSignup">
                                            <div class="section section-sm">
                                                <div class="section-header">
                                                    <h2 class="section-title">Información personal</h2>
                                                </div>
                                                <Message :message="messageAlert" :status="statusAlert"
                                                    @close="clearMessage" />
                                                <input type="hidden" v-model="id_user">
                                                <input type="hidden" v-model="id_persona">
                                                <div class="section-body" id="personalInformacion">
                                                    <div class="row">
                                                        <div class="col-md-4 col-12">
                                                            <div class="form-group ">
                                                                <label for="numeroDocumento" class="label-required">
                                                                    Cédula de identidad
                                                                </label>
                                                                <input type="text" id="numeroDocumento"
                                                                    class="form-control" placeholder="CI"
                                                                    v-model="numeroDocumento" @keyup="searchPersona()">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-12">
                                                            <div class="form-group ">
                                                                <label for="inputFecha_nac" class="label-required">
                                                                    Fecha de nacimiento
                                                                </label>
                                                                <input type="date" name="fecha_nac" id="inputFecha_nac"
                                                                    class="form-control" v-model="fecha_nac"
                                                                    @change="searchPersona()">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-12">
                                                            <div class="form-group">
                                                                <label for="inputExpedido" class="label-required">
                                                                    Expedición
                                                                </label>
                                                                <select name="inputExpedido" id="inputExpedido"
                                                                    class="form-control" v-model="expedido"
                                                                    @change="searchPersona()">
                                                                    <option value="">
                                                                        -
                                                                    </option>
                                                                    <option value="LP">
                                                                        La Paz
                                                                    </option>
                                                                    <option value="OR">
                                                                        Oruro
                                                                    </option>
                                                                    <option value="PT">
                                                                        Potosí
                                                                    </option>
                                                                    <option value="PD">
                                                                        Pando
                                                                    </option>
                                                                    <option value="BN">
                                                                        Beni
                                                                    </option>
                                                                    <option value="SCZ">
                                                                        Santa Cruz
                                                                    </option>
                                                                    <option value="CBBA">
                                                                        Cochabamba
                                                                    </option>
                                                                    <option value="CH">
                                                                        Chiquisaca
                                                                    </option>
                                                                    <option value="TJ">
                                                                        Tarija
                                                                    </option>
                                                                    <option value="PERU">
                                                                        Perú
                                                                    </option>
                                                                    <option value="ITA">
                                                                        ITA
                                                                    </option>
                                                                    <option value="OTRO">
                                                                        Otro
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form-group ">
                                                                <label for="inputNombres" class="label-required">
                                                                    Nombres
                                                                </label>
                                                                <input type="text" name="nombres" id="inputNombres"
                                                                    class="form-control" placeholder="Nombres"
                                                                    v-model="nombres" autocomplete="off" disabled>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="inputPaterno" class="label-required">
                                                                    Apellido paterno
                                                                </label>
                                                                <input type="text" name="paterno" id="inputPaterno"
                                                                    class="form-control" placeholder="Apellido paterno"
                                                                    v-model="paterno" disabled>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="inputMaterno" class="label-required">
                                                                    Apellido materno
                                                                </label>
                                                                <input type="text" name="materno" id="inputMaterno"
                                                                    class="form-control" placeholder="Apellido materno"
                                                                    v-model="materno" disabled>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="selectRole" class="label-required">
                                                                    Rol de usuario
                                                                </label>
                                                                <select name="selectRole" id="selectRole"
                                                                    class="form-control" v-model="role">
                                                                    <option value="">-</option>
                                                                    <option v-for="(role, id) of Role" :key="id"
                                                                        :value="role">
                                                                        {{ RoleName[role] }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="selectCarrera" class="label-required">
                                                                    Carrera
                                                                </label>
                                                                <select name="selectCarrera" id="selectCarrera"
                                                                    class="form-control" ref="selectCarrera"
                                                                    v-model="id_carrera">
                                                                    <option value="">-</option>
                                                                    <option v-for="(carr, id_carr) of carreras"
                                                                        :key="id_carr" :value="carr.id">
                                                                        {{ carr.nombre_completo }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section section-sm" id="containerNewUserSecurity">
                                            <h5 class="section-title">Cuenta de usuario</h5>
                                            <div id="containerPassword" class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group ">
                                                        <label for="inputUsername" class="label-required">
                                                            Nombre de usuario
                                                        </label>
                                                        <input type="text" name="username" id="inputUsername"
                                                            class="form-control" placeholder="Username"
                                                            v-model="username" autocomplete="off">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group ">
                                                        <label for="inputEmail" class="label-required">
                                                            Correo electrónico
                                                        </label>
                                                        <input type="email" name="email" id="inputEmail"
                                                            class="form-control" placeholder="Email" v-model="email"
                                                            autocomplete="on">
                                                    </div>
                                                </div>
                                                <div class="col-md-6" v-if="isNewUser">
                                                    <div class="form-group ">
                                                        <label for="inputPassword" class="label-required">
                                                            Contraseña
                                                        </label>
                                                        <input type="text" name="password" id="inputPassword"
                                                            class="form-control" placeholder="Contraseña"
                                                            v-model="password" autocomplete="off">
                                                    </div>
                                                </div>
                                                <div class="col-md-6" v-if="isNewUser">
                                                    <div class="form-group ">
                                                        <label for="inputConfirmPassword" class="label-required">
                                                            Confirmar contraseña
                                                        </label>
                                                        <input type="password" name="password" id="inputConfirmPassword"
                                                            class="form-control" placeholder="Confirmar contraseña"
                                                            v-model="confirm_password" autocomplete="off">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- <div class="section section-sm">
                                        <div class="section-body">
                                            <div class="checkbox">
                                                <label>
                                                    <input class="icheck-control accepttos" type="checkbox" name="accepttos">
                                                    <span class="label-required">I have read and agree to the <a href="#"
                                                            target="_blank">Terms of
                                                            Service</a></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div> -->
                                        <UAlert v-if="errors" :title="errors.error" variant="soft"
                                            icon="i-material-symbols-error-circle-rounded">
                                            <template #description>
                                                <ul>
                                                    <li v-for="(error, index) in errors.message" :key="index"
                                                        class="mb-1">
                                                        ▶ {{ error }}
                                                    </li>
                                                </ul>
                                            </template>
                                        </UAlert>

                                        <div class="form-action mt-3">
                                            <button type="submit" class="btn btn-lg btn-primary btn-block"
                                                id="btnRegister" v-if="isNewUser" disabled>
                                                <UIcon name="i-material-symbols-save" class="w-5 h-5" />
                                                &nbsp;
                                                <span class="btn-text">
                                                    Registrar
                                                </span>
                                            </button>
                                            <button type="submit" class="btn btn-lg btn-warning btn-block"
                                                id="btnRegister" v-else disabled>
                                                <UIcon name="i-heroicons-pencil" class="w-5 h-5" />
                                                &nbsp;
                                                <span class="btn-text">
                                                    Actualizar
                                                </span>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div class="login-footer">
                                    <div class="text-center text-light">
                                        ¿Ya tienes una cuenta?
                                        <NuxtLink to="/login">Ingresar</NuxtLink>
                                        <span class="text-lowercase"> ó</span>
                                        <NuxtLink to="/reset">
                                            Restablecer contraseña
                                        </NuxtLink>
                                    </div>
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
    title: 'Usuario | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Usuario | Admin'
})


import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import SidebarUsuario from '~/components/admin/administracion/Sidebar.vue'
import { Role, RoleName } from '~/enums/Role.enum'

import { useRoute } from 'vue-router'
const route = useRoute()

import Message from '~/components/Message.vue';

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

const carreras = ref(null)
const selectCarrera = ref(null)

const getCarreras = async () => {
    try {
        const data = await useApiFetch('/carrera')

        carreras.value = data
    } catch (err) {
        console.log(err)
    }
}

const errors = ref(null)

const id_user = ref('')
const id_persona = ref('')
const numeroDocumento = ref('')
const expedido = ref('')
const fecha_nac = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const role = ref('')
const id_carrera = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const confirm_password = ref('')

const isNewUser = ref(false)
const submitForm = () => {
    if (isNewUser.value) {
        if (password.value) {
            if (password.value != confirm_password.value) {
                errors.value = {
                    message: [
                        'Las contraseñas no coinciden'
                    ],
                    error: "Error de validación"
                }
            } else {
                postUsuario()
            }
        } else {
            errors.value = {
                message: [
                    'La contraseña es requerida'
                ],
                error: "Error de validación"
            }
        }
    } else {
        putUsuario()
    }
}

const postUsuario = async () => {
    errors.value = []

    try {
        const data = await useApiFetch('/usuario', {
            method: 'POST',
            body: {
                id_persona: id_persona.value,
                numeroDocumento: numeroDocumento.value,
                expedido: expedido.value,
                nombres: nombres.value,
                paterno: paterno.value,
                materno: materno.value,
                fecha_nac: fecha_nac.value,
                email: email.value,
                username: username.value,
                role: role.value,
                id_carrera: id_carrera.value,
                password: password.value
            }
        })

        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', data.message)
        sessionStorage.setItem('status', 'success')

        return navigateTo('/admin/usuario')
    } catch (err) {
        if (e.data) {
            errors.value = e.data
        } else {
            console.log(err)
        }
    }
}
const putUsuario = async () => {
    errors.value = []

    try {
        const data = await useApiFetch(`/usuario/${route.params.id}`, {
            method: 'PUT',
            body: {
                id_persona: id_persona.value,
                numeroDocumento: numeroDocumento.value,
                expedido: expedido.value,
                nombres: nombres.value,
                paterno: paterno.value,
                materno: materno.value,
                fecha_nac: fecha_nac.value,
                email: email.value,
                username: username.value,
                role: role.value,
                id_carrera: id_carrera.value
            }
        })

        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', data.message)
        sessionStorage.setItem('status', 'success')

        return navigateTo('/admin/usuario')
    } catch (err) {
        if (e.data) {
            errors.value = e.data
        } else {
            console.log(err);
        }
    }
}

const getUsuario = async (id) => {
    try {
        const data = await useApiFetch('/usuario/' + id)

        id_user.value = data.id
        id_persona.value = data.id_persona
        numeroDocumento.value = data.numeroDocumento
        expedido.value = data.expedido
        fecha_nac.value = data.fecha_nac
        nombres.value = data.nombres
        paterno.value = data.paterno
        materno.value = data.materno
        role.value = data.role
        id_carrera.value = data.id_carrera
        username.value = data.username
        email.value = data.email
    } catch (err) {
        console.log(err)
    }
}
const searchPersona = async () => {
    if (numeroDocumento.value && expedido.value && fecha_nac.value) {
        try {
            const data = await useApiFetch(`/vista-persona/${numeroDocumento.value}/${expedido.value}/${fecha_nac.value}`, {
                method: 'GET'
            })

            id_persona.value = data.id
            nombres.value = data.nombre
            paterno.value = data.paterno
            materno.value = data.materno
            email.value = data.email
            password.value = `${data.nombre.split(' ')[0].toUpperCase()}_${data.ci}`
            if (data.email) {
                username.value = data.email.split('@')[0]
            }

            $('#btnRegister').removeAttr('disabled')

            clearMessage()
        } catch (err) {
            if (e.data) {
                messageAlert.value = e.data.message
                statusAlert.value = 'danger'
            } else {
                console.log(err)
            }
        }
    }
}

onMounted(() => {
    setTimeout(() => {
        getCarreras()

        const id = route.params.id

        if (id == 'nuevo') {
            isNewUser.value = true
            $('#btnRegister').attr('disabled', 'disabled')
        } else {
            getUsuario(route.params.id)
            isNewUser.value = false
            $('#btnRegister').removeAttr('disabled')
        }
    }, 250)
})
</script>
