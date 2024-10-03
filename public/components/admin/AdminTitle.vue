<template>
    <div class="main-header">
        <div class="container">
            <h1 class="main-header-title">
                {{ receivedTitle ? receivedTitle : 'Panel principal' }}
            </h1>
            <div class="main-header-bottom">
                <ol class="breadcrumb">
                    <li>
                        <NuxtLink to="/admin">Panel</NuxtLink>
                    </li>
                    <li class="active">
                        {{ receivedTitle ? receivedTitle : 'Panel principal' }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    receivedTitle: String
})
</script>