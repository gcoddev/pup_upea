<template>
    <div>
        <AdminTitle title="Tu perfil" keyTitle="perfil" />

        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <SidebarProfile />
                    <div class="main-content ">
                        <div class="section">
                            <div class="section-header">
                                <h3 class="section-title">Datos personales</h3>
                            </div>
                            <div class="section-body">
                                <div>
                                    <div class="panel panel-default panel-form">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="inputNombres" class="control-label">
                                                            Nombre
                                                        </label>
                                                        <input type="text" name="nombres" id="inputNombres"
                                                            v-model="nombres" c disabledlass="form-control" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="inputPaterno" class="control-label">
                                                            Apellido paterno
                                                        </label>
                                                        <input type="text" name="paterno" id="inputPaterno"
                                                            class="form-control disabled" v-model="paterno" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="inputMaterno" class="control-label">
                                                            Apellido paterno
                                                        </label>
                                                        <input type="text" name="materno" id="inputMaterno"
                                                            class="form-control disabled" v-model="materno" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="inputCarrera" class="control-label">
                                                            Carrera
                                                        </label>
                                                        <input type="text" name="carrera" id="inputCarrera"
                                                            class="form-control disabled" v-model="carrera" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <h3 class="section-title d-flex align-center">
                                Cambiar Correo Electrónico
                            </h3>
                            <Message :message="messageAlert" :status="statusAlert" @close="clearMessage" />
                            <div class="section-body">
                                <form method="post" @submit.prevent="updateEmail()">
                                    <div class="panel panel-default panel-form">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="inputEmail" class="control-label">
                                                            Dirección de correo
                                                        </label>
                                                        <input type="email" name="email" id="inputEmail" v-model="email"
                                                            class="form-control">
                                                    </div>
                                                    <div class="alert alert-primary">
                                                        El email actual sera donde recibirá los estados de sus
                                                        pagos, asegúrese de ser un correo que use actualmente.
                                                    </div>
                                                    <div class="alert alert-warning" v-if="user.data.googleId">
                                                        Su email esta vinculado con Google, si lo modifica se quitara la
                                                        vinculación.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-actions mt-0">
                                                <input class="btn btn-primary" type="submit" name="save"
                                                    value="Guardar Cambios">
                                            </div>
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
    title: 'Detalles de la cuenta | Admin'
})

import { ref, onMounted, watch } from 'vue'
import SidebarProfile from '~/components/admin/administracion/SidebarProfile.vue'
import { useUserStore } from '~/stores/user'
import Message from '~/components/Message.vue';
const user = useUserStore()

const messageAlert = ref('');
const statusAlert = ref('');
const clearMessage = () => {
    messageAlert.value = '';
    statusAlert.value = '';
};

const idUser = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const carrera = ref('')
const email = ref('')

const updateEmail = async () => {
    try {
        const data = await useApiFetch(`/usuario/${idUser.value}`, {
            method: 'PATCH',
            body: {
                email: email.value,
                googleId: null
            }
        })
        console.log(data)
        messageAlert.value = data.message
        statusAlert.value = 'success'
        location.reload()
    } catch (err) {
        console.log(err)
        messageAlert.value = err.data.message[0]
        statusAlert.value = 'danger'
    }
}

watch(
    () => user.data,
    (user) => {
        setTimeout(() => {
            idUser.value = user.id
            nombres.value = user.nombres
            paterno.value = user.paterno
            materno.value = user.materno
            if (user.carrera) {
                carrera.value = user.carrera.nombre_completo
            }
            email.value = user.email
        }, 500)
    },
    { immediate: true }
)

onMounted(() => {
})
</script>