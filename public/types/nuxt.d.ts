import { NuxtApp } from 'nuxt/app'

declare module 'nuxt/app' {
    interface NuxtApp {
        $fetch: typeof fetch; // o el tipo específico que estés usando
    }
}