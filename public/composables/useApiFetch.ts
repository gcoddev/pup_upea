export const useApiFetch = (endpoint: string, options = {}) => {
    const config = useRuntimeConfig()
    return useFetch(`${config.public.apiBaseUrl}${endpoint}`, options)
}