import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
    const swalWithTheme = (options) => {
        const theme = localStorage.getItem('theme') || 'modern'
        return Swal.fire({
            customClass: {
                popup: theme === 'futuristic' ? 'swal2-dark-theme' : 'swal2-light-theme'
            },
            background: theme === 'futuristic' ? '#111827' : '#fff',
            color: theme === 'futuristic' ? '#ddd' : '#111827',
            backdrop: 'rgba(0, 0, 0, 0.75)',
            allowOutsideClick: false,
            ...options
        })
    }

    nuxtApp.provide('swal', swalWithTheme)
})