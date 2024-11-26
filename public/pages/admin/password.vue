<template>
    <div>
        <AdminTitle title="Cambiar contraseña" keyTitle="password" />

        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarProfile />

                    <div class="main-content ">
                        <div class="row">
                            <div class="col-md-7">
                                <form class="using-password-strength" method="post" role="form"
                                    @submit.prevent="updatePassword()">
                                    <div class="panel panel-default panel-form">
                                        <div class="panel-body">
                                            <div id="newPassword1" class="form-group">
                                                <label for="inputPassword" class="control-label">Nueva
                                                    Contraseña</label>
                                                <div class="input-password-strenght">
                                                    <input type="password" class="form-control" name="newpw"
                                                        id="inputPassword" autocomplete="off" v-model="password">
                                                    <span class="text-small text-lighter">
                                                        <span id="passwordStrengthTextLabel">
                                                            minimo 5 caracteres &nbsp;
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div id="newPassword2" class="form-group">
                                                <label for="inputConfirm" class="control-label">Confirmar Nueva
                                                    Contraseña</label>
                                                <input type="password" class="form-control" id="inputConfirm"
                                                    autocomplete="off" v-model="password2">
                                                <div v-if="error">
                                                    <p class="help-block text-danger">{{ error }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-footer">
                                            <input class="btn btn-primary" type="submit" value="Guardar Cambios">
                                            <input class="btn btn-default" type="reset" value="Cancelar">
                                        </div>
                                    </div>
                                </form>
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
    title: 'Cambiar contraseña | Admin'
})

import { ref } from 'vue'
import SidebarProfile from '~/components/admin/administracion/SidebarProfile.vue'
import { useUserStore } from '~/stores/user'
const user = useUserStore()
const { $swal } = useNuxtApp()
import Cookies from 'js-cookie'

const password = ref('')
const password2 = ref('')
const error = ref('')
const updatePassword = () => {
    if (password.value) {
        if (password.value.length >= 5) {
            if (password.value === password2.value) {
                error.value = ''

                postPassword()
            } else {
                error.value = 'Las contraseñas no coinciden'
            }
        } else {
            error.value = 'La contraseña debe tener al menos 5 caracteres'
        }
    } else {
        error.value = 'Los campos son obligatorios'
    }
}

const postPassword = async () => {
    try {
        const data = await useApiFetch(`/usuario/${user.data.id}`, {
            method: 'PATCH',
            body: {
                password: password.value
            }
        })

        password.value = ''
        password2.value = ''

        $swal({
            title: 'Contraseña actualizada',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            logout()
        })
    } catch (err) {
        console.log(err)
    }
}

const logout = (() => {
    setTimeout(() => {
        Cookies.remove('token')
        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', 'Sesión cerrada con éxito, vuelva a iniciar sesión')
        sessionStorage.setItem('status', 'success')

        // return navigateTo('/login')
        location.reload()
    }, 250)
})
</script>