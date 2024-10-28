import Cookies from 'js-cookie'

export const useApiFetch = (endpoint: string, options = {}, url = null) => {
    if (url) {
        return $fetch(url)
    } else {
        const config = useRuntimeConfig()
        const token = Cookies.get('token')
        const apiKeyValue = config.public.apiKeyValue

        const headers = {
            Authorization: token ? `Bearer ${token}` : '',
            'nest-api-key': apiKeyValue,
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH'
        }


        return $fetch(`${config.public.apiBaseUrl}${endpoint}`, {
            ...options,
            headers
        })
    }
}