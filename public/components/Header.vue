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

                <NuxtLink class="logo hidden-sm hidden-xs hidden-md" to="/">
                    <img src="~/public/images/upea.png" title="logo" alt="logo" />
                    <h1
                        class="text-1xl md:text-2xl xl:text-3xl font-extrabold font-heading tracking-px-n leading-none text-center md:text-left">
                        &nbsp;&nbsp;PUP UPEA
                    </h1>
                </NuxtLink>
                <NuxtLink class="logo visible-xs visible-sm visible-md" to="/">
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
                    <li menuItemName="View Cart" class="nav-item-cart" :class="linkClass == 'cart' ? 'active' : ''">
                        <NuxtLink to="/convocatoria/cart" @click="setPanel('cart')">
                            <UIcon name="i-heroicons-shopping-cart-solid" class="w-4 h-4 bg-gray-400" />
                            <span class="item-text">Ver carrito
                            </span>
                            <span class="nav-badge badge badge-primary-faded"
                                :class="cartStore.data.length == 0 ? 'hidden' : ''">
                                <span>{{ cartStore.data.length }}</span>
                            </span>
                        </NuxtLink>
                    </li>
                    <!-- <li menuItemName="Currencies-480" class="dropdown  nav-item-currency"
                        id="Secondary_Navbar-Currencies-480">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="item-text">
                                USD
                            </span>
                            <b class="ls ls-caret"></b> </a>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="app-nav-menu" id="main-menu">
            <div class="container">
                <NuxtLink class="logo" to="/">
                    <img src="~/public/assets/admin/lagom2/assets/img/logo/logo_big.1001211479.svg" title="logo"
                        alt="logo" />
                </NuxtLink>
                <ul class="menu menu-primary" data-nav>
                    <li menuItemName="footer_extended.products" class="dropdown  nav-item-text-only"
                        :class="linkClass == 'inicio' ? 'active' : ''" id="Primary_Navbar-footer_extended.products">
                        <NuxtLink to="/" @click="setPanel('inicio')">
                            <span class="item-text">
                                Inicio
                            </span>
                            <!-- <b class="ls ls-caret"></b> -->
                        </NuxtLink>
                    </li>
                    <li menuItemName="Domains" class="dropdown  nav-item-text-only"
                        :class="linkClass == 'convocatoria' ? 'active' : ''" id="Primary_Navbar-Domains">
                        <NuxtLink to="/convocatoria" @click="setPanel('convocatoria')">
                            <span class="item-text">
                                Convocatoria
                            </span>
                            <!-- <b class="ls ls-caret"></b> -->
                        </NuxtLink>
                    </li>
                    <li menuItemName="Domains" class="dropdown  nav-item-text-only"
                        :class="linkClass == 'verificar' ? 'active' : ''">
                        <NuxtLink to="/verificar" @click="setPanel('verificar')">
                            <span class="item-text">
                                Verificar
                            </span>
                            <!-- <b class="ls ls-caret"></b> -->
                        </NuxtLink>
                    </li>
                    <!-- <li menuItemName="Website & Security" class="dropdown  nav-item-text-only"
                        :class="linkClass == 'info' ? 'active' : ''">
                        <NuxtLink to="/info" @click="setPanel('info')">
                            <span class="item-text">
                                Información
                            </span>
                            <b class="ls ls-caret"></b>
                        </NuxtLink>
                    </li> -->
                    <!-- <li menuItemName="Support" class="dropdown  nav-item-text-only"
                        :class="linkClass == 'soporte' ? 'active' : ''">
                        <NuxtLink class="dropdown-toggle" to="/soporte" data-toggle="dropdown"
                        <NuxtLink to="/soporte" @click="setPanel('soporte')">
                            <span class="item-text">
                                Soporte
                            </span>
                            <b class="ls ls-caret"></b>
                        </NuxtLink>
                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="Contact Us" class=" " id="Primary_Navbar-Support-Contact_Us">
                                <a href="#">
                                    <i class="fas fa-test ls ls-chat-clouds"></i>
                                    <span class="menu-item-content">Contact Us</span>
                                </a>
                            </li>

                            <li menuItemName="Divider-452" class="nav-divider " id="Primary_Navbar-Support-Divider-452">
                                -----
                            </li>

                            <li menuItemName="Network Status" class=" " id="Primary_Navbar-Support-Network_Status">
                                <a href="#">
                                    <i class="fas fa-test ls ls-spark"></i>
                                    <span class="menu-item-content">Network Status</span>
                                </a>
                            </li>

                            <li menuItemName="Knowledgebase" class=" " id="Primary_Navbar-Support-Knowledgebase">
                                <a href="#">
                                    <i class="fas fa-test ls ls-document-info"></i>
                                    <span class="menu-item-content">Knowledgebase</span>
                                </a>
                            </li>

                            <li menuItemName="News" class=" " id="Primary_Navbar-Support-News">
                                <a href="#">
                                    <i class="fas fa-test ls ls-document"></i>
                                    <span class="menu-item-content">News</span>
                                </a>
                            </li>

                        </ul>
                    </li> -->
                    <li class=" nav-item-btn is-right" id="Primary_Navbar-Register" v-if="!token">
                        <NuxtLink class="btn btn-outline btn-default" to="/register">
                            <span>Registrarse</span>
                        </NuxtLink>
                    </li>
                    <li class=" nav-item-btn is-right" id="Primary_Navbar-Login" v-if="!token">
                        <NuxtLink class="btn btn-primary" to="/login">
                            <span>Ingresar</span>
                        </NuxtLink>
                    </li>
                    <li class=" nav-item-btn is-right" id="Primary_Navbar-Dashboard" v-if="token">
                        <a class="btn btn-primary" href="#" @click="goAdmin" id="go-admin">
                            <span>Panel principal</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import Cookies from 'js-cookie'
import { ref } from 'vue'

const route = useRoute()

import { useInsStore } from '~/stores/inscripcion'
const cartStore = useInsStore()

const token = ref('')
const linkClass = ref('inicio')
const currentTheme = ref('modern');

const setPanel = (menu) => {
    linkClass.value = menu
}

const showHideMenu = () => {
    const menu = $('#layout-home')
    if ($(menu).hasClass('menu-open')) {
        $(menu).removeClass('menu-open')
    } else {
        $(menu).addClass('menu-open')
    }
}

const getCookie = async () => {
    token.value = await Cookies.get('token')
}

watch(
    () => route.path,
    (newPath) => {
        const ruta = newPath.split('/')
        if (ruta[1]) {
            if (ruta[2]) {
                linkClass.value = ruta[2]
            } else {
                linkClass.value = ruta[1]
            }
        } else {
            linkClass.value = 'inicio'
        }
    },
    { immediate: true } // Para que se ejecute al cargarse la página inicialmente
)

onMounted(() => {
    currentTheme.value = localStorage.getItem('theme') || 'modern';
    setTimeout(() => {
        getCookie()
        // const ruta = route.path.split('/')
        // if (ruta[1]) {
        //     if (ruta[2]) {
        //         linkClass.value = ruta[2]
        //     } else {
        //         linkClass.value = ruta[1]
        //     }
        // } else {
        //     linkClass.value = 'inicio'
        // }
    }, 250)
})

const goAdmin = () => {
    const btn = document.getElementById('go-admin')
    btn.classList.remove('btn-primary')
    btn.classList.add('btn-primary-faded')
    btn.innerHTML = `<div class="loader">
                        <div class="spinner">
                            <div class="rect1 bg-white"></div>
                            <div class="rect2 bg-white"></div>
                            <div class="rect3 bg-white"></div>
                            <div class="rect4 bg-white"></div>
                            <div class="rect5 bg-white"></div>
                        </div>
                    </div>`
    setTimeout(() => {
        return navigateTo('/admin')
    }, 250)
}
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
</script>

<style scoped>
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