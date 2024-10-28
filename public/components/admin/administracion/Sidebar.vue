<template>
    <div class="main-sidebar ">
        <div class="sidebar sidebar-primary">
        </div>
        <div class="sidebar sidebar-secondary">
            <div menuitemname="My Services Actions" class="panel panel-sidebar panel-default">
                <div class="panel-heading">
                    <h5 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp; Administración
                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h5>
                </div>
                <div class="list-group">
                    <NuxtLink to="/admin/usuario" class="list-group-item" :class="option == 'usuario' ? 'active' : ''"
                        @click="option = 'usuario'" v-if="user.data.role == Role.ADMIN">
                        <UIcon name="i-heroicons-user-circle" class="w-5 h-5 mr-2 position-relative top-1" />
                        Usuarios
                    </NuxtLink>
                    <hr>
                    <NuxtLink to="/admin/convocatoria" class="list-group-item"
                        :class="option == 'convocatoria' ? 'active' : ''" @click="option = 'convocatoria'"
                        v-if="user.data.role == Role.ADMIN || user.data.role == Role.TEC">
                        <UIcon name="i-heroicons-clipboard" class="w-5 h-5 mr-2 position-relative top-1" />
                        Convocatorias
                    </NuxtLink>
                    <NuxtLink to="/admin/inscripcion" class="list-group-item"
                        :class="option == 'inscripcion' ? 'active' : ''" @click="option = 'inscripcion'"
                        v-if="user.data.role == Role.ADMIN || user.data.role == Role.TEC">
                        <UIcon name="i-heroicons-list-bullet" class="w-5 h-5 mr-2 position-relative top-1" />
                        Inscripciones
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Role } from '~/enums/Role.enum';
const route = useRoute()
const option = ref('')
import { useUserStore } from '~/stores/user'
const user = useUserStore()

onMounted(() => {
    const ruta = route.path.split('/')

    if (ruta[2] && !ruta[3]) {
        option.value = ruta[2]
    }
})
</script>