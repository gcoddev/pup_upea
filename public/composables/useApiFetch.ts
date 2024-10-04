import Cookies from 'js-cookie'

export const useApiFetch = (endpoint: string, options = {}) => {
    const config = useRuntimeConfig()
    const token = Cookies.get('token')
    const headers = {
        Authorization: token ? `Bearer ${token}` : '',
        // ...options.headers, // Combina con otras cabeceras que puedas pasar
    }

    return useFetch(`${config.public.apiBaseUrl}${endpoint}`, {
        ...options,
        headers, // Agregar las cabeceras con el token
    })
}