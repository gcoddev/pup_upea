<template>
    <div class="lagom lagom-layout-top lagom-modern page-homepage">
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
import { onMounted } from 'vue'

onMounted(() => {
    document.getElementById('bg-load').style.display = 'none'
})

const titleFromHeader = ref('')

const handleTitle = (title) => {
    titleFromHeader.value = title
}
</script>

<!-- <style src="~/public/assets/admin/lagom2/core/extensions/ClientNotifications/assets/css/client-notifications.css"></style> -->