import { defineStore } from 'pinia'

interface Inscripcion {
    id: number;
    id_carrera: number;
    carrera: string;
    id_sede: number;
    sede: string;
    id_gestion: number;
    periodo: string;
    gestion: string;
    concepto: string;
    costo: number;
    comision: number;
    idConvocatoria: number
}

export const useInsStore = defineStore('inscripcion', {
    state: () => ({
        data: [] as Inscripcion[]
    }),
    actions: {
        add(order: Inscripcion) {
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