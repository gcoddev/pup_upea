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
                            <form method="post">
                                <div class="panel panel-cart">
                                    <div class="panel-heading cart-heading">
                                        <div class="row">
                                            <div class="col-7">
                                                Conecepto/producto
                                            </div>
                                            <div class="col">
                                                Precio
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body cart-item" v-for="(orden, id_orden) of cartStore.data"
                                        :key="id_orden">
                                        <div class="row">
                                            <div class="prod-name col-7">
                                                <div class="cart-item-title">
                                                    <span class="cart-item-title-main">{{ orden.concepto }}</span>
                                                    <span class="cart-item-title-small">Estudiante</span>
                                                </div>
                                            </div>
                                            <div class="prod-price col" data-content="Precio">
                                                <span class="cart-item-price">
                                                    <span>Bs. {{ orden.monto_minimo }}/año</span>
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
                                                        @click="removeOrden(orden.id)">
                                                        <UIcon name="i-material-symbols-delete-sweep" class="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer d-flex space-between">
                                        <div class="content ">
                                            <NuxtLink to="/admin/orden/nuevo" class="btn btn-default btn-sm">
                                                <UIcon name="i-material-symbols-reply" class="w-4 h-4" />
                                                &nbsp; Seguir Comprando
                                            </NuxtLink>
                                        </div>
                                        <div class="content">
                                            <button type="button" class="btn btn-default btn-sm"
                                                @click="removeOrden(0)">
                                                <UIcon name="i-material-symbols-shopping-cart-off" class="w-4 h-4" />
                                                &nbsp; Vaciar Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <form method="post" action="/cart.php?a=checkout" name="orderfrm" id="frmCheckout">
                        <input type="hidden" name="token" value="8d44f9d39e14236ad4919d6d2e772a392fec7c6a">
                        <input type="hidden" name="submit" value="true">
                        <div class="section">
                            <div class="section-header">
                                <h2 class="section-title">Detalles del pago</h2>
                            </div>
                            <div class="section-body">
                                <div class="panel-group panel-group-condensed m-b-0" data-inputs-container="">
                                    <div class="panel panel-check  checked" data-virtual-input="">
                                        <div class="panel-collapse  show" data-input-collapse="" role="tabpanel">
                                            <div class="panel-body social-wide">
                                                <h6>Información Personal</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputEmail"
                                                                class="control-label label-required">
                                                                Dirección de email
                                                            </label>
                                                            <protonpass-control-6acc
                                                                data-protonpass-role="icon"></protonpass-control-6acc><input
                                                                type="email" name="email" id="inputEmail"
                                                                class="form-control" value=""
                                                                style="padding-right: 44.2667px !important;"
                                                                data-protonpass-base-css="{&quot;padding-right&quot;:&quot;&quot;}">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputPhone"
                                                                class="control-label  label-required">
                                                                Número de Teléfono </label>
                                                            <input id="populatedCountryCodephonenumber" type="hidden"
                                                                name="country-calling-code-phonenumber" value="591">
                                                            <div
                                                                class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-4">
                                                                <div class="flag-container">
                                                                    <div class="selected-flag" tabindex="0"
                                                                        title="Bolivia: +591">
                                                                        <div class="iti-flag bo"></div>
                                                                        <div class="selected-dial-code">+591</div>
                                                                        <div class="iti-arrow"></div>
                                                                    </div>
                                                                    <ul class="country-list hide">
                                                                        <li class="country preferred active"
                                                                            data-dial-code="591" data-country-code="bo">
                                                                            <div class="flag-box">
                                                                                <div class="iti-flag bo"></div>
                                                                            </div><span
                                                                                class="country-name">Bolivia</span><span
                                                                                class="dial-code">+591</span>
                                                                        </li>
                                                                    </ul>
                                                                </div><input type="tel" name="phonenumber"
                                                                    id="inputPhone" class="form-control" value=""
                                                                    autocomplete="off" placeholder="71234567"
                                                                    data-initial-value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="m-t-2x">Dirección de Subscripción</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputCompanyName" class="control-label">
                                                                Organización (Opcional)
                                                            </label>
                                                            <input type="text" name="companyname" id="inputCompanyName"
                                                                class="form-control" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputAddress1"
                                                                class="control-label  label-required">
                                                                Dirección 1
                                                            </label>
                                                            <input type="text" name="address1" id="inputAddress1"
                                                                class="form-control" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputAddress2" class="control-label">
                                                                Dirección 2 (Opcional)
                                                            </label>
                                                            <input type="text" name="address2" id="inputAddress2"
                                                                class="form-control" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label for="inputCity"
                                                                class="control-label  label-required ">
                                                                Ciudad
                                                            </label>
                                                            <input type="text" name="city" id="inputCity"
                                                                class="form-control" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="inputState"
                                                                        class="control-label  label-required">
                                                                        Departamento </label>
                                                                    <input type="text" name="state" id="stateinput"
                                                                        class="form-control" placeholder="Departamento"
                                                                        value="">
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="inputPostcode" class="control-label ">
                                                                        Código Postal (Opcional) </label>
                                                                    <input type="text" name="postcode"
                                                                        id="inputPostcode" class="form-control"
                                                                        value="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label class="control-label label-required"
                                                                for="country">País</label>
                                                            <select name="country" id="inputCountry"
                                                                class="form-control">
                                                                <option value="AF">
                                                                    Afghanistan
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="containerNewUserSecurity">
                                                    <h6 class="m-t-2x">Seguridad de la Cuenta</h6>
                                                    <div id="containerPassword" class="row">
                                                        <div id="passwdFeedback" style="display:none;"
                                                            class="alert alert-lagom alert-info text-center col-sm-12">
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group ">
                                                                <div
                                                                    class="password-content password-content-top password-content-group">
                                                                    <label for="inputNewPassword1"
                                                                        class="label-required">
                                                                        Contraseña
                                                                    </label>
                                                                    <div class="progress m-t-0" id="passwordStrengthBar"
                                                                        style="display: none">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100">
                                                                            <span class="sr-only">New Password Rating:
                                                                                0%</span>
                                                                        </div>
                                                                    </div>
                                                                    <span
                                                                        class="text-small text-lighter password-content-text"><span
                                                                            id="passwordStrengthTextLabel">mínimo 5
                                                                            caracteres</span><i data-toggle="tooltip"
                                                                            title="" data-html="true"
                                                                            data-container="body"
                                                                            class="ls ls-info-circle m-l-1x"
                                                                            data-original-title="<strong>Consejos Útiles:</strong><br />* Utilice ambos caracteres, mayúsculas y minúsculas<br />* Incluya al menos un símbolo (# $ ! % &amp; etc...)<br />* No utilice palabras del diccionario"></i></span>
                                                                </div>
                                                                <div class="input-password-strenght">
                                                                    <protonpass-control-6acc
                                                                        data-protonpass-role="icon"></protonpass-control-6acc><input
                                                                        type="password" name="password"
                                                                        id="inputNewPassword1" data-error-threshold="10"
                                                                        data-warning-threshold="55" class="form-control"
                                                                        autocomplete="off"
                                                                        style="padding-right: 140px !important;"
                                                                        data-protonpass-base-css="{&quot;padding-right&quot;:&quot;&quot;}">
                                                                </div>
                                                                <div class="password-content password-content-group">
                                                                    <button type="button"
                                                                        class="btn btn-default btn-sm generate-password"
                                                                        data-targetfields="inputNewPassword1,inputNewPassword2">
                                                                        <i class="ls ls-refresh"></i>Generar contraseña
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group ">
                                                                <label for="inputNewPassword2" class="label-required">
                                                                    Confirmar Contraseña
                                                                </label>
                                                                <input type="password" name="password2"
                                                                    id="inputNewPassword2" class="form-control"
                                                                    autocomplete="off">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="section-header">
                                <h2 class="section-title">Información del registrador del dominio</h2>
                            </div>
                            <div class="section-body">
                                <div class="panel panel-form m-b-0">
                                    <div class="panel-body">
                                        <div class="section">
                                            <p>Puede especificar datos de contacto alternativos para el registro de
                                                dominio(s) al hacer un pedido en nombre de otra persona o entidad. Si no
                                                necesita esto, puede omitir esta sección.</p>
                                            <select name="contact" id="inputDomainContact" class="form-control ">
                                                <option value="">Usar Contacto por Defecto (Datos Superiores)</option>
                                                <option value="addingnew">
                                                    Añadir nuevo contacto...
                                                </option>
                                            </select>
                                        </div>
                                        <div class="section  hidden" id="domainRegistrantInputFields">
                                            <h6>Información Personal</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCFirstName" class="control-label">
                                                            Nombre
                                                        </label>
                                                        <input type="text" name="domaincontactfirstname" maxlength="50"
                                                            id="inputDCFirstName" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCLastName" class="control-label">
                                                            Apellido
                                                        </label>
                                                        <input type="text" name="domaincontactlastname" maxlength="50"
                                                            id="inputDCLastName" class="form-control" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCEmail" class="control-label">
                                                            Dirección de email
                                                        </label>
                                                        <input type="email" name="domaincontactemail" id="inputDCEmail"
                                                            class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCPhone" class="control-label">
                                                            Número de Teléfono
                                                        </label>
                                                        <input id="populatedCountryCodedomaincontactphonenumber"
                                                            type="hidden"
                                                            name="country-calling-code-domaincontactphonenumber"
                                                            value="591">
                                                        <div
                                                            class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-4">
                                                            <div class="flag-container">
                                                                <div class="selected-flag" tabindex="0"
                                                                    title="Bolivia: +591">
                                                                    <div class="iti-flag bo"></div>
                                                                    <div class="selected-dial-code">+591</div>
                                                                    <div class="iti-arrow"></div>
                                                                </div>
                                                                <ul class="country-list hide">
                                                                    <li class="country preferred active"
                                                                        data-dial-code="591" data-country-code="bo">
                                                                        <div class="flag-box">
                                                                            <div class="iti-flag bo"></div>
                                                                        </div><span
                                                                            class="country-name">Bolivia</span><span
                                                                            class="dial-code">+591</span>
                                                                    </li>
                                                                </ul>
                                                            </div><input type="tel" name="domaincontactphonenumber"
                                                                id="inputDCPhone" class="form-control" value=""
                                                                autocomplete="off" placeholder="71234567"
                                                                data-initial-value="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="m-t-2x">Dirección de Subscripción</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCCompanyName" class="control-label">
                                                            Organización (Opcional)
                                                        </label>
                                                        <input type="text" name="domaincontactcompanyname"
                                                            id="inputDCCompanyName" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCTaxId">
                                                            NIF/CIF (Opcional)
                                                        </label>
                                                        <input type="text" name="domaincontacttax_id" id="inputDCTaxId"
                                                            class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCAddress1" class="control-label">
                                                            Dirección 1
                                                        </label>
                                                        <input type="text" name="domaincontactaddress1"
                                                            id="inputDCAddress1" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCAddress2" class="control-label">
                                                            Dirección 2
                                                        </label>
                                                        <input type="text" name="domaincontactaddress2"
                                                            id="inputDCAddress2" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCCity" class="control-label">
                                                            Ciudad
                                                        </label>
                                                        <input type="text" name="domaincontactcity" id="inputDCCity"
                                                            class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="inputDCState" class="control-label">
                                                                    Departamento
                                                                </label>
                                                                <input type="text" name="domaincontactstate"
                                                                    id="inputDCState" class="form-control" value="">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="inputDCPostcode" class="control-label">
                                                                    Código Postal
                                                                </label>
                                                                <input type="text" name="domaincontactpostcode"
                                                                    id="inputDCPostcode" class="form-control" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="inputDCPostcode" class="control-label">País</label>
                                                        <select name="domaincontactcountry" id="inputDCCountry"
                                                            class="form-control">
                                                            <option value="AF">
                                                                Afghanistan
                                                            </option>
                                                        </select>
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
                                <div class="panel hidden">
                                    <div class="panel-body">
                                        <div class="credit-balance">
                                            <p class="credit-balance-title">Crédito Disponible:</p><span>$us.
                                                0.00</span>
                                        </div>
                                        <div id="applyCreditContainer" class="apply-credit-container radio-content"
                                            data-apply-credit="1">
                                            <div class="form-group">
                                                <div class="radio">
                                                    <label>
                                                        <div class="radio-styled checked"><input class="icheck-control"
                                                                id="useCreditOnCheckout" type="radio" name="applycredit"
                                                                value="1" checked=""
                                                                style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                class="iCheck-helper"
                                                                style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                        </div>
                                                        <span id="spanFullCredit" class="hidden">
                                                            Aplicar <span>$us. 29.90</span> del saldo de mi crédito a
                                                            este pedido. No se deberá pagar más.
                                                        </span>
                                                        <span id="spanUseCredit">
                                                            Aplicar <span>$us. 0.00</span> de mi saldo de crédito a este
                                                            pedido y pagar la cantidad restante a través del método de
                                                            pago seleccionado a continuación.
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group m-b-0">
                                                <div class="radio m-b-0">
                                                    <label>
                                                        <div class="radio-styled"><input id="skipCreditOnCheckout"
                                                                class="icheck-control" type="radio" name="applycredit"
                                                                value="0"
                                                                style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                class="iCheck-helper"
                                                                style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                        </div>
                                                        <span>No aplicar ningún crédito de mi saldo de crédito a este
                                                            pedido. Lo pagaré utilizando el método de pago seleccionado
                                                            a continuación.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="paymentGatewaysContainer">
                                    <div class="section">
                                        <div class="section-body">
                                            <div class="panel-group panel-group-condensed m-b-0"
                                                data-inputs-container="">
                                                <div class="panel panel-check checked qr" data-virtual-input="">
                                                    <div class="panel-heading check">
                                                        <label>
                                                            <div class="radio-styled checked"><input type="radio"
                                                                    name="paymentmethod" value="qr"
                                                                    data-payment-type="Invoices" data-show-local=""
                                                                    data-remote-inputs=""
                                                                    class="icheck-control payment-methods" checked=""
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                    class="iCheck-helper"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                            </div>
                                                            <div class="check-content">
                                                                <span>•Pago con código QR •Billeteras Móviles (Yape,
                                                                    YoloPago, etc)</span>
                                                            </div>
                                                            <span class="check-icon" data-gateway-icon-name="qr">
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="panel panel-check  walletbo" data-virtual-input="">
                                                    <div class="panel-heading check">
                                                        <label>
                                                            <div class="radio-styled"><input type="radio"
                                                                    name="paymentmethod" value="walletbo"
                                                                    data-payment-type="Invoices" data-show-local=""
                                                                    data-remote-inputs=""
                                                                    class="icheck-control payment-methods"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                    class="iCheck-helper"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                            </div>
                                                            <div class="check-content">
                                                                <span>•Tarjeta de débito o crédito • Tigo Money •Agente
                                                                    BCP (pago en persona)</span>
                                                            </div>
                                                            <span class="check-icon" data-gateway-icon-name="walletbo">
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="panel panel-check  banktransfer" data-virtual-input="">
                                                    <div class="panel-heading check">
                                                        <label class="">
                                                            <div class="radio-styled"><input type="radio"
                                                                    name="paymentmethod" value="banktransfer"
                                                                    data-payment-type="Invoices" data-show-local=""
                                                                    data-remote-inputs=""
                                                                    class="icheck-control payment-methods"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                    class="iCheck-helper"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                            </div>
                                                            <div class="check-content">
                                                                <span>Depósito/Transferencia bancaria</span>
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
                                                <div class="panel panel-check  paypal" data-virtual-input="">
                                                    <div class="panel-heading check">
                                                        <label class="">
                                                            <div class="radio-styled"><input type="radio"
                                                                    name="paymentmethod" value="paypal"
                                                                    data-payment-type="Invoices" data-show-local=""
                                                                    data-remote-inputs=""
                                                                    class="icheck-control payment-methods"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                                    class="iCheck-helper"
                                                                    style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                            </div>
                                                            <div class="check-content">
                                                                <span>Paypal</span>
                                                            </div>
                                                            <span class="check-icon" data-gateway-icon-name="paypal">
                                                                <svg class="svg-icon "
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                                                    y="0px" width="72px" height="19px"
                                                                    viewBox="0 0 72 19"
                                                                    style="enable-background:new 0 0 72 19;"
                                                                    xml:space="preserve">
                                                                    <path id="XMLID_105_" fill="#253B80" d="M9.9,5.2c-0.3,2-1.8,2-3.3,2H5.8l0.6-3.7c0-0.2,0.2-0.4,0.5-0.4h0.4c1,0,1.9,0,2.4,0.6
C9.9,4,10,4.5,9.9,5.2z M9.3,0H3.7C3.4,0,3,0.3,3,0.7L0.7,14.9c0,0.3,0.2,0.5,0.5,0.5h2.6c0.4,0,0.7-0.3,0.8-0.7l0.6-3.8
c0.1-0.4,0.4-0.7,0.8-0.7h1.8c3.7,0,5.8-1.8,6.3-5.3c0.2-1.5,0-2.7-0.7-3.6C12.5,0.5,11.1,0,9.3,0z"></path>
                                                                    <path id="XMLID_102_" fill="#253B80" d="M22.2,10.3c-0.3,1.5-1.5,2.5-3,2.5c-0.8,0-1.4-0.2-1.8-0.7C17,11.7,16.8,11,17,10.3
c0.2-1.5,1.5-2.6,3-2.6c0.8,0,1.4,0.3,1.8,0.7C22.1,8.9,22.3,9.6,22.2,10.3z M25.9,5.1h-2.7c-0.2,0-0.4,0.2-0.5,0.4l-0.1,0.7
L22.4,6c-0.6-0.8-1.9-1.1-3.1-1.1c-2.9,0-5.4,2.2-5.9,5.3c-0.3,1.6,0.1,3,1,4.1c0.8,1,2,1.4,3.3,1.4c2.4,0,3.7-1.5,3.7-1.5
l-0.1,0.7c0,0.3,0.2,0.5,0.5,0.5h2.4c0.4,0,0.7-0.3,0.8-0.7l1.4-9.1C26.4,5.4,26.1,5.1,25.9,5.1z"></path>
                                                                    <path id="XMLID_101_" fill="#253B80"
                                                                        d="M40,5.1h-2.7c-0.3,0-0.5,0.1-0.6,0.3L33,10.9l-1.6-5.2c-0.1-0.3-0.4-0.5-0.7-0.5h-2.6
c-0.3,0-0.5,0.3-0.4,0.6l2.9,8.6l-2.8,3.9c-0.2,0.3,0,0.7,0.4,0.7h2.7c0.3,0,0.5-0.1,0.6-0.3l8.9-12.8C40.6,5.5,40.4,5.1,40,5.1z"></path>
                                                                    <path id="XMLID_98_" fill="#179BD7" d="M49.5,5.2c-0.3,2-1.8,2-3.3,2h-0.8L46,3.5c0-0.2,0.2-0.4,0.5-0.4h0.4c1,0,1.9,0,2.4,0.6
C49.5,4,49.6,4.5,49.5,5.2z M48.8,0h-5.5c-0.4,0-0.7,0.3-0.8,0.7l-2.2,14.2c0,0.3,0.2,0.5,0.5,0.5h2.8c0.3,0,0.5-0.2,0.5-0.5l0.6-4
c0.1-0.4,0.4-0.7,0.8-0.7h1.8c3.7,0,5.8-1.8,6.3-5.3c0.2-1.5,0-2.7-0.7-3.6C52.1,0.5,50.7,0,48.8,0z"></path>
                                                                    <path id="XMLID_95_" fill="#179BD7" d="M61.7,10.3c-0.3,1.5-1.5,2.5-3,2.5c-0.8,0-1.4-0.2-1.8-0.7c-0.4-0.5-0.5-1.1-0.4-1.9
c0.2-1.5,1.5-2.6,3-2.6c0.8,0,1.4,0.3,1.8,0.7C61.6,8.9,61.8,9.6,61.7,10.3z M65.4,5.1h-2.7c-0.2,0-0.4,0.2-0.5,0.4l-0.1,0.7L62,6
c-0.6-0.8-1.9-1.1-3.1-1.1c-2.9,0-5.4,2.2-5.9,5.3c-0.3,1.6,0.1,3,1,4.1c0.8,1,2,1.4,3.3,1.4c2.4,0,3.7-1.5,3.7-1.5l-0.1,0.7
c0,0.3,0.2,0.5,0.5,0.5h2.4c0.4,0,0.7-0.3,0.8-0.7L66,5.6C65.9,5.4,65.7,5.1,65.4,5.1z"></path>
                                                                    <path id="XMLID_94_" fill="#179BD7" d="M68.5,0.4l-2.3,14.5c0,0.3,0.2,0.5,0.5,0.5H69c0.4,0,0.7-0.3,0.8-0.7L72,0.5
C72,0.3,71.8,0,71.5,0H69C68.8,0,68.6,0.2,68.5,0.4z"></path>
                                                                </svg> </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="alert alert-lagom alert-danger text-center gateway-errors w-hidden m-t-5x">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section hidden" id="creditCardInputFields">
                                        <div class="section-heading">
                                            <h3 class="section-title">Detalles de Pago</h3>
                                        </div>
                                        <div class="panel panel-form" data-input-collapse="" role="tabpanel">
                                            <div class="cc-input-container">
                                                <label class="hidden">
                                                    <div class="radio-styled checked"><input type="radio" name="ccinfo"
                                                            class="icheck-control" value="new" id="new"
                                                            checked="checked"
                                                            style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins
                                                            class="iCheck-helper"
                                                            style="position: absolute; top: -40%; left: -40%; display: block; width: 180%; height: 180%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                    </div>
                                                </label>
                                                <div class="panel-body">
                                                    <div id="newCardInfo">
                                                        <div class="row">
                                                            <div class="col-md-6 new-card-container"
                                                                id="cardNumberContainer">
                                                                <div class="form-group fieldgroup-creditcard">
                                                                    <label class="control-label">Número de
                                                                        Tarjeta</label>
                                                                    <input type="tel" name="ccnumber"
                                                                        id="inputCardNumber"
                                                                        class="form-control field cc-number-field"
                                                                        placeholder="Número de Tarjeta"
                                                                        autocomplete="cc-number"
                                                                        data-message-unsupported="No podemos aceptar el tipo de tarjeta que ingresó. Utilice una tarjeta diferente."
                                                                        data-message-invalid="El número de tarjeta que ingresó no parece ser válido."
                                                                        data-supported-cards="visa,mastercard,discover,amex,jcb,dinersclub">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="inputCardExpiry" class="control-label">
                                                                        Fecha de expiración
                                                                    </label>
                                                                    <input type="tel" name="ccexpirydate"
                                                                        id="inputCardExpiry" class="form-control"
                                                                        placeholder="MM / YY" autocomplete="cc-exp">
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6" id="cvv-field-container">
                                                                <div class="form-group">
                                                                    <label for="inputCardCVV" class="control-label">
                                                                        CVV/CVC2
                                                                    </label>
                                                                    <div class="form-tooltip">
                                                                        <input type="tel" name="cccvv" id="inputCardCVV"
                                                                            class="form-control" autocomplete="cc-cvc">
                                                                        <i class="ls ls-info-circle tooltip-icon"
                                                                            data-cc-popover-show=""></i>
                                                                        <div data-cc-popover="" class="popover top">
                                                                            <div class="arrow"></div>
                                                                            <div class="popover-content">
                                                                                <img src="~/public/images/upea.png"
                                                                                    width="180">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="#newCardSaveSettings">
                                                        <div class="row">
                                                            <div class="col-md-6" id="inputDescriptionContainer">
                                                                <div class="form-group m-b-0">
                                                                    <label for="inputDescription" class="control-label">
                                                                        Ingrese un nombre para esta tarjeta (Opcional)
                                                                    </label>
                                                                    <input type="text" class="form-control"
                                                                        id="inputDescription" name="ccdescription"
                                                                        autocomplete="off" value="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                    placeholder="Puede introducir aquí cualquier nota o información adicional que desee incluir en su pedido..."></textarea>
                            </div>
                        </div>
                    </form>
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
                            <NuxtLink class="btn btn-primary" to="/admin/orden/nuevo">
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
                                            <span class="item-name mt-2">{{ orden.concepto }}</span>
                                            <span class="item-value">Bs. {{ orden.monto_minimo.toFixed(2) }}</span>
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
                                        v-if="cartStore.data.length > 0">
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
                                <label class="">
                                    <div class="checkbox-styled">
                                        <input class="icheck-control" type="checkbox">
                                    </div>
                                    <span>Estoy seguro/a de realizar el pedido</span>
                                </label>
                            </div>
                            <div class="alert alert-lagom alert-xs alert-danger m-b-2x hidden">
                                <div class="alert-body">
                                    Debe confirmar su pedido
                                </div>
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
            <form method="post" action="/cart.php?a=setstateandcountry">
                <input type="hidden" name="token" value="8d44f9d39e14236ad4919d6d2e772a392fec7c6a">
                <div class="modal modal-lg fade" id="estimate-taxes">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="lm lm-close"></i></span>
                                </button>
                                <h3 class="modal-title">Calcular Impuestos</h3>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="inputState2" class="control-label">Departamento</label>
                                            <input type="text" name="state" id="stateinput" value=""
                                                class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="inputCountry2" class="control-label">País</label>
                                            <select name="country" id="inputCountry2" class="form-control">
                                                <option value="AF">
                                                    Afghanistan
                                                </option>
                                                <option value="AX">
                                                    Aland Islands
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" data-btn-loader="">
                                    <span>Actualizar Totales</span>
                                    <div class="loader loader-button hidden">
                                        <div class="spinner spinner-sm spinner-light">
                                            <div class="rect1"></div>
                                            <div class="rect2"></div>
                                            <div class="rect3"></div>
                                            <div class="rect4"></div>
                                            <div class="rect5"></div>
                                        </div>
                                    </div>
                                </button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <form method="post" action="/cart.php?a=setstateandcountry">
                <input type="hidden" name="token" value="8d44f9d39e14236ad4919d6d2e772a392fec7c6a">
                <div class="modal modal-lg fade" id="estimate-taxes">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="lm lm-close"></i></span>
                                </button>
                                <h3 class="modal-title">Calcular Impuestos</h3>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="inputState2" class="control-label">Departamento</label>
                                            <input type="text" name="state" id="stateinput" value=""
                                                class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="inputCountry2" class="control-label">País</label>
                                            <select name="country" id="inputCountry2" class="form-control">
                                                <option value="AF">
                                                    Afghanistan
                                                </option>
                                                <option value="AX">
                                                    Aland Islands
                                                </option>
                                                <option value="AL">
                                                    Albania
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" data-btn-loader="">
                                    <span>Actualizar Totales</span>
                                    <div class="loader loader-button hidden">
                                        <div class="spinner spinner-sm spinner-light">
                                            <div class="rect1"></div>
                                            <div class="rect2"></div>
                                            <div class="rect3"></div>
                                            <div class="rect4"></div>
                                            <div class="rect5"></div>
                                        </div>
                                    </div>
                                </button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="modal modal-lg fade modal-recomendations" id="recommendationsModal" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i
                                    class="lm lm-close"></i></button>
                            <h3 class="modal-title">
                                Recommendations
                            </h3>
                        </div>
                        <div class="modal-body has-scroll">
                            <div class="product-recommendations-container">
                                <div class="product-recommendations">
                                    <h5 class="recommendation-title">Based on this product, we recommend:</h5>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer m-t-3x">
                            <a class="btn btn-primary btn-block btn-lg" href="#" id="btnContinueRecommendationsModal"
                                data-dismiss="modal" role="button">
                                <span><i class="ls ls-share"></i>Continuar</span>
                                <div class="loader loader-button hidden">
                                    <div class="spinner spinner-sm">
                                        <div class="rect1"></div>
                                        <div class="rect2"></div>
                                        <div class="rect3"></div>
                                        <div class="rect4"></div>
                                        <div class="rect5"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-recommendation clonable w-hidden hidden">
                    <div class="header">
                        <div class="cta">
                            <div class="price">
                                <span class="w-hidden hidden">¡GRATIS!</span>
                                <span class="breakdown-price"></span>
                                <span class="setup-fee"><small>&nbsp;Coste de Instalación</small></span>
                            </div>
                            <button type="button" class="btn btn-sm btn-add">
                                <span class="text">Añadir a Carro</span>
                                <span class="arrow"><i class="fas fa-chevron-right"></i></span>
                            </button>
                        </div>
                        <div class="expander">
                            <i class="fas fa-chevron-right rotate" data-toggle="tooltip" data-placement="right" title=""
                                data-original-title="Click to learn more."></i>
                        </div>
                        <div class="content">
                            <div class="headline truncate"></div>
                            <div class="tagline truncate">
                                A description (tagline) is not available for this product.
                            </div>
                        </div>
                    </div>
                    <div class="body clearfix">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

        <UModal v-model="showVaciar">
            <UCard :ui="{ background: themeDark ? 'bg-black' : '' }">
                <div class="space-y-2 text-center">
                    <h2 class="text-xl font-weight-bolder">
                        {{ idOrden == 0 ?
                            '¿ Seguro que quiere vaciar el carrito ?' :
                            '¿ Seguro que quiere eliminar el concepto ? ' }}
                    </h2>
                    <UIcon name="i-heroicons-question-mark-circle" class="w-24 h-24 text-yellow-500" />
                    <div class="p-1">
                        <button class="btn btn-info mr-3" @click="vaciarCarrito()">
                            {{ idOrden == 0 ? 'Vaciar' : 'Eliminar' }}
                        </button>
                        <button class="btn btn-danger" @click="showVaciar = false">Cancelar</button>
                    </div>
                </div>
            </UCard>
        </UModal>
    </div>
</template>

<script setup>
definePageMeta({
    // title: 'Carrito | Admin',
    layout: 'admin',
    middleware: 'auth'
})

useHead({
    title: 'Carrito | Admin'
})

import { useCartStore } from '~/stores/cart'
import { computed, onMounted } from 'vue'
const cartStore = useCartStore()
const comision = ref(1)

const subTotal = computed(() => {
    return cartStore.data.reduce((acc, orden) => acc + orden.monto_minimo, 0);
});
const total = computed(() => {
    const subTotal = cartStore.data.reduce((acc, orden) => acc + orden.monto_minimo, 0);
    return subTotal + comision.value
});

const showVaciar = ref(false)
const idOrden = ref(0)
const removeOrden = (id) => {
    idOrden.value = id
    showVaciar.value = true
}
const vaciarCarrito = () => {
    if (idOrden.value == 0) {
        cartStore.reset()
    } else {
        cartStore.remove(idOrden.value)
    }
    showVaciar.value = false
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

onMounted(() => {
    setTimeout(() => {
        getIp()
    }, 250)
})
</script>