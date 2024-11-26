<template>
    <div class="main-sidebar ">
        <div class="sidebar sidebar-primary">
        </div>
        <div class="sidebar sidebar-secondary">
            <div menuitemname="My Services Actions" class="panel panel-sidebar panel-default">
                <div class="panel-heading">
                    <h5 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp; Cuenta
                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h5>
                </div>
                <div class="list-group">
                    <NuxtLink to="/admin/perfil" class="list-group-item" :class="option == 'perfil' ? 'active' : ''"
                        @click="option = 'perfil'">
                        <UIcon name="i-heroicons-user-solid" class="w-5 h-5 mr-2 position-relative top-1" />
                        Tu perfil
                    </NuxtLink>
                    <hr>
                    <NuxtLink to="/admin/password" class="list-group-item" :class="option == 'password' ? 'active' : ''"
                        @click="option = 'password'">
                        <UIcon name="i-heroicons-lock-closed-solid" class="w-5 h-5 mr-2 position-relative top-1" />
                        Cambiar contraseña
                    </NuxtLink>
                    <NuxtLink to="/admin/security" class="list-group-item" :class="option == 'security' ? 'active' : ''"
                        @click="option = 'security'">
                        <UIcon name="i-heroicons-shield-check-solid" class="w-5 h-5 mr-2 position-relative top-1" />
                        Ajustes de seguridad
                    </NuxtLink>
                    <NuxtLink to="/admin/emails" class="list-group-item" :class="option == 'emails' ? 'active' : ''"
                        @click="option = 'emails'">
                        <UIcon name="i-heroicons-envelope-solid" class="w-5 h-5 mr-2 position-relative top-1" />
                        Emails recibidos
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