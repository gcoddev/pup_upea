<template>
  <NuxtLayout :key="currentLayout">
    <UNotifications />
    <NuxtPage />

  </NuxtLayout>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentLayout = computed(() => {
  return route.meta.layout
})

onMounted(() => {
  const toggleTheme = (theme) => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');

    if (theme === 'futuristic') {
      // Cambiar a tema oscuro (futuristic)
      links[0].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/minified.css';
      links[1].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/colors/default.css';
    } else {
      // Cambiar a tema claro (modern)
      links[0].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/minified.css';
      links[1].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/colors/default.css';
    }

    // Guardar preferencia en localStorage
    localStorage.setItem('theme', theme);
  };

  // Cargar el tema guardado en localStorage o por defecto usar modern
  const savedTheme = localStorage.getItem('theme') || 'modern';
  toggleTheme(savedTheme);
});
</script>
