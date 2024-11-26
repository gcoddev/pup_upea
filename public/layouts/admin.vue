<template>
    <div class="lagom lagom-layout-top" id="layout-main">
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
        <!-- <AdminHeader @titleFromHeader="handleTitle" /> -->
        <AdminHeader />
        <div class="app-main">
            <slot />
            <AdminFooter />
        </div>
    </div>
</template>

<script setup>
import AdminHeader from '~/components/admin/AdminHeader.vue'
import AdminFooter from '~/components/admin/AdminFooter.vue'
import { ref, onMounted, provide } from 'vue'
import { useUserStore } from '~/stores/user'
import Cookies from 'js-cookie'

const loading = ref(true)
const titleFromHeader = ref('')
const errorMessage = ref('')

const handleTitle = (title) => {
    titleFromHeader.value = title
}
provide('setTitle', handleTitle)

const userStore = useUserStore()
const getProfile = async () => {
    try {
        const data = await useApiFetch('/auth/profile')
        userStore.login(data)
    } catch (err) {
        errorMessage.value = 'Ha ocurrido un error'
        console.log(err)
        logout()
    }
}

const logout = (() => {
    setTimeout(() => {
        Cookies.remove('token')
        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', 'Sesión cerrada')
        sessionStorage.setItem('status', 'warning')

        return navigateTo('/login')
        // location.reload()
    }, 250)
})


onMounted(() => {
    setTimeout(() => {
        getProfile()
        loading.value = false
    }, 500)
})
</script>

<!-- <style src="~/public/assets/admin/lagom2/core/extensions/ClientNotifications/assets/css/client-notifications.css"></style> -->