<template>
    <span style="font-size:.9em;" v-html="formattedDateRange"></span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    fecha_ini: String,
    fecha_fin: String
})

// Función para formatear una fecha en el formato requerido
const formatDate = (date) => {
    const months = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ]
    const dateObj = new Date(date)
    const day = dateObj.getDate().toString().padStart(2, '0')
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    return { day, month, year }
}

// Computed para combinar ambas fechas en el formato deseado
const formattedDateRange = computed(() => {
    const startDate = formatDate(props.fecha_ini)
    const endDate = formatDate(props.fecha_fin)

    // Verificar si el mes y el año son los mismos
    if (startDate.month === endDate.month && startDate.year === endDate.year) {
        return `${startDate.day} de ${startDate.month}<br>al<br>${endDate.day} de ${startDate.year}`
    } else {
        return `${startDate.day} de ${startDate.month}<br>al<br>${endDate.day} de ${endDate.month} de ${endDate.year}`
    }
})
</script>
