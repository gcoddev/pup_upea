<template>
    <div class="main-body main-body-has-sidebar main-body-has-sidebar-left">
        <div class="main-body-content">
            <div class="login">
                <div class="login-wrapper">
                    <div class="login-body">
                        <h1 class="login-title">Ingresar</h1>
                        <form class="login-form" @submit.prevent="postLogin" method="POST">
                            <div class="form-group">
                                <label for="emailOrUsername">Email o Nombre de usuario</label>
                                <input type="text" name="emailOrUsername" class="form-control input-lg"
                                    id="emailOrUsername" placeholder="Ingrese su email o nombre de usuario" autofocus
                                    v-model="emailOrUsername">
                            </div>
                            <div class="form-group">
                                <div>
                                    <label for="inputPassword">Contraseña</label>
                                </div>
                                <input type="password" name="password" class="form-control input-lg" id="inputPassword"
                                    placeholder="Ingrese su contraseña" autocomplete="off" v-model="password">
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <NuxtLink to="/reset">¿Lo olvidaste?</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <label class="checkbox m-b-2x">
                                    <input class="check-control" type="checkbox" name="remember" />
                                    Recordarme
                                </label>
                            </div> -->
                            <button class="btn btn-lg btn-primary btn-block mt-3 mb-3" id="" type="submit">
                                Iniciar sesión
                            </button>
                            <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />
                        </form>
                        <div class="login-divider">
                            <span></span>
                            <span>o</span>
                            <span></span>
                        </div>
                        <div class="section section-sm" id="containerNewUserSignup">
                            <div class="section section-sm">
                                <div class="section-body" id="connectWith">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group text-center">
                                                <label for="connect">
                                                    Acceder con
                                                </label>
                                                <br>
                                                <br>
                                                <div>
                                                    <a :href="`${apiUrl}/auth/redirect?op=1`" class="ml-1 connect-icon">
                                                        <img src="~/public/icons/google-icon.png" alt="">
                                                    </a>
                                                    <!-- <a href="#" class="ml-3 connect-icon">
                                                        <img src="~/public/icons/facebook-icon.png" alt="">
                                                    </a> -->
                                                    <!-- <a href="#" class="ml-3 connect-icon">
                                                        <img src="~/public/icons/github-icon.png" alt="">
                                                    </a> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="login-footer">
                        <div class="text-light">¿Aun no tienes cuenta?
                            <NuxtLink to="/register">Crear cuenta</NuxtLink>
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
    title: 'Ingresar | Admin'
})

import { ref, onMounted } from 'vue'
import Cookies from 'js-cookie'
import Message from '~/components/Message.vue';
const config = useRuntimeConfig();
const apiUrl = ref(config.public.apiBaseUrl)

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';

    navigateTo('/login')
};
/*
<Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />
*/

const emailOrUsername = ref('')
const password = ref('')

const postLogin = async () => {
    try {
        const data = await useApiFetch('/auth/login', {
            method: 'POST',
            body: {
                emailOrUsername: emailOrUsername.value,
                password: password.value
            }
        })

        // if (error.value) {
        //     errorMessage.value = error.value.data.message
        //     successMessage.value = ''
        // } else {
        messageAlert.value = data.message
        statusAlert.value = 'success'

        Cookies.set('token', data.token, { expires: 2 / 24 })
        sessionStorage.setItem('logged', true)

        return navigateTo('/admin')
        // location.reload()
        // }
    } catch (err) {
        if (err.data) {
            if (!err.data.success) {
                messageAlert.value = err.data.message
                statusAlert.value = 'danger'
            } else {
                console.log(err.data)
            }
        } else {
            messageAlert.value = 'Error en la conexión, vuelve a intentarlo mas tarde.'
            statusAlert.value = 'danger'
        }
    }
}

import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
    const login = route.query
    if (login.success == 'true') {
        messageAlert.value = route.query.message
        statusAlert.value = 'success'

        const token = route.query.accessToken
        Cookies.set('token', token, { expires: 2 / 24 })
        sessionStorage.setItem('logged', true)

        navigateTo('/admin')
        // location.reload()
    } else {
        messageAlert.value = login.message
        statusAlert.value = 'danger'

        // navigateTo('/admin')
    }

    const message = sessionStorage.getItem('message')
    const status = sessionStorage.getItem('status')

    if (message && status) {
        messageAlert.value = message
        statusAlert.value = status
        sessionStorage.removeItem('message')
    }
})
</script>