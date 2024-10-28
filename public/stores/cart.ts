import { defineStore } from 'pinia'

interface Order {
    id: number;
    concepto: string;
    monto_minimo: number;
    comision: number;
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        data: [] as Order[]
    }),
    actions: {
        add(order: Order) {
            this.data.push(order)
        },
        remove(id: number) {
            this.data = this.data.filter(item => item.id !== id)
        },
        reset() {
            this.data = []
        }
    },
    getters: {
        exist: (state) => {
            return (id: number) => state.data.some(item => item.id === id)
        }
    },
})