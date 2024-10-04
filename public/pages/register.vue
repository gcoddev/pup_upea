<template>
    <div class="main-body main-body-has-sidebar main-body-has-sidebar-left">
        <div class="main-body-content">
            <div class="login login-lg">
                <div class="login-wrapper">
                    <div class="login-body register" id="registration">
                        <h1 class="login-title">Registrarse</h1>
                        <form method="post" class="loginForm" @submit.prevent="postRegister">
                            <div class="section section-sm" id="containerNewUserSignup">
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
                            </div>
                            <div class="login-divider">
                                <span></span>
                                <span>o usa el siguiente formulario</span>
                                <span></span>
                            </div>
                            <div class="section section-sm" id="containerNewUserSignup">
                                <div class="section section-sm">
                                    <div class="section-header">
                                        <h2 class="section-title">Información personal</h2>
                                    </div>
                                    <div class="section-body" id="personalInformacion">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group ">
                                                    <label for="numeroDocumento" class="label-required">
                                                        Cédula de identidad
                                                    </label>
                                                    <input type="text" id="numeroDocumento" class="form-contrl"
                                                        placeholder="CI" v-model="numeroDocumento">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group ">
                                                    <label for="inputCountry" id="inputCountryIcon"
                                                        class="label-required">
                                                        Expedición
                                                    </label>
                                                    <select name="country" id="inputCountry" class="form-control"
                                                        v-model="expedido">
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
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <label for="inputFirstName" class="label-required">
                                                        Nombres
                                                    </label>
                                                    <input type="text" name="firstname" id="inputFirstName"
                                                        class="form-control" placeholder="Nombres" v-model="nombres">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <label for="paterno" class="label-required">
                                                        Apellido paterno
                                                    </label>
                                                    <input type="text" name="paterno" id="paterno" class="form-control"
                                                        placeholder="Paterno" v-model="paterno">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <label for="materno" class="label-required">
                                                        Apellido materno
                                                    </label>
                                                    <input type="text" name="materno" id="materno" class="form-control"
                                                        placeholder="Materno" v-model="materno">
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
                                                Correo electrónico
                                            </label>
                                            <input type="text" name="username" id="inputUsername" class="form-control"
                                                placeholder="Username" v-model="username">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group ">
                                            <label for="inputEmail" class="label-required">
                                                Correo electrónico
                                            </label>
                                            <input type="email" name="email" id="inputEmail" class="form-control"
                                                placeholder="Email" v-model="email">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group has-feedback" id="newPassword1">
                                            <div class="password-content password-content-top password-content-group">
                                                <label for="inputNewPassword1" class="label-required">
                                                    Contraseña
                                                </label>
                                                <span class="text-small text-lighter password-content-text">
                                                    <span id="passwordStrengthTextLabel">Mínimo 5 caracteres</span>
                                                </span>
                                            </div>
                                            <div class="input-password-strenght">
                                                <input type="password" name="password" id="inputNewPassword1"
                                                    data-error-threshold="50" data-warning-threshold="75"
                                                    class="form-control" placeholder="" autocomplete="off"
                                                    v-model="password">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group has-feedback" id="newPassword2">
                                            <label for="inputNewPassword2" class="label-required">
                                                Confirmar contraseña
                                            </label>
                                            <input type="password" name="password2" id="inputNewPassword2"
                                                class="form-control" placeholder="" autocomplete="off">
                                            <div id="inputNewPassword2Msg"></div>
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
                            <UAlert v-if="errors.length > 0" title="Error de validación" icon="i-heroicons-error-circle"
                                color="red" variant="soft">
                                <template #description>
                                    <ul>
                                        <li v-for="(error, index) in errors" :key="index" class="mb-1">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </template>
                            </UAlert>

                            <div class="form-actions">
                                <button type="submit" class="btn btn-lg btn-primary btn-block ">
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
    bodyClass: 'page-login-primary'
})

import { ref } from 'vue'
import { useApiFetch } from '~/composables/useApiFetch'
const errors = ref([])
const errorsWithBreaks = computed(() => {
    return errors.value.join('<br>')
})

const numeroDocumento = ref('')
const expedido = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const password2 = ref('')

const postRegister = async () => {
    errors.value = []

    try {
        const { data, error } = await useApiFetch('/auth/register', {
            method: 'POST',
            body: {
                numeroDocumento: numeroDocumento.value,
                expedido: expedido.value,
                nombres: nombres.value,
                paterno: paterno.value,
                materno: materno.value,
                email: email.value,
                username: username.value,
                password: password.value
            }
        })

        if (error.value) {
            errors.value = error.value.data.message
            console.log(errors.value);
        } else {
            sessionStorage.setItem('loading', true)
            sessionStorage.setItem('successMessage', data.value.message)

            return navigateTo('/login')
        }
    } catch (err) {
        console.log(err);
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