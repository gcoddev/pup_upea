import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = Cookies.get('token')

        if (!token) {
            sessionStorage.setItem('message', 'Sesión finalizada')
            sessionStorage.setItem('status', 'warning')
            setTimeout(() => {
                return navigateTo('/login')
            }, 250)
        }
    }
})
