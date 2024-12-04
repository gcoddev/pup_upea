<template>
    <div class="main-body">
        <div class="container">
            <div class="main-grid">
                <div class="main-content main-content-m-w" v-if="cartStore.data.length > 0">
                    <div class="section">
                        <div class="alert alert-warning mb-4" v-if="ip">
                            Por motivos de seguridad guardaremos su IP actual,
                            su IP (<strong>{{ ip }}</strong>) ha sido guardada en nuestra base de datos.
                        </div>
                        <div class="section-body">
                            <div>
                                <div class="panel panel-cart">
                                    <div class="panel-heading cart-heading">
                                        <div class="row">
                                            <div class="col-6">
                                                Conecepto/producto
                                            </div>
                                            <div class="col">
                                                Gestión
                                            </div>
                                            <div class="col">
                                                Precio
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body cart-item" v-for="(orden, id_orden) of cartStore.data"
                                        :key="id_orden">
                                        <div class="row">
                                            <div class="prod-name col-6">
                                                <div class="cart-item-title">
                                                    <span class="cart-item-title-main">{{ orden.carrera }}</span>
                                                    <span class="cart-item-title-small">{{ concepto.concepto }}</span>
                                                </div>
                                            </div>
                                            <div class="prod-price col" data-content="Precio">
                                                <span class="cart-item-price">
                                                    <span>{{ orden.periodo }} - {{ orden.gestion }}</span>
                                                </span>
                                            </div>
                                            <div class="prod-price col" data-content="Precio">
                                                <span class="cart-item-price">
                                                    <span>Bs. {{ orden.costo }}</span>
                                                    <!-- <span class="renewal cycle" name="gcdev.infoPricing">
                                                        Comisión
                                                        <span class="renewal-price cycle">Bs. de {{ orden.comision }}</span>
                                                    </span> -->
                                                </span>
                                            </div>
                                            <div class="prod-actions">
                                                <div class="cart-item-actions">
                                                    <!-- <a href="/cart.php?a=confdomains" data-toggle="tooltip"
                                                        data-html="true" data-original-title="Editar" title=""
                                                        class="btn btn-icon">
                                                        <i class="lm lm-edit"></i>
                                                    </a> -->
                                                    <button type="button" class="btn btn-icon" data-toggle="tooltip"
                                                        data-html="true" data-original-title=" Eliminar"
                                                        @click="vaciarCarrito(orden.id)">
                                                        <UIcon name="i-material-symbols-delete-sweep" class="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer d-flex space-between">
                                        <div class="content ">
                                            <NuxtLink to="/convocatoria" class="btn btn-default btn-sm">
                                                <UIcon name="i-material-symbols-reply" class="w-4 h-4" />
                                                &nbsp; Seguir Comprando
                                            </NuxtLink>
                                        </div>
                                        <div class="content">
                                            <button type="button" class="btn btn-default btn-sm"
                                                @click="vaciarCarrito(0)">
                                                <UIcon name="i-material-symbols-shopping-cart-off" class="w-4 h-4" />
                                                &nbsp; Vaciar Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="section">
                            <div class="section-header">
                                <h2 class="section-title">Detalles del pago</h2>
                            </div>
                            <div class="section-body">
                                <div class="panel-group panel-group-condensed m-b-0" data-inputs-container="">
                                    <div class="panel panel-check checked" data-virtual-input="">
                                        <div class="panel-collapse show" data-input-collapse="" role="tabpanel">
                                            <div class="panel-body social-wide">
                                                <h2>Información Personal</h2>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group ">
                                                            <label for="numeroDocumento" class="label-required">
                                                                Cédula de identidad
                                                            </label>
                                                            <input type="text" id="numeroDocumento" class="form-control"
                                                                placeholder="CI" v-model="numeroDocumento"
                                                                @keyup="searchCI">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="form-group ">
                                                            <label for="inputExpedido" class="label-required">
                                                                Expedición
                                                            </label>
                                                            <select name="country" id="inputExpedido"
                                                                class="form-control" v-model="expedido"
                                                                @change="searchCI">
                                                                <option value="">
                                                                    -
                                                                </option>
                                                                <option value="LP">
                                                                    La Paz
                                                                </option>
                                                                <option value="OR">
                                                                    Oruro
                                                                </option>
                                                                <option value="PT">
                                                                    Potosí
                                                                </option>
                                                                <option value="PD">
                                                                    Pando
                                                                </option>
                                                                <option value="BN">
                                                                    Beni
                                                                </option>
                                                                <option value="SCZ">
                                                                    Santa Cruz
                                                                </option>
                                                                <option value="CBBA">
                                                                    Cochabamba
                                                                </option>
                                                                <option value="CH">
                                                                    Chiquisaca
                                                                </option>
                                                                <option value="TJ">
                                                                    Tarija
                                                                </option>
                                                                <option value="PERU">
                                                                    Perú
                                                                </option>
                                                                <option value="ITA">
                                                                    ITA
                                                                </option>
                                                                <option value="OTRO">
                                                                    Otro
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group ">
                                                            <label for="inputFecha_nac" class="label-required">
                                                                Fecha de nacimiento
                                                            </label>
                                                            <input type="date" name="fecha_nac" id="inputFecha_nac"
                                                                class="form-control" v-model="fecha_nac"
                                                                @change="searchCI">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group ">
                                                            <label for="inputNombres" class="label-required">
                                                                Nombres
                                                            </label>
                                                            <input type="text" name="nombres" id="inputNombres"
                                                                class="form-control" placeholder="Nombres"
                                                                v-model="nombres" autocomplete="off" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group ">
                                                            <label for="inputPaterno" class="label-required">
                                                                Apellido paterno
                                                            </label>
                                                            <input type="text" name="paterno" id="inputPaterno"
                                                                class="form-control" placeholder="Apellido paterno"
                                                                v-model="paterno" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group ">
                                                            <label for="inputMaterno" class="label-required">
                                                                Apellido materno
                                                            </label>
                                                            <input type="text" name="materno" id="inputMaterno"
                                                                class="form-control" placeholder="Apellido materno"
                                                                v-model="materno" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section" id="paymentGatewaysDetails">
                            <div class="section-header">
                                <h2 class="section-title">Método de Pago</h2>
                            </div>
                            <div class="section-body">
                                <div>
                                    <div class="section">
                                        <div class="section-body">
                                            <div class="panel-group panel-group-condensed m-b-0 is-selected">
                                                <div class="panel panel-check checked">
                                                    <div class="panel-heading check">
                                                        <label for="radio-qr" @click="setMethod('qr')">
                                                            <div class="radio-styled"
                                                                :class="buy_method == 'qr' ? 'checked' : ''">
                                                                <input type="radio" id="radio-qr" name="pay-method"
                                                                    value="qr" class="icheck-control payment-methods"
                                                                    v-model="buy_method">
                                                            </div>
                                                            <div class="check-content">
                                                                <span>Pago con código QR • Billeteras Móviles (Yape,
                                                                    YoloPago, etc)</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="panel panel-check checked" data-virtual-input="">
                                                    <div class="panel-heading check">
                                                        <label for="radio-dep" @click="setMethod('dep')">
                                                            <div class="radio-styled"
                                                                :class="buy_method == 'dep' ? 'checked' : ''">
                                                                <input type="radio" id="radio-qr" name="pay-method"
                                                                    value="dep" class="icheck-control payment-methods"
                                                                    v-model="buy_method">
                                                            </div>
                                                            <div class="check-content">
                                                                <span>Depósito / Transferencia bancaria</span>
                                                            </div>
                                                            <span class="check-icon"
                                                                data-gateway-icon-name="banktransfer">
                                                                <svg class="svg-icon "
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                                                    y="0px" width="23px" height="24px"
                                                                    viewBox="0 0 23 24"
                                                                    style="enable-background:new 0 0 23 24;"
                                                                    xml:space="preserve">
                                                                    <path fill="#0C70DE" d="M22.8,6.6L12.3,0.1C12.2,0,12.1,0,12,0h-1c-0.1,0-0.2,0-0.3,0.1L0.2,6.6C0.1,6.7,0,6.8,0,7v1.5
C0,8.8,0.2,9,0.5,9h22C22.8,9,23,8.8,23,8.5V7C23,6.8,22.9,6.7,22.8,6.6z"></path>
                                                                    <path fill="#0C70DE" d="M21.4,21.1C21.3,21.1,21.1,21,21,21h-1v-9.5c0-0.3-0.2-0.5-0.5-0.5h-2c-0.3,0-0.5,0.2-0.5,0.5V21h-4v-9.5
c0-0.3-0.2-0.5-0.5-0.5h-2c-0.3,0-0.5,0.2-0.5,0.5V21H6v-9.5C6,11.2,5.8,11,5.5,11h-2C3.2,11,3,11.2,3,11.5V21H2
c-0.1,0-0.3,0.1-0.4,0.1l-1.5,1.5C0.1,22.7,0,22.9,0,23v0.5C0,23.8,0.2,24,0.5,24h22c0.3,0,0.5-0.2,0.5-0.5V23
c0-0.1-0.1-0.3-0.1-0.4L21.4,21.1z"></path>
                                                                </svg> </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div
                                                class="alert alert-lagom alert-danger text-center gateway-errors m-t-5x">
                                                {{ buy_method }}<br>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section" v-if="buy_method == 'dep'">
                            <div class="section-body">
                                <div class="panel-group panel-group-condensed m-b-0" data-inputs-container="">
                                    <div class="panel panel-check checked" data-virtual-input="">
                                        <div class="panel-collapse show" data-input-collapse="" role="tabpanel">
                                            <div class="panel-body social-wide">
                                                <h2>Información del deposito</h2>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group ">
                                                            <label for="nro_deposito" class="label-required">
                                                                Numero de deposito
                                                            </label>
                                                            <input type="text" id="nro_deposito" class="form-control"
                                                                placeholder="CI" v-model="nro_deposito"
                                                                @keyup="searchDep">
                                                        </div>
                                                        <div class="form-group d-flex justify-content-center">
                                                            <input type="checkbox" id="uninet" class="form-check-input"
                                                                v-model="uninet" @change="searchDep">
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <label for="uninet" class="form-check-label">
                                                                Uninet
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="form-group ">
                                                            <label for="dep_monto" class="label-required">
                                                                Monto
                                                            </label>
                                                            <input type="number" id="dep_monto" class="form-control"
                                                                placeholder="Monto" v-model="dep_monto"
                                                                @keyup="searchDep" @change="searchDep">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group ">
                                                            <label for="dep_fecha" class="label-required">
                                                                Fecha del deposito
                                                            </label>
                                                            <input type="date" name="dep_fecha" id="dep_fecha"
                                                                class="form-control" v-model="dep_fecha"
                                                                @change="searchDep">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="alert text-center m-t-5x alert-success" v-if="dep_valid">
                                                    DEPOSITO VALIDO
                                                </div>
                                                <div class="alert text-center m-t-5x alert-danger"
                                                    v-if="!dep_valid && depInputs">
                                                    DEPOSITO NO VALIDO.<br>
                                                    Si es un error consulte con la unidad de tesorería.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="section-header">
                                <h2 class="section-title">Notas Adicionales</h2>
                            </div>
                            <div class="section-body">
                                <textarea name="notes" class="form-control" rows="4"
                                    placeholder="Puede introducir aquí cualquier nota o información adicional que desee incluir en su pedido..."
                                    v-model="info_nota"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content  main-content-m-w" v-else>
                    <div class="message message-no-data">
                        <div class="message-image">
                            <svg class="svg-icon " xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none"
                                viewBox="0 0 64 64">
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m16 47.8-6-3.5V38l6 3.5v6.3Z"></path>
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M35.5 3 32 1l-3.5 2m19.9 7.4-5.8-3.3M59 20.6v-4l-3.5-2M59 35.3v-6.6m-3.5 20.7 3.5-2v-4M42.6 56.9l5.8-3.3M28.5 61l3.5 2 3.5-2m-19.9-7.4 5.8 3.3M5 43.4v4l3.5 2M5 28.7v6.6m3.5-20.7-3.5 2v4M21.4 7.1l-5.8 3.4">
                                </path>
                            </svg>
                        </div>
                        <h6 class="message-title">El carrito esta vacio</h6>
                        <div class="message-action">
                            <NuxtLink class="btn btn-primary" to="/convocatoria">
                                Comenzar
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="main-sidebar main-sidebar-lg">
                    <div class="sidebar-sticky sidebar-sticky-summary" data-sidebar-sticky="" style="top: 135px;">
                        <div class="panel panel-summary panel-summary-primary order-summary" id="orderSummary">
                            <div class="loader" id="orderSummaryLoader" style="display: none;">

                                <div class="spinner spinner-sm">
                                    <div class="rect1"></div>
                                    <div class="rect2"></div>
                                    <div class="rect3"></div>
                                    <div class="rect4"></div>
                                    <div class="rect5"></div>
                                </div>
                            </div>
                            <div class="panel-heading">
                                <h2 class="panel-title">Resumen de pedido</h2>
                            </div>
                            <div class="panel-body">
                                <div class="summary-content content" v-if="cartStore.data.length > 0">
                                    <ul class="summary-list" id="recurring">
                                        <li class="list-item faded">Conceptos</li>
                                        <li class="list-item" id="recurringMonthly"
                                            v-for="(orden, id_orden) of cartStore.data" :key="id_orden">
                                            <span class="item-name mt-2">{{ concepto.concepto }}</span>
                                            <span class="item-value">Bs. {{ orden.costo.toFixed(2) }}</span>
                                        </li>
                                    </ul>
                                    <ul class="summary-list">
                                        <li class="list-item">
                                            <span class="item-name">Subtotal</span>
                                            <span class="item-value">Bs. {{ subTotal.toFixed(2) }} </span>
                                        </li>
                                    </ul>
                                    <ul class="summary-list">
                                        <li class="list-item">
                                            <span class="item-name">Comisión</span>
                                            <span class="item-value">Bs. {{ comision.toFixed(2) }} </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="summary-content content" v-else>
                                    <ul class="summary-list">
                                        <li class="list-item">
                                            <span class="item-name">Concepto</span>
                                            <span class="item-value">Vacio</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="price price-left-h">
                                    <span class="price-total">Monto total</span>
                                    <div class="price-amount amt" id="totalDueToday">
                                        Bs. {{ subTotal > 0 ? total.toFixed(2) : '0.00' }}
                                    </div>
                                </div>
                                <div class="summary-actions">
                                    <button type="button" class="btn btn-lg btn-primary btn-checkout" data-btn-loader=""
                                        v-if="cartStore.data.length > 0 && confirmOrder" @click="submitOrder()">
                                        <span>
                                            <UIcon name="i-mdi-share" class="w-5 h-5" />
                                            Realizar pedido
                                        </span>
                                        <div class="loader loader-button hidden">
                                            <div class="spinner spinner-sm">
                                                <div class="rect1"></div>
                                                <div class="rect2"></div>
                                                <div class="rect3"></div>
                                                <div class="rect4"></div>
                                                <div class="rect5"></div>
                                            </div>
                                        </div>
                                    </button>
                                    <button type="button" class="btn btn-lg btn-primary btn-checkout disabled" disabled
                                        v-else>
                                        <span>
                                            <UIcon name="i-mdi-share" class="w-5 h-5" />
                                            Realizar pedido
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="order-checkbox">
                            <div class="checkbox m-t-0 m-b-1x">
                                <label class="form-check-label">
                                    <div class="checkbox-styled" :class="confirm_check ? 'checked' : ''">
                                        <input class="form-check-input" type="checkbox" v-model="confirm_check"
                                            id="checkConfirm">
                                    </div>
                                    <span>Estoy seguro/a de realizar el pedido</span>
                                </label>
                            </div>
                            <div class="alert alert-lagom alert-xs alert-danger m-b-2x hidden">
                                <div class="alert-body">
                                    Debe confirmar su pedido
                                </div>
                            </div>
                            <div class="alert alert-lago alert-danger text-center gateway-errors m-t-5x"
                                v-if="alertInscripcion">
                                Aun tiene una preinscripción pendiente.<br>
                                Inscrito el
                                <DateFormat :date="alertInscripcion" />
                                <br>
                                Debe anularse o proceder antes de continuar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-summary order-summary-mob" id="orderSummary" data-fixed-actions="" href="#orderSummary">
                <button type="button" class="btn btn-lg btn-primary-faded btn-checkout" data-btn-loader=""
                    id="checkout">
                    <span><i class="ls ls-share"></i>Comprar</span>
                    <div class="loader loader-button hidden">
                        <div class="spinner spinner-sm">
                            <div class="rect1"></div>
                            <div class="rect2"></div>
                            <div class="rect3"></div>
                            <div class="rect4"></div>
                            <div class="rect5"></div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    // title: 'Carrito | Admin',
    layout: 'home'
})

useHead({
    title: 'Carrito'
})

import { useInsStore } from '~/stores/inscripcion'
import { computed, onMounted, ref } from 'vue'
import DateFormat from '~/components/admin/administracion/DateFormat.vue';
const { $swal } = useNuxtApp()


const cartStore = useInsStore()
const comision = ref(1)

const subTotal = computed(() => {
    return cartStore.data.reduce((acc, orden) => acc + orden.costo, 0);
});
const total = computed(() => {
    const subTotal = cartStore.data.reduce((acc, orden) => acc + orden.costo, 0);
    return subTotal + comision.value
});

const confirm_check = ref(false)
const vaciarCarrito = (idOrden) => {
    if (idOrden == 0) {
        $swal({
            title: '¿Estás seguro de vaciar?',
            text: 'Esta acción eliminará todos los pedidos',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        }).then((result) => {
            if (result.isConfirmed) {
                cartStore.reset()
            }
        })
    } else {
        $swal({
            title: '¿Estás seguro de eliminar el pedido?',
            text: 'Esta acción eliminará el pedido',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        }).then((result) => {
            if (result.isConfirmed) {
                cartStore.remove(idOrden)
            }
        })
    }
}

const setMethod = (method) => {
    buy_method.value = method
    confirm_check.value = false
}
const confirmOrder = computed(() => {
    let method = true
    if (buy_method.value == 'dep') {
        if (dep_valid.value) {
            method = true
        } else {
            method = false
        }
    }

    if (
        method &&
        (
            confirm_check.value &&
            cartStore.data.length > 0 &&
            subTotal.value > 0 &&
            total.value > 0 &&
            comision.value &&
            numeroDocumento.value &&
            expedido.value &&
            fecha_nac.value &&
            nombres.value &&
            paterno.value &&
            materno.value
        )
    ) {
        return true
    } else {
        return false
    }
})

const numeroDocumento = ref('')
const expedido = ref('')
const fecha_nac = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const idPersona = ref('')
const info_nota = ref('')
const id_concepto = ref(3)
const concepto = ref({})
const searchCI = async () => {
    if (numeroDocumento.value && expedido.value && fecha_nac.value) {
        try {
            const data = await useApiFetch(`/persona/${numeroDocumento.value}/${expedido.value}/${fecha_nac.value}`)

            if (data) {
                nombres.value = data.nombres
                paterno.value = data.paterno
                materno.value = data.materno
                idPersona.value = data.idPersona

                confirm_check.value = false

                $('#inputNombres').attr('disabled', 'disabled')
                $('#inputPaterno').attr('disabled', 'disabled')
                $('#inputMaterno').attr('disabled', 'disabled')

                verifyInscripcion()
            } else {
                nombres.value = ''
                paterno.value = ''
                materno.value = ''
                idPersona.value = ''

                confirm_check.value = false

                $('#inputNombres').removeAttr('disabled')
                $('#inputPaterno').removeAttr('disabled')
                $('#inputMaterno').removeAttr('disabled')

                verifyInscripcion()
            }
        } catch (err) {
            nombres.value = ''
            paterno.value = ''
            materno.value = ''
            idPersona.value = ''

            confirm_check.value = false
            $('#inputNombres').removeAttr('disabled')
            $('#inputPaterno').removeAttr('disabled')
            $('#inputMaterno').removeAttr('disabled')
        }
    }
}
const alertInscripcion = ref('')
const verifyInscripcion = async () => {
    try {
        const data = await useApiFetch(`/preinscripcion/persona/${idPersona.value}`)

        if (data) {
            alertInscripcion.value = data.fecha
            $('#checkConfirm').attr('disabled', 'disabled')
        } else {
            alertInscripcion.value = ''
            $('#checkConfirm').removeAttr('disabled')
        }
    } catch (e) {
        alertInscripcion.value = ''
        $('#checkConfirm').removeAttr('disabled')
    }
}


const nro_deposito = ref('')
const uninet = ref('')
const dep_monto = ref('')
const dep_fecha = ref('')
const dep_valid = ref(false)
const depInputs = computed(() => {
    if (nro_deposito.value && dep_monto.value && dep_fecha.value) {
        return true
    } else {
        return false
    }
})
const searchDep = () => {
    if (nro_deposito.value == '123' && dep_monto.value == subTotal.value && dep_fecha.value) {
        dep_valid.value = true
        confirm_check.value = false
    } else {
        dep_valid.value = false
        confirm_check.value = false
    }
}

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

const ip = ref('')
const getIp = async () => {
    try {
        const data = await useApiFetch('', {}, 'https://api.ipify.org?format=json');
        ip.value = data.ip;
    } catch (e) {
        console.log('Error obteniendo la IP:', e);
    }
}
const getConcepto = async () => {
    try {
        const data = await useApiFetch(`/concepto/${id_concepto.value}`)
        concepto.value = data
    } catch (err) {
        console.log(err)
    }
}

const buy_method = ref('qr')

const submitOrder = () => {
    $swal({
        title: '¿Esta seguro/a de realizar el pedido?',
        text: 'Esta acción no se puede deshacer',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, ordenar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            postOrder()
        }
    })
}
const postOrder = async () => {
    try {
        const data = await useApiFetch('/orden', {
            method: 'POST',
            body: {
                descripcion: `CTA ${nombres.value} ${paterno.value} ${materno.value}`,
                // fecha: new Date().toISOString().split('T')[0],
                subTotal: subTotal.value.toFixed(2),
                comision: comision.value.toFixed(2),
                montoTotal: total.value.toFixed(2),
                id_moneda: 1,
                ip: ip.value,
                ordenConcepto: [
                    {
                        id_concepto: id_concepto.value,
                        cantidad: 1,
                        id_tipo_medida: 1,
                        costo: subTotal.value.toFixed(2),
                        id_moneda: 1
                    }
                ],
                persona: {
                    ci: numeroDocumento.value,
                    expedido: expedido.value,
                    nombres: nombres.value,
                    paterno: paterno.value,
                    materno: materno.value,
                    fecha_nac: fecha_nac.value
                },
                idConvocatoria: cartStore.data.idConvocatoria
            }
        })

        $swal({
            title: data.message,
            text: 'Redirigiendo a la pagina del pago',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500
        }).then(() => {
            cartStore.reset()
            navigateTo('/preuniversitario')
        })
    } catch (err) {
        console.log(err);
    }
}

onMounted(() => {
    setTimeout(() => {
        getIp()
        getConcepto()
    }, 250)
})
</script>