<template>
    <div>
        <div class="main-banner banner-home banner-secondary">
            <div class="container">
                <h1 class="banner-title">¡Inscribete ahora!</h1>
                <div>
                    <div class="domain-search-input search-group search-group-combined">
                        <div class="search-field search-field-lg">
                            <UIcon name="i-heroicons-magnifying-glass" class="search-field-icon lm lm-search" />
                            <input class="form-control form-control-lg" type="search"
                                placeholder="Introduzca una carrera o palabra clave" v-model="search"
                                @keyup="searchCarrera()">
                        </div>
                        <div class="search-group-btn">
                            <button class="btn btn-lg btn-primary domain-check-availability" type="button"
                                @click="scrollSearch()">
                                <span class="">Buscar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-background banner-bg">
                <BannerSearch />
            </div>
        </div>
        <div class="main-body">
            <div class="container">
                <div class="m-w-lg m-h-a">
                    <div class="section" id="DomainSearchResults">
                        <!-- <div class="domain-checker-result-headline">
                            <div class="" v-if="search">
                                <div class="domain-available message message-lg message-success message-h"
                                    v-if="filterConvocatorias.length > 0">
                                    <div class="message-content m-w-lg">
                                        <div class="message-icon">
                                            <i class="lm lm-check"></i>
                                        </div>
                                        <div class="message-body">
                                            <div class="message-title">
                                                <strong class="word-break-all">{{ search.toUpperCase() }}</strong> ¡está
                                                disponible!
                                            </div>
                                            <div class="text-lg">
                                                {{ filterConvocatorias[0].carrera.nombre_completo }}
                                            </div>
                                            <span class="domain underline font-weight-bold">
                                                <a href="$" data-bs-toggle="modal"
                                                    :data-bs-target="`#convo_${filterConvocatorias[0].idConvocatoria}`">
                                                    Ver convocatoria
                                                </a>
                                            </span>
                                            <div class="domain-price">
                                                <div class="price price-sm price-left">
                                                    Bs. {{ filterConvocatorias[0].costo.toFixed(2) }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message-actions">
                                            <div class="btn-group btn-group-remove">
                                                <button type="button"
                                                    class="btn btn-lg btn-primary-faded btn-add-to-cart" @click="addOrder({
                                                        id: filterConvocatorias[0].id_concepto,
                                                        id_carrera: filterConvocatorias[0].id_carrera,
                                                        carrera: filterConvocatorias[0].carrera.nombre_completo,
                                                        id_sede: filterConvocatorias[0].id_sede,
                                                        sede: filterConvocatorias[0].sede.nombre,
                                                        id_gestion: filterConvocatorias[0].id_gestion,
                                                        periodo: filterConvocatorias[0].gestion.periodo,
                                                        gestion: filterConvocatorias[0].gestion.gestion,
                                                        concepto: filterConvocatorias[0].id_concepto,
                                                        costo: filterConvocatorias[0].costo,
                                                        comision: 1
                                                    })">
                                                    <span class="to-add" style="display: block;">Añadir al
                                                        Carrito</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="domain-unavailable message message-lg message-danger message-h" v-else>
                                    <div class="message-icon">
                                        <i class="lm lm-close"></i>
                                    </div>
                                    <div class="message-body">
                                        <p class="message-title"><strong>{{ search }}</strong> no está disponible
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="section suggested-domains" id="search">
                            <div class="section-header">
                                <h2 class="section-title">Carreras disponibles</h2>
                            </div>
                            <ul class="domain-lookup-result list-group"
                                v-if="mostrarConvocatorias && mostrarConvocatorias.length > 0">
                                <li class="domain-suggestion list-group-item clone"
                                    v-for="(conv, id_conv) of mostrarConvocatorias" :key="id_conv">
                                    <div>
                                        <div class="content">
                                            <span class="extension">
                                                {{ conv.carrera.nombre_completo }}
                                            </span>
                                            <span class="promo">
                                                <!-- <span class="sales-group-hot label label-danger">Destacado</span>
                                            <span class="sales-group-new label label-purple">Nuevo</span> -->
                                                <span class="sales-group-sale label label-success">
                                                    {{ conv.gestion.periodo }}
                                                    - {{ conv.gestion.gestion }}
                                                </span>
                                            </span>
                                        </div>
                                        <span class="domain underline font-weight-bold">
                                            <a href="$" data-bs-toggle="modal"
                                                :data-bs-target="`#convo_${conv.idConvocatoria}`">
                                                Ver convocatoria
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        Sede {{ conv.sede.nombre }}
                                    </div>
                                    <div class="actions">
                                        <span class="price price-xs price-right">Bs. {{ conv.costo.toFixed(2) }}</span>
                                        <div class="btn-group btn-group-remove">
                                            <button type="button" class="btn btn-sm btn-primary-faded btn-add-to-cart"
                                                @click="addOrder({
                                                    id: conv.id_concepto,
                                                    id_carrera: conv.id_carrera,
                                                    carrera: conv.carrera.nombre_completo,
                                                    id_sede: conv.id_sede,
                                                    sede: conv.sede.nombre,
                                                    id_gestion: conv.id_gestion,
                                                    periodo: conv.gestion.periodo,
                                                    gestion: conv.gestion.gestion,
                                                    concepto: conv.id_concepto,
                                                    costo: conv.costo,
                                                    comision: 1,
                                                    idConvocatoria: conv.idConvocatoria
                                                })">
                                                <span class="to-add">Inscribirme</span>
                                                <!-- <span class="added"><i class="ls ls-check"></i>Agregado</span> -->
                                                <!-- <span class="unavailable">Ocupado</span> -->
                                            </button>
                                            <!-- <button type="button"
                                                class="btn btn-sm btn-primary btn-remove-domain"
                                                data-system-template="lagom2" data-domain="gcoddevlapaz.com" title=""
                                                data-original-title="Eliminar">
                                                <UIcon name="i-heroicons-trash-solid"/>
                                            </button> -->
                                        </div>
                                    </div>

                                    <div class="modal modal-xl fade" :id="`convo_${conv.idConvocatoria}`" tabindex="-1"
                                        :aria-labelledby="`convoLabel_${conv.idConvocatoria}`" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5 font-weight-bold"
                                                        :id="`convoLabel_${conv.idConvocatoria}`">
                                                        Convocatoria {{ conv.carrera.nombre_completo }}
                                                    </h1>
                                                    <button type="button" class="close" data-bs-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row d-flex flex-column-reverse flex-xl-row">
                                                        <div class="col-12 col-xl-6">
                                                            <img src="~/public/images/upea.png" alt="Convocatoria"
                                                                class="img-fluid w-100">
                                                        </div>
                                                        <div class="col-12 col-xl-6">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Carrera:</td>
                                                                        <td>
                                                                            {{ conv.carrera ?
                                                                                `${conv.carrera.nombre_completo}
                                                                            (${conv.carrera.tipo_gestion})` : '' }}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Sede:</td>
                                                                        <td>
                                                                            {{ conv.sede ?
                                                                                conv.sede.nombre : '' }}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Modalidades:</td>
                                                                        <td>
                                                                            <ul class="list-disc ml-4">
                                                                                <li v-for="(mod, id_mod) of conv.modalidad"
                                                                                    :key="id_mod" class="list-item">
                                                                                    {{ mod.modalidad }}
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Gestión:</td>
                                                                        <td>
                                                                            {{ conv.gestion ? `${conv.gestion.periodo} -
                                                                            ${conv.gestion.gestion}` : '' }}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Inicio inscripciones:</td>
                                                                        <td>

                                                                            <DateFormat :date="conv.fecha_ini" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Cierre inscripciones:
                                                                        </td>
                                                                        <td>

                                                                            <DateFormat :date="conv.fecha_fin" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold">
                                                                            Costo inscripción:
                                                                        </td>
                                                                        <td>
                                                                            Bs. {{ conv.costo }}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal-footer d-flex justify-end">
                                                    <button type="button" class="btn btn-primary"
                                                        data-bs-dismiss="modal" @click="addOrder({
                                                            id: conv.id_concepto,
                                                            id_carrera: conv.id_carrera,
                                                            carrera: conv.carrera.nombre_completo,
                                                            id_sede: conv.id_sede,
                                                            sede: conv.sede.nombre,
                                                            id_gestion: conv.id_gestion,
                                                            periodo: conv.gestion.periodo,
                                                            gestion: conv.gestion.gestion,
                                                            concepto: conv.id_concepto,
                                                            costo: conv.costo,
                                                            comision: 1,
                                                            idConvocatoria: conv.idConvocatoria
                                                        })">
                                                        Inscribirme
                                                    </button>
                                                    <button type="button" class="btn btn-default"
                                                        data-bs-dismiss="modal">
                                                        Cerrar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                            <ul class="domain-lookup-result list-group" v-else>
                                <li class="domain-suggestion list-group-item clone">
                                    <div class="content">
                                        <span class="domain" v-if="search">
                                            No existen convocatorias para "{{
                                                search.toUpperCase() }}"
                                        </span>
                                        <span class="domain" v-else>
                                            No hay convocatorias vigentes
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})

useHead({
    title: 'Convocatorias'
})

import DateFormat from '~/components/admin/administracion/DateFormat.vue'
import BannerSearch from '~/components/admin/orden/Banner'
import { ref, onMounted, watch } from 'vue'
import { useInsStore } from '~/stores/inscripcion'
const cartStore = useInsStore()

const search = ref('')
const convocatorias = ref(null)
const getConvocatorias = async () => {
    try {
        const data = await useApiFetch('/convocatoria/pre')

        convocatorias.value = data
    } catch (e) {
        console.log(e.data)
    }
}

const addOrder = (ins) => {
    cartStore.add({
        id: ins.id,
        id_carrera: ins.id_carrera,
        carrera: ins.carrera,
        id_sede: ins.id_sede,
        sede: ins.sede.sede,
        id_gestion: ins.id_gestion,
        periodo: ins.periodo,
        gestion: ins.gestion,
        concepto: ins.concepto,
        costo: ins.costo,
        comision: ins.comision,
        idConvocatoria: ins.idConvocatoria
    })
    return navigateTo('/convocatoria/cart')
}

const filterConvocatorias = ref([])
const searchCarrera = () => {
    filterConvocatorias.value = convocatorias.value.filter(carrera =>
        carrera.carrera.nombre_completo.toLowerCase().includes(search.value.toLowerCase())
    )
}
const scrollSearch = () => {
    searchCarrera()

    const searchSection = document.getElementById('search')
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' })
    }
}
const mostrarConvocatorias = computed(() => {
    if (search.value) {
        return filterConvocatorias.value
    } else {
        return convocatorias.value
    }
    // return filterConvocatorias.value.length > 0 ? filterConvocatorias.value : convocatorias.value
})

watch(
    () => cartStore.data,
    (cart) => {
        if (cart) {
            if (cart.length > 0) {
                return navigateTo('/convocatoria/cart')
            }
        }
    },
    { immediate: true }
)

onMounted(() => {
    setTimeout(() => {
        getConvocatorias()

        setTimeout(() => {
            const carrera = localStorage.getItem('carrera')
            if (carrera) {
                localStorage.removeItem('carrera')
                search.value = carrera.toString()
                scrollSearch()
            }
        }, 250)
    }, 250)
})
</script>