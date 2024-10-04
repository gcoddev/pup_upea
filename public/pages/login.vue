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
                                <div class="d-flex space-between">
                                    <label for="inputPassword">Contraseña</label>
                                </div>
                                <input type="password" name="password" class="form-control input-lg" id="inputPassword"
                                    placeholder="Ingrese su contraseña" autocomplete="off" v-model="password">
                                <div class="d-flex space-between">
                                    <NuxtLink to="/reset">¿Olvidaste la contraseña?</NuxtLink>
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <label class="checkbox m-b-2x">
                                    <input class="check-control" type="checkbox" name="remember" />
                                    Recordarme
                                </label>
                            </div> -->
                            <button class="btn btn-lg btn-primary btn-block mt-4" id="" type="submit">
                                Iniciar sesión
                            </button>
                            <div class="alert alert-sm alert-danger m-b-0 m-t-3x" v-if="errorMessage">
                                <div class="alert-body">
                                    <p class="m-b-0">{{ errorMessage }}</p>
                                </div>
                            </div>
                            <div class="alert alert-sm alert-success m-b-0 m-t-3x" v-if="successMessage">
                                <div class="alert-body">
                                    <p class="m-b-0">{{ successMessage }}</p>
                                </div>
                            </div>
                        </form>
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
    bodyClass: 'page-login-primary'
})

import { ref, onMounted } from 'vue'
import Cookies from 'js-cookie'

const emailOrUsername = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const postLogin = async () => {
    try {
        const { data, error } = await useApiFetch('/auth/login', {
            method: 'POST',
            body: {
                emailOrUsername: emailOrUsername.value,
                password: password.value
            }
        })

        if (error.value) {
            errorMessage.value = error.value.data.message
            successMessage.value = ''
        } else {
            successMessage.value = data.value.message
            errorMessage.value = ''

            Cookies.set('token', data.value.token, { expires: 2 / 24 })
            sessionStorage.setItem('logged', true)

            return navigateTo('/admin')
        }
    } catch (err) {
        errorMessage.value = 'Ha ocurrido un error'
        console.error(err)
    }
}

onMounted(() => {
    const message = sessionStorage.getItem('successMessage')

    if (message) {
        successMessage.value = message
        sessionStorage.removeItem('successMessage')
    }
})
</script>