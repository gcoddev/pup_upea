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
                                        @click="tipoActual = tipo.id_tipoConcepto"
                                        :class="[tipoActual == tipo.id_tipoConcepto ? 'active' : '']">
                                        <UIcon name="i-heroicons-academic-cap-solid" class="w-4 h-4" />
                                        &nbsp;{{ tipo.descripcion }}
                                    </a>
                                </div>
                            </div>
                            <div menuItemName="Actions" class="panel panel-sidebar">
                                <div class="panel-heading">
                                    <h3 class="panel-title">
                                        <i class="fas fa-plus"></i>&nbsp;
                                        Actions
                                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                                    </h3>
                                </div>
                                <div class="list-group">
                                    <a menuItemName="Domain Registration"
                                        href="../cart2029.html?a=add&amp;domain=register" class="list-group-item"
                                        id="Secondary_Sidebar-Actions-Domain_Registration">
                                        <i class="fas fa-ticket ls ls-dns"></i>&nbsp;

                                        Register a New Domain

                                    </a>
                                    <a menuItemName="Domain Transfer" href="../cart7c76.html?a=add&amp;domain=transfer"
                                        class="list-group-item" id="Secondary_Sidebar-Actions-Domain_Transfer">
                                        <i class="fas fa-ticket ls ls-transfer"></i>&nbsp;

                                        Transfer in a Domain

                                    </a>
                                    <a menuItemName="View Cart" href="../cart17cb.html?a=view" class="list-group-item"
                                        id="Secondary_Sidebar-Actions-View_Cart">
                                        <i class="fas fa-ticket ls ls-basket"></i>&nbsp;

                                        View Cart

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-content">
                        <OrdenCollapse />
                        <!-- <div class="section products" id="est" v-if="categoria == 'estudiantes'">
                        <div class="row row-eq-height row-eq-height-sm">
                            <div class="col" v-for="(concepto, id_con) of conceptos" :key="id_con">
                                <div class="package">
                                    <div class="package-side package-side-left">
                                        <div class="package-header">
                                            <h3 class="package-title">{{ concepto.concepto }}</h3>
                                            <div class="package-price">
                                                <div class="price">

                                                    <div class="price-amount">
                                                        Bs. {{ concepto.monto_minimo }}
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
                                                    <li><b>Nacionalidad</b> {{ concepto.tipo_nacionalidad }}</li>
                                                    <li><b>Unidad</b> {{ concepto.id_unidad_movimiento }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package-footer package-side package-side-right">
                                        <button type="button" class="btn btn-lg btn-primary btn-order-now"
                                            @click="addOrder(concepto.id_concepto, concepto.concepto, concepto.monto_minimo, 1)"
                                            v-if="!isConceptoInCart(concepto.id_concepto)">
                                            <UIcon name="i-material-symbols-add-shopping-cart" class="w-5 h-5" />&nbsp;
                                            Pedir
                                        </button>
                                        <div v-else>
                                            <button type="button" class="btn btn-lg btn-danger btn-order-now"
                                                @click="removeOrder(concepto.id_concepto)">
                                                <UIcon name="i-material-symbols-remove-shopping-cart" class="w-5 h-5" />
                                                &nbsp;
                                                Quitar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section products" id="products" v-else-if="categoria == 'docentes'">
                        <div class="row row-eq-height row-eq-height-sm">
                            <div class="col">
                                <div class="package">
                                    <div class="package-side package-side-left">
                                        <div class="package-header">
                                            <h3 class="package-title">docente</h3>
                                            <div class="package-price">
                                                <div class="price">

                                                    <div class="price-amount">
                                                        Bs. 1
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
                                                    <li><b>Nacionalidad</b> amb</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package-footer package-side package-side-right">
                                        <div class="package-p">
                                            <div class="price">
                                                <div class="price-amount">
                                                    Bs. 1
                                                </div>
                                                <div class="price-cycle ">
                                                    Comisión
                                                </div>

                                            </div>
                                        </div>

                                        <a href="web-hosting/economyb51e.html?billingcycle=annually"
                                            class="btn btn-lg btn-primary btn-order-now  " id="product1-order-button">
                                            Pedir
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        No hay conceptos
                    </div> -->
                        <div v-for="(tipo, id_tipo) of tipos" :key="id_tipo">
                            <div class="section products" v-if="tipoActual == tipo.id_tipoConcepto">
                                <div class="row row-eq-height row-eq-height-sm" v-if="tipo.conceptos.length > 0">
                                    <div class="col" v-for="(concepto, id_con) of tipo.conceptos" :key="id_con">
                                        <div class="package">
                                            <div class="package-side package-side-left">
                                                <div class="package-header">
                                                    <h3 class="package-title">{{ concepto.concepto }}</h3>
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
                                                            <li><b>Unidad</b> {{ concepto.unidad.nombreUnidadMovimiento
                                                                }}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="package-footer package-side package-side-right">
                                                <button type="button" class="btn btn-lg btn-primary btn-order-now"
                                                    @click="addOrder(concepto.id, concepto.concepto, concepto.montoMinimo, 1)"
                                                    v-if="!isConceptoInCart(concepto.id)">
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

const categoria = ref('estudiantes')
const handleCategory = (category) => {
    categoria.value = category
}

// const conceptos = ref(null)
const tipos = ref(null)
const tipoActual = ref(0)
// const getConceptos = async () => {
//     try {
//         const { data, error } = await useApiFetch('/concepto')
//         conceptos.value = data.value
//     } catch (err) {
//         console.log(err);
//     }
// }
const getTiposConcepto = async () => {
    try {
        const data = await useApiFetch('/tipo-concepto')
        data.forEach((element) => {
            if (tipoActual.value == 0) {
                tipoActual.value = element.id_tipoConcepto
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
</style>