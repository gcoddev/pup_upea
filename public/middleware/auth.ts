import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = Cookies.get('token')

        if (!token) {
            setTimeout(() => {
                return navigateTo('/login')
            }, 250)
        }
    }
})
