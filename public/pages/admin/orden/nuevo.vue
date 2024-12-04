<template>
    <div>
        <AdminTitle title="Nuevo pedido" key="orden" />

        <div class="main-body position-relative pb-3">
            <div class="container">
                <div class="main-grid">
                    <div class="main-sidebar hidden-xs hidden-sm hidden-md ">
                        <div class="sidebar-sticky" data-sidebar-sticky>
                            <div menuItemName="Categories" class="panel panel-sidebar">
                                <div class="panel-heading">
                                    <h3 class="panel-title">
                                        <i class="fas fa-shopping-cart"></i>&nbsp;
                                        Categorías
                                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                                    </h3>
                                </div>
                                <div class="list-group">
                                    <a href="#" class="list-group-item" v-for="(tipo, id_tipo) of tipos" :key="id_tipo"
                                        @click="handleCategory(tipo.id, tipo.descripcion)"
                                        :class="[tipoActual == tipo.id ? 'active' : '']">
                                        <UIcon name="i-heroicons-academic-cap-solid" class="w-4 h-4" />
                                        &nbsp;{{ tipo.descripcion }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-content">
                        <div class="categories-collapsed visible-xs visible-sm visible-md clearfix">
                            <div class="categories-sidebar">
                                <div class="dropdown">
                                    <a href="#" data-toggle="dropdown" class="btn btn-default categoria-actual">
                                        {{ categoriaActual }}
                                        <UIcon name="i-material-symbols-arrow-drop-down" class="w-5 h-5" />
                                    </a>
                                    <ul class="dropdown-menu has-scroll">
                                        <li class="dropdown-title h6">Categorías</li>
                                        <li>
                                            <a href="#" v-for="(tipo, id_tipo) of tipos" :key="id_tipo"
                                                @click="handleCategory(tipo.id, tipo.descripcion)"
                                                :class="[tipoActual == tipo.id ? 'active' : '']">
                                                {{ tipo.descripcion }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-for="(tipo, id_tipo) of tipos" :key="id_tipo">
                            <div class="section products" v-if="tipoActual == tipo.id">
                                <div class="row row-eq-height row-eq-height-sm" v-if="tipo.conceptos.length > 0">
                                    <div class="col" v-for="(concepto, id_con) of tipo.conceptos" :key="id_con">
                                        <div class="package">
                                            <div class="package-side package-side-left">
                                                <div class="package-header">
                                                    <h3 class="package-title" :data-tooltip="concepto.concepto">{{
                                                        concepto.concepto }}</h3>
                                                    <div class="package-price">
                                                        <div class="price">

                                                            <div class="price-amount">
                                                                Bs. {{ concepto.montoMinimo }}
                                                            </div>
                                                            <div class="price-cycle ">
                                                                Anual
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="package-body">
                                                    <div class="package-content">
                                                        <ul class="package-features">
                                                            <li><b>Nacionalidad</b> {{ concepto.tipoNacionalidad }}</li>
                                                            <!-- <li><b>Unidad</b> {{ concepto.unidad.nombreUnidadMovimiento
                                                                }}
                                                            </li> -->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="package-footer package-side package-side-right">
                                                <button type="button" class="btn btn-lg btn-primary btn-order-now"
                                                    @click="addOrder(concepto.id, concepto.concepto, concepto.montoMinimo, 1)"
                                                    v-if="!isConceptoInCart(concepto.id)" style="cursor: alias;">
                                                    <UIcon name="i-material-symbols-add-shopping-cart"
                                                        class="w-5 h-5" />
                                                    &nbsp;
                                                    Pedir
                                                </button>
                                                <div v-else>
                                                    <button type="button" class="btn btn-lg btn-danger btn-order-now"
                                                        @click="removeOrder(concepto.id)">
                                                        <UIcon name="i-material-symbols-remove-shopping-cart"
                                                            class="w-5 h-5" />
                                                        &nbsp;
                                                        Quitar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="p-5">
                                    <div class="alert alert-info">
                                        No hay conceptos para este tipo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alert alert-warning my-4" v-if="ip">
                    Por motivos de seguridad guardaremos su IP actual, su IP (<strong>{{ ip }}</strong>) ha sido
                    guardada en
                    nuestra base de datos.
                </div>
            </div>


            <NuxtLink to="/admin/orden/cart" class="btn btn-lg btn-success btn-order-now btn-buy-float"
                v-if="cartStore.data.length > 0" :class="isLowOpacity ? 'low-opacity' : ''" @mouseenter="onMouseEnter"
                @mouseleave="onMouseLeave">
                <UIcon name="i-heroicons-shopping-cart-solid" class="w-5 h-5" />
                &nbsp;
                Realizar compra
                &nbsp;
                <span class="badge bg-info">{{ cartStore.data.length }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Nueva orden | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Nueva orden | Admin'
})

import OrdenSidebar from '~/components/admin/orden/Sidebar.vue'
import OrdenCollapse from '~/components/admin/orden/Collapse.vue'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useApiFetch } from '~/composables/useApiFetch'
import AdminTitle from '~/components/admin/AdminTitle.vue'

const categoriaActual = ref('')
const handleCategory = (id, category) => {
    tipoActual.value = id
    categoriaActual.value = category

    console.log(tipoActual.value, categoriaActual.value)
}

const tipos = ref(null)
const tipoActual = ref(0)
const getTiposConcepto = async () => {
    try {
        const data = await useApiFetch('/tipo-concepto')
        data.forEach((element) => {
            if (tipoActual.value == 0) {
                tipoActual.value = element.id
                categoriaActual.value = element.descripcion
            }
        })
        tipos.value = data

    } catch (err) {
        console.log(err)
    }
}


import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()
const addOrder = (id, concepto, monto_minimo, comision) => {
    cartStore.add({
        id: id,
        concepto: concepto,
        categoria: categoriaActual.value,
        monto_minimo: monto_minimo,
        comision: comision
    })
    // showButton()
    return navigateTo('/admin/orden/cart')
}
const removeOrder = (id) => {
    cartStore.remove(id)
    showButton()
}
const isConceptoInCart = (id) => {
    return cartStore.exist(id)
}

const isLowOpacity = ref(false)
let timeout;
function showButton() {
    isLowOpacity.value = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        isLowOpacity.value = true;
    }, 500);
}

function onMouseEnter() {
    isLowOpacity.value = false;
    clearTimeout(timeout);
}

function onMouseLeave() {
    timeout = setTimeout(() => {
        isLowOpacity.value = true;
    }, 500);
}

const ip = ref('')
const getIp = async () => {
    try {
        const data = await useApiFetch('', {}, 'https://api.ipify.org?format=json');
        ip.value = data.ip;
    } catch (e) {
        console.log('Error obteniendo la IP:', e);
    }
}

onBeforeUnmount(() => {
    window.removeEventListener('scroll', showButton);
    // window.removeEventListener('mousemove', showButton);
    window.removeEventListener('touchstart', showButton);
    clearTimeout(timeout);
});

watch(
    () => cartStore.data,
    (cart) => {
        if (cart) {
            if (cart.length > 0) {
                return navigateTo('/admin/orden/cart')
            }
        }
    },
    { immediate: true }
)

onMounted(() => {
    setTimeout(() => {
        // getConceptos()
        getTiposConcepto()
        getIp()
    }, 250)

    window.addEventListener('scroll', showButton);
    // window.addEventListener('mousemove', showButton);
    window.addEventListener('touchstart', showButton);

    timeout = setTimeout(() => {
        isLowOpacity.value = true;
    }, 500);
})
</script>

<style>
.btn-buy-float {
    position: sticky;
    bottom: 20px;
    right: 20px;
    float: right;
    margin-bottom: 5px;
    z-index: 10;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
}

.low-opacity {
    opacity: 0.25;
}

.package {
    transform: scale(0.95);
    transition: transform 0.25s ease;
    opacity: 0.90;
    position: relative;
    display: inline-block;
}

.package:hover {
    transform: scale(1);
    opacity: 1;
}

.package-title {
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    max-width: 100%;
    cursor: zoom-in;
}

.package-title::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 15px);
    left: 0;
    width: 100%;
    background-color: var(--tooltip-title-bg);
    color: var(--text-heading-color);
    padding: 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    line-height: 1.4;
    text-align: center;
    box-shadow: var(--package-block-shadow);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    font-weight: 400;
}

.package-title:hover::after {
    opacity: 1;
    transform: translateY(-2px);
}

@media (max-width: 479.98px) {
    .categoria-actual {
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>