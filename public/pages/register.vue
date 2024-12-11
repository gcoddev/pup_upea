<template>
    <div class="main-body main-body-has-sidebar main-body-has-sidebar-left">
        <div class="main-body-content">
            <div class="login login-lg">
                <div class="login-wrapper">
                    <div class="login-body register" id="registration">
                        <h1 class="login-title">Registrarse</h1>
                        <form method="post" class="loginForm" @submit.prevent="submitForm">
                            <!-- <div class="section section-sm" id="containerNewUserSignup">
                                <div class="section section-sm">
                                    <div class="section-body" id="connectWith">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group text-center">
                                                    <label for="connect">
                                                        Conéctate con
                                                    </label>
                                                    <br>
                                                    <div>
                                                        <a href="#" class="ml-1 connect-icon">
                                                            <img src="~/public/icons/google-icon.png" alt="">
                                                        </a>
                                                        <a href="#" class="ml-3 connect-icon">
                                                            <img src="~/public/icons/facebook-icon.png" alt="">
                                                        </a>
                                                        <a href="#" class="ml-3 connect-icon">
                                                            <img src="~/public/icons/github-icon.png" alt="">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <UAlert icon="i-heroicons-information-circle" variant="outline" title="NOTA"
                                description="En caso de ser estudiante regular sus datos se rellenaran automáticamente" />
                            <div class="login-divider">
                                <span></span>
                                <span>Llena el siguiente formulario</span>
                                <span></span>
                            </div>
                            <div class="section section-sm">
                                <div class="section section-sm">
                                    <div class="section-header">
                                        <h2 class="section-title">Información personal</h2>
                                    </div>
                                    <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />
                                    <input type="hidden" v-model="id_persona">
                                    <div class="section-body" id="personalInformacion">
                                        <div class="row">
                                            <div class="col-md-4 col-12">
                                                <div class="form-group ">
                                                    <label for="numeroDocumento" class="label-required">
                                                        Cédula de identidad
                                                    </label>
                                                    <input type="text" id="numeroDocumento" class="form-control"
                                                        placeholder="CI" v-model="numeroDocumento"
                                                        @keyup="searchPersona">
                                                </div>
                                            </div>
                                            <div class="col-md-5 col-12">
                                                <div class="form-group ">
                                                    <label for="inputFecha_nac" class="label-required">
                                                        Fecha de nacimiento
                                                    </label>
                                                    <input type="date" name="fecha_nac" id="inputFecha_nac"
                                                        class="form-control" v-model="fecha_nac"
                                                        @change="searchPersona">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group ">
                                                    <label for="inputExpedido" class="label-required">
                                                        Expedición
                                                    </label>
                                                    <select name="country" id="inputExpedido" class="form-control"
                                                        v-model="expedido" @change="searchPersona">
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
                                                        class="form-control" placeholder="Nombres" v-model="nombres"
                                                        autocomplete="off" disabled>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section section-sm">
                                <h5 class="section-title">Cuenta de usuario</h5>
                                <div id="containerPassword" class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group ">
                                            <label for="inputUsername" class="label-required">
                                                Nombre de usuario
                                            </label>
                                            <input type="text" name="username" id="inputUsername" class="form-control"
                                                placeholder="Username" v-model="username" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group ">
                                            <label for="inputEmail" class="label-required">
                                                Correo electrónico
                                            </label>
                                            <input type="email" name="email" id="inputEmail" class="form-control"
                                                placeholder="Email" v-model="email" autocomplete="on">
                                            <span class="text-muted" style="font-size: 0.85em;">Correo para recibir
                                                emails</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group has-feedback">
                                            <div class="password-content password-content-top password-content-group">
                                                <label for="inputPassword" class="label-required">
                                                    Contraseña
                                                </label>
                                                <span class="text-small text-lighter password-content-text">
                                                    <span>Mínimo 5 caracteres</span>
                                                </span>
                                            </div>
                                            <div class="input-password-strenght">
                                                <input type="text" name="password" id="inputPassword"
                                                    class="form-control" placeholder="Contraseña" v-model="password"
                                                    autocomplete="off">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group has-feedback">
                                            <label for="inputConfirmPassword" class="label-required">
                                                Confirmar contraseña
                                            </label>
                                            <input type="password" name="confirm_password" id="inputConfirmPassword"
                                                class="form-control" placeholder="Confirmar contraseña"
                                                autocomplete="off" v-model="confirm_password">
                                            <span class="text-muted">Vuelve a ingresar la contraseña para
                                                confirmar</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- <div class="section section-sm">
                                <div class="section-body">
                                    <div class="checkbox">
                                        <label>
                                            <input class="icheck-control" type="checkbox">
                                            <span class="label-required">I have read and agree to the
                                                <a href="#" target="_blank">Terms of Service</a>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div> -->
                            <UAlert v-if="errors.error" :title="errors.error" icon="i-heroicons-error-circle"
                                variant="soft" color="red">
                                <template #description>
                                    <ul>
                                        <li v-for="(error, index) in errors.message" :key="index" class="mb-1">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </template>
                            </UAlert>

                            <div class="form-actio mt-3">
                                <button type="submit" class="btn btn-lg btn-primary btn-block" id="btnRegister"
                                    disabled>
                                    <span class="btn-text">
                                        Registrarme
                                    </span>
                                    <!-- <div class="loader loader-button hidden">

                                        <div class="spinner spinner-sm spinner-light">
                                            <div class="rect1"></div>
                                            <div class="rect2"></div>
                                            <div class="rect3"></div>
                                            <div class="rect4"></div>
                                            <div class="rect5"></div>
                                        </div>
                                    </div> -->
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
</template>

<script setup>
definePageMeta({
    layout: 'home',
    middleware: 'guest',
    // bodyClass: 'page-login-primary'
})

useHead({
    title: 'Registrarse | Admin'
})

const config = useRuntimeConfig()

import { ref } from 'vue'
import { useApiFetch } from '~/composables/useApiFetch'
const errors = ref([])

import Message from '~/components/Message.vue';
import { Role } from '~/enums/Role.enum';

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

const id_persona = ref(0)
const numeroDocumento = ref('')
const expedido = ref('')
const fecha_nac = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const confirm_password = ref('')

const submitForm = () => {
    if (password.value) {
        if (password.value != confirm_password.value) {
            errors.value = {
                message: [
                    'Las contraseñas no coinciden'
                ],
                error: "Error de validación"
            }
        } else {
            postRegister()
        }
    } else {
        errors.value = {
            message: [
                'La contraseña es requerida'
            ],
            error: "Error de validación"
        }
    }
}

const postRegister = async () => {
    errors.value = []

    try {
        const data = await useApiFetch('/auth/register', {
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
                password: confirm_password.value,
                role: Role.USER
            }
        })

        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', data.message)
        sessionStorage.setItem('status', 'success')

        return navigateTo('/login')
    } catch (err) {
        if (err.data) {
            errors.value = err.data
        } else {
            console.log(err);
        }
    }
}

const searchPersona = async () => {
    if (numeroDocumento.value && expedido.value && fecha_nac.value) {
        try {
            const data = await useApiFetch(`/vista-persona/${numeroDocumento.value}/${expedido.value}/${fecha_nac.value}`)
            id_persona.value = data.id
            nombres.value = data.nombre
            paterno.value = data.paterno
            materno.value = data.materno
            email.value = data.email
            username.value = data.ci
            password.value = `${data.nombre.split(' ')[0].toUpperCase()}_${data.ci}`

            // $('#inputNombres').attr('disabled', 'disabled')
            // $('#inputPaterno').attr('disabled', 'disabled')
            // $('#inputMaterno').attr('disabled', 'disabled')
            // $('#inputEmail').removeAttr('disabled')
            // $('#inputUsername').removeAttr('disabled')
            // $('#inputPassword').removeAttr('disabled')
            // $('#inputPassword2').removeAttr('disabled')

            $('#btnRegister').removeAttr('disabled')

            messageAlert.value = ''
            statusAlert.value = ''
        } catch (err) {
            if (err.data) {
                id_persona.value = 0
                nombres.value = ''
                paterno.value = ''
                materno.value = ''
                email.value = ''
                username.value = ''

                // $('#inputNombres').removeAttr('disabled')
                // $('#inputPaterno').removeAttr('disabled')
                // $('#inputMaterno').removeAttr('disabled')
                // $('#inputEmail').removeAttr('disabled')
                // $('#inputUsername').removeAttr('disabled')
                // $('#inputPassword').removeAttr('disabled')
                // $('#inputPassword2').removeAttr('disabled')

                $('#btnRegister').attr('disabled', 'disabled')

                messageAlert.value = `${err.data.message}. Verifique sus datos.`
                statusAlert.value = 'danger'
            } else {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
ul {
    margin-left: 30px;
}

li {
    list-style: disc !important;
    ;
}
</style>