<template>
    <div class="main-body main-body-has-sidebar main-body-has-sidebar-left">
        <div class="main-body-content">
            <div class="login login-lg">
                <div class="login-wrapper">
                    <div class="login-body register" id="registration">
                        <h1 class="login-title">Registrarse</h1>
                        <form method="post" class="loginForm" action="https://demo.rsstudio.net/lagom/register.php"
                            role="form" name="orderfrm" id="frmCheckout">
                            <div class="section section-sm" id="containerNewUserSignup">
                                <div class="section section-sm">
                                    <div class="section-body" id="connectWith">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group text-center">
                                                    <label for="inputEmail">
                                                        Conéctate con
                                                    </label>
                                                    <br>
                                                    <div>
                                                        <a href="#" class="ml-1 connect-icon">
                                                            <img src="~/public/icons/google-icon.png" alt="">
                                                        </a>
                                                        <a href="#" class="ml-3 connect-icon">
                                                            <img src="~/public/icons/facebook-icon.png" alt="">
                                                        </a>
                                                        <a href="#" class="ml-3 connect-icon">
                                                            <img src="~/public/icons/github-icon.png" alt="">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="login-divider">
                                <span></span>
                                <span>o usa el siguiente formulario</span>
                                <span></span>
                            </div>
                            <div class="section section-sm" id="containerNewUserSignup">
                                <div class="section section-sm">
                                    <div class="section-header">
                                        <h2 class="section-title">Información personal</h2>
                                    </div>
                                    <div class="section-body" id="personalInformation">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group ">
                                                    <label for="numeroDocumento" class="label-required">
                                                        Cédula de identidad
                                                    </label>
                                                    <input type="text" name="numeroDocumento" id="numeroDocumento"
                                                        class="form-control" placeholder="CI">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group ">
                                                    <label for="inputCountry" id="inputCountryIcon"
                                                        class="label-required">
                                                        Expedición
                                                    </label>
                                                    <select name="country" id="inputCountry" class="form-control">
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
                                                    <label for="inputFirstName" class="label-required">
                                                        Nombres
                                                    </label>
                                                    <input type="text" name="firstname" id="inputFirstName"
                                                        class="form-control" placeholder="Nombres">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <label for="paterno" class="label-required">
                                                        Apellido paterno
                                                    </label>
                                                    <input type="text" name="paterno" id="paterno" class="form-control"
                                                        placeholder="Paterno">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <label for="materno" class="label-required">
                                                        Apellido materno
                                                    </label>
                                                    <input type="text" name="materno" id="materno" class="form-control"
                                                        placeholder="Materno">
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group ">
                                                    <label for="inputEmail" class="label-required">
                                                        Correo electrónico
                                                    </label>
                                                    <input type="email" name="email" id="inputEmail"
                                                        class="form-control" placeholder="Email">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section section-sm" id="containerNewUserSecurity">
                                <h5 class="section-title">Cuenta de usuario</h5>
                                <div id="containerPassword" class="row">
                                    <div id="passwdFeedback" style="display: none;"
                                        class="alert alert-lagom alert-info text-center col-md-12"></div>
                                    <div class="col-md-6">
                                        <div class="form-group has-feedback" id="newPassword1">
                                            <div class="password-content password-content-top password-content-group">
                                                <label for="inputNewPassword1" class="label-required">
                                                    Password
                                                </label>
                                                <div class="progress m-t-0" id="passwordStrengthBar"
                                                    style="display: none">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                        aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">New Password Rating: 0%</span>
                                                    </div>
                                                </div>
                                                <span class="text-small text-lighter password-content-text"><span
                                                        id="passwordStrengthTextLabel">at least 5
                                                        characters</span><i data-toggle="tooltip"
                                                        title="<strong>Tips for a good password</strong><br />Use both upper and lowercase characters<br />Include at least one symbol (# $ ! % &amp; etc...)<br />Don't use dictionary words"
                                                        data-html="true" data-container="body"
                                                        class="ls ls-info-circle m-l-1x"></i></span>
                                            </div>
                                            <div class="input-password-strenght">
                                                <input type="password" name="password" id="inputNewPassword1"
                                                    data-error-threshold="50" data-warning-threshold="75"
                                                    class="form-control" placeholder="" autocomplete="off">
                                            </div>

                                            <div class="password-content password-content-group">
                                                <button type="button" class="btn btn-default btn-sm generate-password"
                                                    data-targetfields="inputNewPassword1,inputNewPassword2">
                                                    <i class="ls ls-refresh"></i>Generate Password
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group has-feedback" id="newPassword2">
                                            <label for="inputNewPassword2" class="label-required">
                                                Confirm Password
                                            </label>
                                            <input type="password" name="password2" id="inputNewPassword2"
                                                class="form-control" placeholder="" autocomplete="off">
                                            <div id="inputNewPassword2Msg"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="section section-sm ">
                                <div class="section-header">
                                    <h2 class="section-title">Join our mailing list</h2>
                                    <p class="section-desc">We would like to send you occasional news, information
                                        and special offers by email. Choose below whether you want to join our
                                        mailing list. You can unsubscribe at any time.</p>
                                </div>
                                <div class="panel panel-switch m-w-xs">
                                    <div class="panel-body">
                                        <span class="switch-label">Receive Emails: </span>
                                        <label class="switch switch--lg switch--text">
                                            <input class="switch__checkbox" type="checkbox" name="marketingoptin"
                                                value="1" checked>
                                            <span class="switch__container"><span class="switch__handle"></span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="section section-sm">
                                <div class="section-body">
                                    <div class="checkbox">
                                        <label>
                                            <input class="icheck-control accepttos" type="checkbox" name="accepttos">
                                            <span class="label-required">I have read and agree to the <a
                                                    href="http://www.example.com/tos.html" target="_blank">Terms of
                                                    Service</a></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-actions">
                                <button type="submit" class="btn btn-lg btn-primary btn-block ">
                                    <span class="btn-text">
                                        Register
                                    </span>
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
                            </div>
                        </form>

                    </div>
                    <div class="login-footer">
                        <div class="text-center text-light">
                            ¿Ya tienes una cuenta?
                            <NuxtLink to="/login">Ingresar</NuxtLink>
                            <span class="text-lowercase"> ó</span>
                            <NuxtLink to="/reset">
                                Restablecer contraseña
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home',
    middleware: 'guest',
    bodyClass: 'page-login-primary'
})
</script>

<style scoped>
</style>