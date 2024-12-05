<template>
    <div class="app-nav app-nav-condensed  sticky-navigation" data-site-navbar>
        <div class="app-nav-header " id="header">
            <div class="container">
                <button class="app-nav-toggle navbar-toggle" type="button" @click="showHideMenu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <NuxtLink class="logo hidden-sm hidden-xs hidden-md" to="/admin">
                    <img src="~/public/images/upea.png" title="logo" alt="logo" />
                    <h1
                        class="text-1xl md:text-2xl xl:text-3xl font-extrabold font-heading tracking-px-n leading-none text-center md:text-left">
                        &nbsp;&nbsp;PUP UPEA
                    </h1>
                </NuxtLink>
                <NuxtLink class="logo visible-xs visible-sm visible-md" to="/admin">
                    <img src="~/public/images/upea.png" title="logo" alt="logo" />
                </NuxtLink>
                <ul class="top-nav">
                    <li menuItemName="View Cart" class="  nav-item-cart" id="Secondary_Navbar-View_Cart">
                        <div class="theme-toggle-container">
                            <button @click="switchTheme" class="toggle-button"
                                :class="{ 'toggle-on': currentTheme === 'futuristic' }">
                                <!-- Iconos dentro del toggle, sol a la izquierda y luna a la derecha -->
                                <UIcon name="i-heroicons-sun-solid" class="icon sun-icon ml-1 bg-yellow-500" />
                                <UIcon name="i-heroicons-moon-solid" class="icon moon-icon mr-1 bg-blue-500" />
                                <!-- Círculo que se mueve entre los iconos -->
                                <div class="toggle-thumb"></div>
                            </button>
                        </div>
                    </li>
                    <li menuItemName="View Cart" class="  nav-item-cart" id="Secondary_Navbar-View_Cart">
                        <NuxtLink to="/admin/orden/cart" @click="linkClass = 'orden'">
                            <UIcon name="i-heroicons-shopping-cart-solid" class="w-4 h-4 bg-gray-400" />
                            <span class="item-text">Ver carrito
                            </span>
                            <span class="nav-badge badge badge-primary-faded"
                                :class="cartStore.data.length == 0 ? 'hidden' : ''">
                                <span>{{ cartStore.data.length }}</span>
                            </span>
                        </NuxtLink>
                    </li>
                    <li menuItemName="Notifications" class="dropdown  nav-item-icon-only nav-item-icon-only"
                        id="Secondary_Navbar-Notifications">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <div class="notification-icon-container">
                                <UIcon name="i-heroicons-bell-solid" class="w-4 h-4 bg-gray-400" />
                                <!-- <span class="nav-badge badge badge-primary badge-dot badge-icon">
                                    <span>NEW</span>
                                </span> -->
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll client-alerts">
                            <li menuItemName="Alert_0" class="" id="Secondary_Navbar-Notifications-Alert_0">
                                <a href="#" class="client-alerts-header">
                                    Notificaciones
                                </a>
                            </li>
                            <li menuItemName="Alert_1" class="" id="Secondary_Navbar-Notifications-Alert_1">
                                <a href="#">
                                    <i class="fas fa-ticket lm lm-info text-danger"></i>
                                    <div>You have 1 domain(s) expiring within the next 7 days.</div>
                                </a>
                            </li>
                            <li menuItemName="Alert_2" class="" id="Secondary_Navbar-Notifications-Alert_2">
                                <a href="#">
                                    <i class="fas fa-ticket lm lm-info text-info"></i>
                                    <div>You have 4 unpaid invoice(s). Pay them early for peace of mind.</div>
                                </a>
                            </li>
                            <li menuItemName="Alert_3" class="" id="Secondary_Navbar-Notifications-Alert_3">
                                <a href="#">
                                    <i class="fas fa-ticket lm lm-info text-warning"></i>
                                    <div>You have 4 overdue invoice(s) with a total balance due of $170.95 . Pay them
                                        now to
                                        avoid any interruptions in service.</div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li menuItemName="Account" class="dropdown my-account" id="Secondary_Navbar-Account">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <div class="client-avatar client-avatar-sm">
                                <img class=""
                                    src="~/public/images/upea.png"
                                    alt="Avatar">
                            </div>
                            <div class="active-client">
                                <span class="item-text">
                                    {{ user.data.nombres }}
                                    {{ user.data.paterno }}
                                    {{ user.data.materno }}
                                </span>
                                <span>{{ Role[user.data.role] }}</span>
                            </div>
                            <UIcon name="i-heroicons-chevron-down-16-solid" class="w-5 h-5 ml-2" />
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll dropdown-menu-right ">
                            <li class="dropdown-header dropdown-header--account">
                                <div class="client-avatar client-avatar-sm" style="max-width: auto!important;;">
                                    <img class=""
                                        src="~/public/assets/admin/lagom2/assets/img/logo/eb76e3210778a71baad903fcff70c215.jpg"
                                        alt="Avatar">
                                </div>
                                <div class="dropdown-header-info">
                                    <div class="dropdown-header-desc">
                                        {{ Role[user.data.role] }}
                                    </div>
                                    <div class="dropdown-header-title">
                                        {{ user.data.nombres }}
                                        {{ user.data.paterno }}
                                        {{ user.data.materno }}
                                    </div>
                                </div>
                            </li>
                            <li menuItemName="Divider-491" class="nav-divider "
                                id="Secondary_Navbar-Account-Divider-491">
                                -----
                            </li>
                            <li class="" id="">
                                <NuxtLink to="/admin/perfil">
                                    <UIcon name="i-heroicons-user-solid" class="w-4 h-4 mr-2 bg-gray-400" />
                                    <span class="menu-item-content">Tu perfil</span>
                                </NuxtLink>
                            </li>
                            <li class="" id="">
                                <NuxtLink to="/admin/password">
                                    <UIcon name="i-heroicons-lock-closed-solid" class="w-4 h-4 mr-2 bg-gray-400" />
                                    <span class="menu-item-content">Cambiar contraseña</span>
                                </NuxtLink>
                            </li>
                            <li class="" id="">
                                <NuxtLink to="/admin/security">
                                    <UIcon name="i-heroicons-shield-check-solid" class="w-4 h-4 mr-2 bg-gray-400" />
                                    <span class="menu-item-content">Ajustes de seguridad</span>
                                </NuxtLink>
                            </li>
                            <li class="" id="">
                                <NuxtLink to="/admin/emails">
                                    <UIcon name="i-heroicons-envelope-solid" class="w-4 h-4 mr-2 bg-gray-400" />
                                    <span class="menu-item-content">E-mails recibidos</span>
                                </NuxtLink>
                            </li>
                            <li menuItemName="Divider-491" class="nav-divider " id="">
                                -----
                            </li>
                            <li class="" id="Secondary_Navbar-Account-Logout">
                                <a href="#" @click="showLogout = true">
                                    <UIcon name="i-heroicons-arrow-left-end-on-rectangle-solid"
                                        class="w-4 h-4 mr-2 bg-gray-400" />
                                    <span class="menu-item-content">Salir</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-nav-menu" id="main-menu">
            <div class="container">
                <NuxtLink class="logo" to="/admin">
                    <img src="~/public/assets/admin/lagom2/assets/img/logo/logo_big.1001211479.svg" title="logo"
                        alt="logo" />
                </NuxtLink>
                <ul class="menu menu-primary" data-nav>
                    <li menuItemName="Dashboard" class="dropdown-mega nav-item-text-only"
                        :class="linkClass == 'panel' ? 'active' : ''">
                        <NuxtLink to="/admin" @click="showHideMenu('panel')">
                            <span class="item-text">
                                Panel principal
                            </span>
                        </NuxtLink>
                    </li>
                    <li menuItemName="Administración" class="dropdown nav-item-text-only menu-admin"
                        :class="linkClass == 'admin' ? 'active' : ''" v-if="isAdmin || isTec">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="item-text">
                                Administración
                            </span>
                            &nbsp;
                            <UIcon name="i-material-symbols-arrow-drop-down" class="w-5 h-5" />
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll menu-admin">
                            <li menuItemName="Convocatorias" class="" v-if="isAdmin">
                                <NuxtLink to="/admin/usuario" @click="clickMenu()">
                                    <UIcon name="i-heroicons-user-circle" class="w-5 h-5" />
                                    &nbsp;<span class="menu-item-content">Usuarios</span>
                                </NuxtLink>
                            </li>
                            <li menuItemName="Divider-527" class="nav-divider " v-if="isAdmin">
                                -----
                            </li>
                            <li menuItemName="Convocatorias" class="" v-if="isTec">
                                <NuxtLink to="/admin/convocatoria" @click="clickMenu()">
                                    <UIcon name="i-heroicons-clipboard" class="w-5 h-5" />
                                    &nbsp;<span class="menu-item-content">Convocatorias</span>
                                </NuxtLink>
                            </li>
                            <li menuItemName="Inscripciones" class="" v-if="isTec">
                                <NuxtLink to="/admin/inscripcion" @click="clickMenu()">
                                    <UIcon name="i-heroicons-list-bullet" class="w-5 h-5" />
                                    &nbsp;<span class="menu-item-content">Inscripciones</span>
                                    <!-- <span class='badge badge-info badge-right'>4</span> -->
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li menuItemName="Pedidos" class="nav-item-text-only" :class="linkClass == 'orden' ? 'active' : ''">
                        <NuxtLink to="/admin/orden" @click="showHideMenu('orden')">
                            <span class="item-text">Pedidos</span>
                        </NuxtLink>
                    </li>
                    <!-- <li menuItemName="Support" class="dropdown nav-item-text-only">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="item-text">Support
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll">
                            <li menuItemName="Open Ticket" class=" ">
                                <NuxtLink to="/admin/orden/nuevo" @click="showHideMenu()">
                                    <i class="fas fa-test ls ls-new-window"></i>
                                    <span class="menu-item-content">Nuevo pedido</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li> -->
                    <li menuItemName="Store" class="dropdown is-right  dropdown-mega nav-item-text-only"
                        id="Primary_Navbar-Store">
                        <a href="#" @click="goHome" id="go-home">
                            <span class="item-text">
                                Ir a inicio
                            </span>
                            <!-- <b class="ls ls-caret"></b> -->
                        </a>
                        <!-- <div class="dropdown-menu dropdown-lazy has-scroll  ">
                            <div class="dropdown-menu-body">
                                <div class="dropdown-menu-content">
                                    <div class="dropdown-menu-parent">
                                        <div class="nav-header">Services
                                        </div>
                                        <div class="dropdown-menu-cols">
                                            <ul class="dropdown-menu-list">
                                                <li menuItemName="Web Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Web_Hosting">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        Web Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="Reseller Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Reseller_Hosting">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        Reseller Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="VPS Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-VPS_Hosting">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        VPS Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="Dedicated Servers" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Dedicated_Servers">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        Dedicated Servers

                                                    </a>
                                                </li>
                                            </ul>
                                            <ul class="dropdown-menu-list"></ul>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu-parent">
                                        <div class="nav-header">Website & Security
                                        </div>
                                        <div class="dropdown-menu-cols">
                                            <ul class="dropdown-menu-list">
                                                <li menuItemName="symantec" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-symantec">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-padlock"></i>
                                                        SSL Certificates

                                                    </a>
                                                </li>
                                                <li menuItemName="weebly" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-weebly">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-dashboard"></i>
                                                        Website Builder

                                                    </a>
                                                </li>
                                                <li menuItemName="sitelock" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-sitelock">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-shield"></i>
                                                        Website Security

                                                    </a>
                                                </li>
                                                <li menuItemName="spamexperts" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-spamexperts">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-envelope"></i>
                                                        E-mail Services

                                                    </a>
                                                </li>
                                                <li menuItemName="codeguard" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-codeguard">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-refresh"></i>
                                                        Website Backup
                                                    </a>
                                                </li>
                                                <li menuItemName="marketgoo" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-marketgoo">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-search"></i>
                                                        SEO Tools

                                                    </a>
                                                </li>
                                                <li menuItemName="ox" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-ox">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-envelope"></i>
                                                        Professional Email

                                                    </a>
                                                </li>
                                                <li menuItemName="siteBuilder" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-siteBuilder">
                                                    <a href="#">
                                                        <i class="fas fa-ticket ls ls-sitebuilder"></i>
                                                        Site Builder

                                                    </a>
                                                </li>
                                            </ul>
                                            <ul class="dropdown-menu-list"></ul>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu-parent">
                                        <div class="nav-header">Domains
                                        </div>
                                        <div class="dropdown-menu-cols">
                                            <ul class="dropdown-menu-list">
                                                <li menuItemName="Domain Renewals" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Domain_Renewals">
                                                    <a href="#">
                                                        <i class="fas fa-test ls ls-refresh"></i>
                                                        <span class="menu-item-content">
                                                            <span class="menu-item-title">Domain Renewals</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li menuItemName="Register a New Domain" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Register_a_New_Domain">
                                                    <a href="#">
                                                        <i class="fas fa-test ls ls-ticket-tag"></i>
                                                        <span class="menu-item-content">
                                                            <span class="menu-item-title">Register a New Domain</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li menuItemName="Transfer Domains to Us" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Transfer_Domains_to_Us">
                                                    <a href="#">
                                                        <i class="fas fa-test ls ls-transfer"></i>
                                                        <span class="menu-item-content">
                                                            <span class="menu-item-title">Transfer Domains to Us</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown-menu-sidebar">
                                    <div class="dropdown-menu-sidebar-content">
                                        <div class="dropdown-menu-sidebar-graphic">
                                            <img class="lazyload hidden"
                                                data-src="~/public/assets/admin/lagom2/assets/img/page-manager/logo-wide.svg"
                                                alt="logo-wide.svg" />
                                        </div>
                                        <div class="dropdown-menu-sidebar-desc">Discover our wide range of hosting
                                            products and services designed to power your online presence with
                                            reliability and performance.</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </li>
                    <li menuItemName="Open Ticket" class=" nav-item-btn is-right" id="Primary_Navbar-Open_Ticket">
                        <nuxtLink class="btn btn-primary" to="/admin/orden/nuevo" @click="showHideMenu()">
                            <span>Nuevo pedido</span>
                        </nuxtLink>
                    </li>
                </ul>
            </div>
            <UModal v-model="showLogout">
                <UCard :ui="{ background: themeDark ? 'bg-black' : '' }">
                    <div class="space-y-2 text-center">
                        <h2 class="text-xl font-weight-bolder">¿ Seguro que quiere cerrar la sesión ?</h2>
                        <UIcon name="i-heroicons-question-mark-circle" class="w-24 h-24 text-yellow-500" />
                        <div class="p-1">
                            <button class="btn btn-info mr-3" @click="logout">Cerrar sesión</button>
                            <button class="btn btn-danger" @click="showLogout = false">Cancelar</button>
                        </div>
                    </div>
                </UCard>
            </UModal>
        </div>
    </div>
</template>

<script setup>
import Cookies from 'js-cookie'
import { ref, onMounted, computed, watch } from 'vue';
import { useUserStore } from '~/stores/user'
const user = useUserStore()
import { useRoute } from 'vue-router'

const toast = useToast()
const showLogout = ref(false)
const currentTheme = ref('modern');

const actions = ref([{
    label: 'Cerrar sesión',
    class: 'bg-orange-500 text-white',
    click: () => {
        Cookies.remove('token')
        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', 'Sesión cerrada correctamente')
        sessionStorage.setItem('status', 'success')

        return navigateTo('/login')
    }
}])

const clickMenu = () => {
    showHideMenu('admin')
    $('.menu-admin').removeClass('show')
}

const logout = (() => {
    setTimeout(() => {
        Cookies.remove('token')
        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', 'Sesión cerrada correctamente')
        sessionStorage.setItem('status', 'success')

        // return navigateTo('/login')
        location.reload()
    }, 250)
})

const linkClass = ref('panel')

const goHome = () => {
    const btn = document.getElementById('go-home')
    btn.innerHTML = `<div class="loader">
                        <div class="spinner">
                            <div class="rect1"></div>
                            <div class="rect2"></div>
                            <div class="rect3"></div>
                            <div class="rect4"></div>
                            <div class="rect5"></div>
                        </div>
                    </div>`
    setTimeout(() => {
        return navigateTo('/')
    }, 250)
}

const showHideMenu = (opt = null) => {
    linkClass.value = opt

    const menu = $('#layout-main')
    if ($(menu).hasClass('menu-open')) {
        $(menu).removeClass('menu-open')
        $('body').removeClass('menu-open')
    } else {
        $(menu).addClass('menu-open')
        $('body').addClass('menu-open')
    }
}

const Role = ref({
    'admin': 'ADMINISTRADOR',
    'tec': 'TECNICO',
    'user': 'USUARIO',
    'guest': 'POSTULANTE'
})

const switchTheme = () => {
    currentTheme.value = currentTheme.value === 'modern' ? 'futuristic' : 'modern';

    // Cambiar el tema en el DOM
    const links = document.querySelectorAll('link[rel="stylesheet"]');

    if (currentTheme.value === 'futuristic') {
        // Cambiar a tema oscuro
        links[0].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/minified.css';
        links[1].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/colors/default.css';
    } else {
        // Cambiar a tema claro
        links[0].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/minified.css';
        links[1].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/colors/default.css';
    }

    // Guardar el tema en localStorage
    localStorage.setItem('theme', currentTheme.value);
};

import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

const themeDark = computed(() => {
    if (process.client) {
        if (localStorage.theme == 'futuristic') {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
})

const isAdmin = computed(() => user.data.role === 'admin');
const isTec = computed(() => user.data.role === 'tec' || user.data.role === 'admin');

const route = useRoute()
watch(
    () => route.path,
    (newPath) => {
        const ruta = newPath.split('/')

        if (ruta[2]) {
            if (['usuario', 'convocatoria', 'inscripcion'].includes(ruta[2])) {
                linkClass.value = 'admin'
            } else {
                linkClass.value = ruta[2]
            }
        } else {
            linkClass.value = 'panel'
        }
    },
    { immediate: true } // Para ejecutar el watch al cargarse la página
)
onMounted(() => {
    currentTheme.value = localStorage.getItem('theme') || 'modern';
    setTimeout(() => {
        // const ruta = route.path.split('/')

        // if (ruta[2]) {
        //     if (ruta[2] == 'usuario' || ruta[2] == 'convocatoria' || ruta[2] == 'inscripcion') {
        //         linkClass.value = 'admin'
        //     } else {
        //         linkClass.value = ruta[2]
        //     }
        // } else {
        //     linkClass.value = 'panel'
        // }
    }, 250)
});
</script>

<style scoped>
/* Centrando la notificación con CSS */
.nuxt-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.theme-toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-button {
    width: 50px;
    /* Ajustado para los iconos */
    height: 25px;
    background-color: #ddd;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    transition: background-color 0.3s ease;
}

.icon {
    font-size: .85em;
    pointer-events: none;
    /* Evitar que los iconos sean clicables */
}

.toggle-thumb {
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
    transition: left 0.3s ease;
}

.toggle-on {
    background-color: #1062fe;
    /* Color cuando está activo (tema oscuro) */
}

.toggle-on .toggle-thumb {
    left: 30px;
    /* Posición del thumb cuando está en modo oscuro */
}
</style>