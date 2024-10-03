<template>
    <div>
        <h1>Orden</h1>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Ordenes | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Orden | Admin'
})
</script>