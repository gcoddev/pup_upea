<template>
    <div>
        <div class="main-banner banner-home banner-secondary">
            <div class="container">
                <h1 class="banner-title">¡Inscribete ahora!</h1>
                <form method="post" @submit.prevent="">
                    <div class="domain-search-input search-group search-group-combined">
                        <div class="search-field search-field-lg">
                            <i class="search-field-icon lm lm-search"></i>
                            <input class="form-control form-control-lg" type="text"
                                placeholder="Introduzca una carrera o palabra clave" v-model="search">
                        </div>
                        <div class="search-group-btn">
                            <button class="btn btn-lg btn-primary domain-check-availability" type="submit">
                                <span class="">Buscar</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="banner-background banner-bg">
                <BannerSearch />
            </div>
        </div>
        <div class="main-body">
            <div class="container">
                <div class="m-w-lg m-h-a">
                    <div class="section" id="DomainSearchResults">
                        <div class="domain-checker-result-headline">
                            <div class="" v-if="search">
                                <div class="domain-available message message-lg message-success message-h"
                                    v-if="searchValue">
                                    <div class="message-content m-w-lg">
                                        <div class="message-icon">
                                            <i class="lm lm-check"></i>
                                        </div>
                                        <div class="message-body">
                                            <div class="message-title">
                                                <strong class="word-break-all">gcoddev.com</strong> ¡está disponible!
                                            </div>
                                            <div class="domain-price">
                                                <div class="price price-sm price-left">$us. 15.00</div>
                                            </div>
                                        </div>
                                        <div class="message-actions">
                                            <div class="btn-group btn-group-remove">
                                                <button type="submit"
                                                    class="btn btn-lg btn-primary-faded btn-add-to-cart" data-whois="0"
                                                    data-domain="gcoddev.com">
                                                    <span class="to-add" style="display: block;">Añadir al
                                                        Carrito</span>
                                                    <span class="added" style="display: none;"><i
                                                            class="lm lm-check"></i>Agregado</span>
                                                    <span class="unavailable" style="display: none;">Ocupado</span>
                                                </button>
                                                <button type="button"
                                                    class="btn btn-lg btn-primary btn-remove-domain hidden">
                                                    <i class="lm lm-trash"></i>
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
                                        <p class="message-title"><strong>:domain</strong> no está disponible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section suggested-domains">
                            <div class="section-header">
                                <h2 class="section-title">Carreras disponibles</h2>
                            </div>
                            <ul class="domain-lookup-result list-group"
                                v-if="convocatorias && convocatorias.length > 0">
                                <li class="domain-suggestion list-group-item clone"
                                    v-for="(conv, id_conv) of convocatorias" :key="id_conv">
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
                                                    comision: 1
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
                                                                            Modalidad:</td>
                                                                        <td>
                                                                            {{ conv.modalidad ? conv.modalidad.modalidad
                                                                                : '' }}
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
                                                            comision: 1
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
                                        <span class="domain">No hay convocatorias vigentes</span>
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
const searchValue = ref('')

const convocatorias = ref(null)
const getConvocatorias = async () => {
    try {
        const data = await useApiFetch('/convocatoria/pre')

        convocatorias.value = data
        console.log(data)
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
        comision: ins.comision
    })
    // showButton()
    return navigateTo('/convocatoria/cart')
}

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
    }, 250)
})
</script>