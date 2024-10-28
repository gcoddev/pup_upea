<template>
    <span>{{ formattedDate }}</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    date: {
        type: String,
        required: true
    }
})

const formattedDate = computed(() => {
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    const dateObj = new Date(props.date)
    const day = dateObj.getDate().toString().padStart(2, '0')
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()

    return `${day} de ${month} de ${year}`
})
</script>