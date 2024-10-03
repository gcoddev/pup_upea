<template>
    <div class="lagom lagom-layout-top lagom-modern page-homepage" :class="layoutClass">
        <div class="bg-load" id="bg-load">
            <div class="loader">
            </div>

            <div class="spinner ">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
        <Header />
        <div class="app-main">
            <slot />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layoutClass = computed(() => {
    if (process.client) {
        return route.meta.bodyClass || ''
    }
})

onMounted(() => {
    document.getElementById('bg-load').style.display = 'none'
})
</script>

<!-- < style href = "~/public/assets/admin/lagom2/core/extensions/ClientNotifications/assets/css/client-notifications.css" ></ > -->