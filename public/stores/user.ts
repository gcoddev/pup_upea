import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        data: {},
        isLoggedIn: false
    }),
    actions: {
        login(user: Object) {
            this.data = user
            this.isLoggedIn = true
        },
        logout() {
            this.data = ''
            this.isLoggedIn = false
        }
    }
})