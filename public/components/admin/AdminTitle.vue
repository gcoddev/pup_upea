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
                <div class="search-group" v-if="keyTitle == 'emails'">
                    <div class="search-field">
                        <i class="search-field-icon lm lm-search"></i>
                        <input type="text" id="table-search" class="form-control" placeholder="Buscar...">
                    </div>

                </div>
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