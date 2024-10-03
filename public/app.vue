<template>
  <NuxtLayout :key="currentLayout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentLayout = computed(() => {
  return route.meta.layout
})

</script>
