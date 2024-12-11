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
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            // 'Access-Control-Allow-Headers': 'Authorization, Content-Type',
            // 'Access-Control-Max-Age': '86400',
        }


        return $fetch(`${config.public.apiBaseUrl}${endpoint}`, {
            ...options,
            headers
        })
    }
}