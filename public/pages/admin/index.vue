<template>
    <div>
        <AdminTitle title="Panel principal" keyTitle="panel" />

        <div class="main-body">
            <div class="container">
                <div class="main-grid">
                    <div class="main-sidebar ">
                        <div class="sidebar-sticky" data-sidebar-sticky>
                            <div class="sidebar sidebar-primary">
                                <div class="panel panel-sidebar panel-sidebar-primary panel-client-details">
                                    <div class="panel-heading"></div>
                                    <div class="panel-body">
                                        <div class="client-avatar">
                                            <img src="~/public/images/upea.png"
                                                alt="Avatar" width="10">
                                        </div>
                                        <strong>{{ Role[user.data.role] }}</strong>
                                        <br>
                                        <em>{{ user.data.nombres }} {{ user.data.paterno }} {{ user.data.materno }}</em>
                                        <br>
                                        {{ user.data.numeroDocumento }} {{ user.data.expedido }}
                                        <br>
                                        {{ user.data.email }}
                                        <br>
                                        {{ user.data.username }}
                                        <br>
                                        {{ user.data.carrera ? user.data.carrera.nombre_completo : '- Sin carrera -' }}
                                    </div>
                                    <div class="panel-footer clearfix">
                                        <NuxtLink to="/admin/perfil" class="btn btn-success btn-sm btn-block">
                                            <i class="fas fa-pencil-alt"></i>
                                            Perfil
                                        </NuxtLink>
                                        <!-- <a href="#" class="btn btn-outline btn-sm btn-block" @click="toast.add({
                                        title: '¿Esta seguro de cerrar sesión?',
                                        actions,
                                        class: 'bg-orange-500 text-white',
                                        icon: 'i-heroicons-question-mark-circle',
                                        timeout: null
                                    })">
                                        Cerrar sesión
                                    </a> -->
                                        <a href="#" class="btn btn-outline btn-sm btn-block" @click="showLogout = true">
                                            Cerrar sesión
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar sidebar-secondary">
                                <!-- <div menuItemName="Client Contacts" class="panel panel-sidebar panel-client-contacts">
                                <div class="panel-heading">
                                    <h5 class="panel-title">
                                        <i class="far fa-folder"></i>
                                        &nbsp;Contacts
                                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                                    </h5>
                                </div>
                                <div class="list-group">
                                    <div menuItemName="No Contacts" class="list-group-item"
                                        id="Secondary_Sidebar-Client_Contacts-No_Contacts">No Contacts Found
                                    </div>
                                    <NuxtLink menuItemName="more" to="/admin" class="list-group-item contact-more"
                                        id="Secondary_Sidebar-Client_Contacts-more">
                                        <i class="fas fa-ticket ls ls-more"></i>
                                        More

                                    </NuxtLink>
                                </div>
                                <div class="panel-footer clearfix">
                                    <NuxtLink to="/admin" class="btn btn-default btn-sm btn-block">
                                        <i class="fas fa-plus"></i>
                                        New Contact...

                                    </NuxtLink>
                                </div>
                            </div> -->
                                <div menuItemName="Client Shortcuts" class="panel panel-sidebar ">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                            <i class="fas fa-bookmark"></i>
                                            &nbsp;Accesos rápidos
                                            <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                                        </h5>
                                    </div>
                                    <div class="list-group">
                                        <NuxtLink menuItemName="Order New Services" to="/admin/orden/nuevo"
                                            class="list-group-item font-medium"
                                            id="Secondary_Sidebar-Client_Shortcuts-Order_New_Services">
                                            <UIcon name="i-heroicons-shopping-cart-solid"
                                                class="w-4 h-4 mr-2 bg-blue-500" />
                                            Nuevo pedido
                                        </NuxtLink>

                                        <NuxtLink menuItemName="Register New Domain" to="/admin"
                                            class="list-group-item font-medium"
                                            id="Secondary_Sidebar-Client_Shortcuts-Register_New_Domain">
                                            <UIcon name="i-heroicons-check-circle-solid"
                                                class="w-4 h-4 mr-2 bg-blue-500" />
                                            Estado de pagos
                                        </NuxtLink>

                                        <a menuItemName="Logout" href="#" class="list-group-item font-medium"
                                            id="Secondary_Sidebar-Client_Shortcuts-Logout" @click="showLogout = true">
                                            <UIcon name="i-heroicons-arrow-left-end-on-rectangle-solid"
                                                class="w-4 h-4 mr-2 bg-blue-500" />
                                            Cerrar sesión
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-content">
                        <div class="tiles swiper-container">
                            <div class="row swiper-wrapper">
                                <div class="col-md-3 swiper-slide">
                                    <NuxtLink class="tile" to="/admin">
                                        <div class="tile-icon-absolute">
                                            <i class="ls ls-hosting"></i>
                                        </div>
                                        <div class="tile-stat">{{ ordenes.length }}</div>
                                        <div class="tile-title">Total</div>
                                    </NuxtLink>
                                </div>
                                <div class="col-md-3 swiper-slide">
                                    <NuxtLink class="tile" to="/admin">
                                        <div class="tile-icon-absolute">
                                            <i class="ls ls-dns"></i>
                                        </div>
                                        <div class="tile-stat">{{ ordenProcesado }}</div>
                                        <div class="tile-title">Pagados</div>
                                    </NuxtLink>
                                </div>
                                <div class="col-md-3 swiper-slide">
                                    <NuxtLink class="tile" to="/admin">
                                        <div class="tile-icon-absolute">
                                            <i class="icon-alert ls ls-exclamation-circle text-danger"></i>
                                        </div>
                                        <div class="tile-stat text-danger">{{ ordenPendiente }}</div>
                                        <div class="tile-title">Pendiente</div>
                                    </NuxtLink>
                                </div>
                                <div class="col-md-3 swiper-slide" v-if="user.data.role == 'admin'">
                                    <NuxtLink class="tile" to="/admin">
                                        <div class="tile-icon-absolute">
                                            <i class="ls ls-ticket-tag"></i>
                                        </div>
                                        <div class="tile-stat">1</div>
                                        <div class="tile-title">Total sistema</div>
                                    </NuxtLink>
                                </div>
                                <div class="col-md-3 swiper-slide" v-if="user.data.role == 'tec'">
                                    <NuxtLink class="tile" to="/admin">
                                        <div class="tile-icon-absolute">
                                            <i class="ls ls-ticket-tag"></i>
                                        </div>
                                        <div class="tile-stat">7</div>
                                        <div class="tile-title">Total carrera</div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <br>
                        <div class="client-home-panels row" data-panels-grid>
                            <div class="col-md-6 column-sizer"></div>
                            <div class=" col-md-12" data-panels-grid-item>
                                <div class="panel panel-default panel-accent- panel-active-services" id="servicesPanel">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                            <i class="ls ls-hosting"></i>
                                            Sus ordenes activos
                                        </h5>
                                    </div>
                                    <div class="list-group has-scroll" v-if="ordenes.length > 0">
                                        <div class="list-group-item" v-for="(order, id_orden) of ordenes"
                                            :key="id_orden">
                                            <div class="list-group-item-content">
                                                <div class="list-group-item-name">
                                                    <span>
                                                        <b v-for="(con, id) of order.conceptos" :key="id">
                                                            {{ con.concepto.concepto }} - Bs. {{ con.costo }}
                                                        </b>
                                                    </span>
                                                    <span class="text-domain" v-if="order.preinscripcion">
                                                        {{ order.preinscripcion.convocatoria.carrera.nombre_completo }}
                                                    </span>
                                                </div>
                                                <div class="list-group-item-status">
                                                    <span class="label" :class="EstadoLabel[order.estadoPago]"
                                                        :title="order.estadoPago">
                                                        {{ EstadoPagoName[order.estadoPago] }}
                                                    </span>
                                                </div>
                                                <div class="list-group-item-actions">
                                                    <NuxtLink :to="`/admin/orden/${order.idOrden}`"
                                                        class="btn btn-default btn-sm btn-view-details">
                                                        Ver detalle
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group has-scroll" v-else>
                                        <div class="list-group-item">
                                            <div class="list-group-item-content">
                                                <div class="list-group-item-name">
                                                    <span>
                                                        <b>No hay ordenes aun</b>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-6 " data-panels-grid-item>
                            <div menuItemName="Recent Support Tickets"
                                class="panel panel-default panel-accent- panel-support-tickets  " id="ticketsPanel">
                                <div class="panel-heading">
                                    <h5 class="panel-title">
                                        <i class="ls ls-ticket-tag"></i>
                                        Recent Support Tickets

                                    </h5>
                                </div>
                                <div class="list-group has-scroll ">
                                    <NuxtLink menuItemName="0" to="/admin" class="list-group-item"
                                        id="ClientAreaHomePagePanels-Recent_Support_Tickets-0">
                                        <span class="status-modern">
                                            <b>#SUZ-129485</b>
                                            - Praesent sed metus eu orci porta imperdiet et ut sapien. <label
                                                class="status" style="--status-color: #000000">Answered</label>
                                            <br />
                                            <small>Last Updated: 26/04/2022 (13:37)</small>
                                        </span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div> -->
                            <!-- <div class="col-md-6 " data-panels-grid-item>
                            <div menuItemName="Register a New Domain"
                                class="panel panel-default panel-accent-emerald panel-domain-register  "
                                id="registerDomainPanel">
                                <div class="panel-heading">
                                    <h5 class="panel-title">Register a New Domain
                                    </h5>
                                </div>
                                <div class="panel-body ">
                                    <form method="post" action="domainchecker.php">
                                        <input type="hidden" name="token"
                                            value="061361654fda306ba4785fe6dc505fb988b21f94" />
                                        <div class="input-group margin-10 m-0 px-2 pb-2">
                                            <input type="text" name="domain" placeholder="Find your new domain name"
                                                class="form-control" />
                                            <div class="input-group-btn input-group-append">
                                                <input type="submit" value="Register" class="btn btn-success" />
                                                <input type="submit" name="transfer" value="Transfer"
                                                    class="btn btn-default" />
                                            </div>
                                        </div>
                                    </form>
                                    <p>Transfer now to extend your domain by 1 year!*</p>
                                </div>
                            </div>
                        </div> -->
                            <!-- <div class="col-md-6 " data-panels-grid-item>
                            <div menuItemName="Recent News" class="panel panel-default panel-accent-   "
                                id="announcementsPanel">
                                <div class="panel-heading">
                                    <h5 class="panel-title">
                                        <i class="ls ls-text-cloud"></i>
                                        Recent News

                                    </h5>
                                </div>
                                <div class="list-group has-scroll ">
                                    <NuxtLink menuItemName="0" to="/admin" class="list-group-item"
                                        id="ClientAreaHomePagePanels-Recent_News-0">
                                        <span class="status-modern">
                                            Presentation Article Content<br />
                                            <span class="text-last-updated">13/12/2021</span>
                                        </span>
                                    </NuxtLink>
                                    <NuxtLink menuItemName="1" to="/admin" class="list-group-item"
                                        id="ClientAreaHomePagePanels-Recent_News-1">
                                        <span class="status-modern">
                                            Launches Remarkable New Range of Premium Dedicated Servers<br />
                                            <span class="text-last-updated">04/09/2018</span>
                                        </span>
                                    </NuxtLink>
                                    <NuxtLink menuItemName="2" to="/admin" class="list-group-item"
                                        id="ClientAreaHomePagePanels-Recent_News-2">
                                        <span class="status-modern">
                                            Internet Launches Dynamic Cloud Server<br />
                                            <span class="text-last-updated">19/06/2018</span>
                                        </span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <UModal v-model="showLogout">
                <UCard :ui="{ background: themeDark ? 'bg-black' : '' }">
                    <div class="space-y-2 text-center">
                        <h2 class="text-xl font-weight-bolder">¿ Seguro que quiere cerrar la sesión ?</h2>
                        <UIcon name="i-heroicons-question-mark-circle" class="w-24 h-24 text-yellow-500" />
                        <div class="p-1">
                            <button class="btn btn-info mr-3" @click="logout">Si, cerrar sesión</button>
                            <button class="btn btn-danger" @click="showLogout = false">Cancelar</button>
                        </div>
                    </div>
                </UCard>
            </UModal>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Panel principal | Admin'
})

import AdminTitle from '~/components/admin/AdminTitle.vue'
import Cookies from 'js-cookie'
import { useUserStore } from '~/stores/user'
import { onMounted, computed } from 'vue'
import { EstadoPago, EstadoPagoName, EstadoLabel } from '~/enums/EstadoPago.enum';

const user = useUserStore()
const toast = useToast()
const showLogout = ref(false)

const Role = ref({
    'admin': 'ADMINISTRADOR',
    'tec': 'TECNICO',
    'user': 'USUARIO',
    'guest': 'POSTULANTE'
})

const logout = () => {
    setTimeout(() => {
        Cookies.remove('token')
        sessionStorage.setItem('loading', true)
        sessionStorage.setItem('message', 'Sesión cerrada correctamente')
        sessionStorage.setItem('status', 'success')

        // return navigateTo('/login')
        location.reload()
    }, 250)
}

const ordenes = ref([])
const ordenProcesado = ref(0)
const ordenPendiente = ref(0)
const getOrders = async () => {
    try {
        const data = await useApiFetch('/orden')
        ordenes.value = data

        if (ordenes.value.length > 0) {
            for (const o of ordenes.value) {
                if (o.estadoPago == EstadoPago.PROCESADO) {
                    ordenProcesado.value++
                } else if (o.estadoPago == EstadoPago.EN_PROCESO) {
                    ordenPendiente.value++
                }
            }
        }
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    const logged = sessionStorage.getItem('logged')

    if (logged) {
        toast.add({
            title: 'Inicio de sesión exitoso',
            description: 'Bienvenido/a',
            class: 'bg-orange-500 text-white',
            icon: 'i-heroicons-check-circle',
        })
        sessionStorage.removeItem('logged')
    }

    setTimeout(() => {
        getOrders()
    }, 500)
})

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
</script>