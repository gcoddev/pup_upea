<template>
    <div class="main-header">
        <div class="container d-flex justify-content-between align-items-end">
            <div>
                <h1 class="main-header-title">
                    {{ title }}
                </h1>
                <div class="main-header-bottom">
                    <ol class="breadcrumb">
                        <li>
                            <NuxtLink to="/admin">Panel</NuxtLink>
                        </li>
                        <li class="active">
                            {{ title }}
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <NuxtLink to="/admin/usuario/nuevo" class="btn btn-info" v-if="keyTitle == 'usuario'">
                    Nuevo usuario
                </NuxtLink>
                <NuxtLink to="/admin/convocatoria/nuevo" class="btn btn-info" v-if="keyTitle == 'convocatoria'">
                    Nueva convocatoria
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    keyTitle: String
})
</script>