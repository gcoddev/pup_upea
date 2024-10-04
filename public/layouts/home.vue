<template>
    <div class="lagom lagom-layout-top lagom-modern page-homepage" :class="layoutClass">
        <div id="bg-load" v-if="loading">
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
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)

onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 500)
})

const layoutClass = computed(() => {
    if (process.client) {
        return route.meta.bodyClass || ''
    }
})
</script>

<!-- < style href = "~/public/assets/admin/lagom2/core/extensions/ClientNotifications/assets/css/client-notifications.css" ></ > -->