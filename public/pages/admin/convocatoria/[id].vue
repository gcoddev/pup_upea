<template>
    <div>
        <AdminTitle title="Convocatoria" keyTitle="" />

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
                                                <div class="section-body" id="personalInformacion">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="inputFecha_ini" class="label-required">
                                                                    Fecha de inicio
                                                                </label>
                                                                <input type="date" name="fecha_nac" id="inputFecha_ini"
                                                                    class="form-control" v-model="fecha_ini">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group ">
                                                                <label for="inputFecha_fin" class="label-required">
                                                                    Fecha final
                                                                </label>
                                                                <input type="date" name="fecha_nac" id="inputFecha_fin"
                                                                    class="form-control" v-model="fecha_fin">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputCarrera" class="label-required">
                                                                    Carrera
                                                                </label>
                                                                <select name="inputCarrera" id="inputCarrera"
                                                                    class="form-control" v-model="id_carrera"
                                                                    @change="selectCarrera()">
                                                                    <option value="">
                                                                        -
                                                                    </option>
                                                                    <option v-for="(carr, id_c) of carreras" :key="id_c"
                                                                        :value="carr.id">
                                                                        {{ carr.nombre_completo }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputSede" class="label-required">
                                                                    Sede
                                                                </label>
                                                                <select name="inputSede" id="inputSede"
                                                                    class="form-control" v-model="id_sede">
                                                                    <option value="">
                                                                        -
                                                                    </option>
                                                                    <option v-for="(sede, id_s) of sedes" :key="id_s"
                                                                        :value="sede.id">
                                                                        {{ sede.nombre }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputGestion" class="label-required">
                                                                    Gestion
                                                                </label>
                                                                <select name="inputGestion" id="inputGestion"
                                                                    class="form-control" v-model="id_gestion">
                                                                    <option value="">
                                                                        -
                                                                    </option>
                                                                    <option v-for="(gestion, id) of gestiones" :key="id"
                                                                        :value="gestion.id">
                                                                        {{ gestion.periodo }} - {{ gestion.gestion }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group ">
                                                                <label for="inputCupos" class="label-required">
                                                                    Cupos
                                                                </label>
                                                                <input type="number" name="cupos" id="inputCupos"
                                                                    class="form-control" placeholder="Cupos"
                                                                    v-model="cupos" autocomplete="off" min="0">
                                                            </div>
                                                        </div>
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
                                        <UAlert v-if="errors" :title="errors.error" color="red" variant="soft"
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
                                                id="btnRegister" v-if="isNewConvocatoria">
                                                <UIcon name="i-material-symbols-save" class="w-5 h-5" />
                                                &nbsp;
                                                <span class="btn-text">
                                                    Registrar
                                                </span>
                                            </button>
                                            <button type="submit" class="btn btn-lg btn-warning btn-block"
                                                id="btnRegister" v-else>
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
    title: 'Convocatoria | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Convocatoria | Admin'
})


import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { useApiFetch } from '~/composables/useApiFetch'
import SidebarUsuario from '~/components/admin/administracion/Sidebar.vue'
import { Role, RoleName } from '~/enums/Role.enum'

import { useRoute } from 'vue-router'
const route = useRoute()

import { useUserStore } from '~/stores/user'
const user = useUserStore()

const errors = ref(null)

const fecha_ini = ref('')
const fecha_fin = ref('')
const id_carrera = ref('')
const id_sede = ref('')
const id_gestion = ref('')
const cupos = ref(null)

const carreraSedes = ref(null)
const carreras = ref([])
const sedes = ref([])
const getCarreraSede = async () => {
    carreras.value = []
    if (user.data.role == Role.ADMIN) {
        try {
            const data = await useApiFetch(`/carrera-sede`)
            carreraSedes.value = data

            let carrera_id = 0
            for (const cs of carreraSedes.value) {
                if (carrera_id != cs.carrera.id) {
                    carreras.value.push(cs.carrera)
                    carrera_id = cs.carrera.id
                }
            }

            const id = await route.params.id

            if (id == 'nuevo') {
                isNewConvocatoria.value = true
            } else {
                getConvocatoria(id)
                isNewConvocatoria.value = false
            }
        } catch (e) {
            console.log(e)
        }
    } else {
        try {
            const data = await useApiFetch(`/carrera-sede/${user.data.id_carrera}`)
            carreraSedes.value = data

            let carrera_id = 0
            for (const cs of carreraSedes.value) {
                if (carrera_id != cs.carrera.id) {
                    carreras.value.push(cs.carrera)
                    carrera_id = cs.carrera.id
                }
            }

            const id = await route.params.id

            if (id == 'nuevo') {
                isNewConvocatoria.value = true
                id_carrera.value = user.data.id_carrera
            } else {
                getConvocatoria(id)
                isNewConvocatoria.value = false
            }

            selectCarrera()
        } catch (e) {
            console.log(e)
        }
    }
}
const selectCarrera = () => {
    sedes.value = []
    id_sede.value = ''

    for (const cs of carreraSedes.value) {
        if (id_carrera.value == cs.carrera.id) {
            sedes.value.push(cs.sede)
        }
    }
}
const gestiones = ref(null)
const getGestiones = async () => {
    try {
        const data = await useApiFetch('/gestion')

        gestiones.value = data
    } catch (e) {
        console.log(e)
    }
}

const isNewConvocatoria = ref(false)
const submitForm = () => {
    if (isNewConvocatoria.value) {
        postConvocatoria()
    } else {
        putConvocatoria()
    }
}

const postConvocatoria = async () => {
    errors.value = []

    try {
        const data = await useApiFetch('/convocatoria', {
            method: 'POST',
            body: {
                fecha_ini: fecha_ini.value,
                fecha_fin: fecha_fin.value,
                id_carrera: id_carrera.value,
                id_sede: id_sede.value,
                id_gestion: id_gestion.value,
                cupos: cupos.value
            }
        })

        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('successMessage', data.message)

        return navigateTo('/admin/convocatoria')
    } catch (e) {
        if (e.data) {
            errors.value = e.data
        } else {
            console.log(e)
        }
    }
}
const putConvocatoria = async () => {
    errors.value = []

    try {
        const data = await useApiFetch(`/convocatoria/${route.params.id}`, {
            method: 'PUT',
            body: {
                fecha_ini: fecha_ini.value,
                fecha_fin: fecha_fin.value,
                id_carrera: id_carrera.value,
                id_sede: id_sede.value,
                id_gestion: id_gestion.value,
                cupos: cupos.value
            }
        })

        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('successMessage', data.message)

        return navigateTo('/admin/convocatoria')
    } catch (e) {
        if (e.data) {
            errors.value = e.data
        } else {
            console.log(e)
        }
    }
}

const getConvocatoria = async (id) => {
    try {
        const data = await useApiFetch('/convocatoria/' + id)

        fecha_ini.value = data.fecha_ini
        fecha_fin.value = data.fecha_fin
        id_carrera.value = data.id_carrera

        await selectCarrera()

        id_sede.value = data.id_sede
        id_gestion.value = data.id_gestion
        cupos.value = data.cupos
    } catch (e) {
        console.log(e)
    }
}

watch(
    () => user.data.role,
    (role) => {
        if (role) {
            getGestiones()
            getCarreraSede();
        }
    },
    { immediate: true }
)
</script>
