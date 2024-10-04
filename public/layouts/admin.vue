<template>
    <div class="lagom lagom-layout-top lagom-modern page-homepage">
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
        <AdminHeader @titleFromHeader="handleTitle" />
        <div class="app-main">
            <AdminTitle :receivedTitle="titleFromHeader" />
            <slot />
            <AdminFooter />
        </div>
    </div>
</template>

<script setup>
import AdminHeader from '~/components/admin/AdminHeader.vue'
import AdminFooter from '~/components/admin/AdminFooter.vue'
import AdminTitle from '~/components/admin/AdminTitle.vue'
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'

const loading = ref(true)
const titleFromHeader = ref('')

const handleTitle = (title) => {
    titleFromHeader.value = title
}

const userStore = useUserStore()
const getProfile = async () => {
    try {
        const { data, error } = await useApiFetch('/auth/profile', { method: 'GET' })
        userStore.login(data.value)
    } catch (err) {
        errorMessage.value = 'Ha ocurrido un error'
        console.error(err)
    }
}


onMounted(() => {
    setTimeout(() => {
        loading.value = false
        getProfile()
    }, 500)
})
</script>

<!-- <style src="~/public/assets/admin/lagom2/core/extensions/ClientNotifications/assets/css/client-notifications.css"></style> -->