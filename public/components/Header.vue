<template>
    <div class="app-nav app-nav-condensed  sticky-navigation" data-site-navbar>
        <div class="app-nav-header " id="header">
            <div class="container">
                <button class="app-nav-toggle navbar-toggle" type="button">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>



                <NuxtLink class="logo hidden-sm hidden-xs hidden-md" to="/">
                    <img src="~/public/assets/admin/lagom2/assets/img/logo/logo_big.1001211479.svg" title="logo"
                        alt="logo" />
                </NuxtLink>
                <NuxtLink class="logo visible-xs visible-sm visible-md" to="/">
                    <img src="~/public/assets/admin/lagom2/assets/img/logo/logo_big.1001211479.svg" title="logo"
                        alt="logo" />
                </NuxtLink>
                <ul class="top-nav">
                    <li menuItemName="View Cart" class="  nav-item-cart" id="Secondary_Navbar-View_Cart">
                        <a href="#">
                            <i class="fas fa-cart-register lm lm-basket"></i>
                            <span class="item-text">
                                Ver carrito
                            </span>
                            <span class="nav-badge badge badge-primary-faded hidden"><span></span></span>
                        </a>
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
                        id="Primary_Navbar-footer_extended.products">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="64" height="64" fill="none" viewBox="0 0 64 64">
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M59 36.5898V47.4098L32 62.9998L5 47.4098V36.5898L32 44.5898L59 36.5898Z" />
                                <path fill="var(--svg-icon-color-1)" stroke="var(--svg-icon-color-1)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M32 44.3L11.2 32.3L5 35.9L32 51.5L59 35.9L52.8 32.3L32 44.3Z" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M32 32.2V43.7M32 32.2L5 16.6M32 32.2L59 16.6M32 43.7L59 28.1V16.6M32 43.7L5 28.1V16.6M5 16.6L32 1L59 16.6M37 34.8L44 30.7" />
                            </svg>
                            <span class="item-text">
                                Products
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>

                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="Web Hosting" class=" "
                                id="Primary_Navbar-footer_extended.products-Web_Hosting">
                                <NuxtLink to="/login">
                                    <i class="fas fa-ticket ls ls-hosting"></i>
                                    Web Hosting
                                </NuxtLink>
                            </li>

                            <li menuItemName="Reseller Hosting" class=" "
                                id="Primary_Navbar-footer_extended.products-Reseller_Hosting">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-hosting"></i>
                                    Reseller Hosting
                                </a>
                            </li>

                            <li menuItemName="VPS Hosting" class=" "
                                id="Primary_Navbar-footer_extended.products-VPS_Hosting">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-hosting"></i>
                                    VPS Hosting
                                </a>
                            </li>

                            <li menuItemName="Dedicated Servers" class=" "
                                id="Primary_Navbar-footer_extended.products-Dedicated_Servers">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-hosting"></i>
                                    Dedicated Servers
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li menuItemName="Domains" class="dropdown  nav-item-text-only" id="Primary_Navbar-Domains">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="64" height="64" fill="none" viewBox="0 0 64 64">
                                <path fill="var(--svg-icon-color-3)" fill-rule="evenodd"
                                    d="M32.3 16.3c-.626 0-1.246.01-1.862.032a1 1 0 0 1-.069-1.999 55.815 55.815 0 0 1 3.862 0 1 1 0 0 1-.07 2 53.82 53.82 0 0 0-1.86-.033Zm-4.684-.808a1 1 0 0 1-.889 1.1 49.265 49.265 0 0 0-3.678.53 1 1 0 1 1-.36-1.968 51.298 51.298 0 0 1 3.827-.551 1 1 0 0 1 1.1.889Zm9.368 0a1 1 0 0 1 1.1-.89c1.306.14 2.583.324 3.827.552a1 1 0 1 1-.36 1.967 49.265 49.265 0 0 0-3.678-.53 1 1 0 0 1-.889-1.1Zm7.48 1.218a1 1 0 0 1 1.226-.706 42.68 42.68 0 0 1 3.699 1.175 1 1 0 0 1-.693 1.876 40.733 40.733 0 0 0-3.526-1.12 1 1 0 0 1-.706-1.225Zm-24.328 0a1 1 0 0 1-.706 1.226 41.01 41.01 0 0 0-3.526 1.119 1 1 0 0 1-.693-1.876 42.68 42.68 0 0 1 3.7-1.174 1 1 0 0 1 1.225.705Zm-7.166 2.457a1 1 0 0 1-.453 1.34c-.557.275-1.096.562-1.615.858-.402.237-.792.479-1.17.727a1 1 0 1 1-1.098-1.672c.41-.268.828-.529 1.259-.782l.01-.006a32.427 32.427 0 0 1 1.728-.918 1 1 0 0 1 1.34.453Zm38.66 0a1 1 0 0 1 1.34-.453c.592.293 1.167.598 1.723.916.651.365 1.283.762 1.892 1.188a1 1 0 1 1-1.145 1.64 20.634 20.634 0 0 0-1.728-1.085l-.008-.005a30.492 30.492 0 0 0-1.62-.861 1 1 0 0 1-.454-1.34Zm-43.982 3.15a1 1 0 0 1-.133 1.409c-.352.29-.696.593-1.034.907a1 1 0 0 1-1.361-1.466c.366-.34.738-.667 1.12-.982a1 1 0 0 1 1.408.133Zm50.925 1.374a1 1 0 0 1 1.414.015 25.349 25.349 0 0 1 1.487 1.66 1 1 0 0 1-1.548 1.267 23.56 23.56 0 0 0-1.368-1.528 1 1 0 0 1 .015-1.414Z"
                                    clip-rule="evenodd" />
                                <path fill="var(--svg-icon-color-3)" fill-rule="evenodd"
                                    d="M28.22 2.227a1 1 0 0 1-.246 1.392l-.25.175a1 1 0 0 1-.278.136.968.968 0 0 1-.223.214l-.244.171c-.602.434-1.185.904-1.744 1.407a1 1 0 0 1-1.339-1.486 22.638 22.638 0 0 1 1.92-1.548l.01-.007.25-.175a1 1 0 0 1 .278-.136.968.968 0 0 1 .223-.214l.25-.175a1 1 0 0 1 1.392.246Zm-6.206 5.45a1 1 0 0 1 .242 1.394 18.42 18.42 0 0 0-1.188 1.925 29.99 29.99 0 0 0-.86 1.62 1 1 0 1 1-1.794-.884c.292-.59.595-1.163.911-1.716.39-.727.824-1.426 1.295-2.096a1 1 0 0 1 1.393-.243Zm-3.846 7.044a1 1 0 0 1 .593 1.284 41.131 41.131 0 0 0-1.117 3.527 1 1 0 0 1-1.931-.519c.344-1.28.736-2.516 1.171-3.699a1 1 0 0 1 1.284-.593Zm-2.142 7.266a1 1 0 0 1 .803 1.165 49.542 49.542 0 0 0-.533 3.677 1 1 0 0 1-1.989-.213c.14-1.303.326-2.58.555-3.826a1 1 0 0 1 1.164-.803Zm-.958 7.518a1 1 0 0 1 .965 1.034 52.863 52.863 0 0 0 0 3.725 1 1 0 1 1-1.999.07 54.851 54.851 0 0 1 0-3.865 1 1 0 0 1 1.034-.964Zm.128 7.587a1 1 0 0 1 1.102.887c.135 1.255.316 2.485.539 3.681a1 1 0 1 1-1.966.366 50.81 50.81 0 0 1-.562-3.832 1 1 0 0 1 .887-1.102Zm1.24 7.488a1 1 0 0 1 1.228.701c.335 1.223.715 2.4 1.138 3.524a1 1 0 1 1-1.872.705 41.855 41.855 0 0 1-1.195-3.701 1 1 0 0 1 .701-1.229Zm2.501 7.162a1 1 0 0 1 1.344.44c.282.556.576 1.094.88 1.61l.005.007c.266.46.552.916.855 1.364a1 1 0 1 1-1.657 1.12 25.178 25.178 0 0 1-.928-1.479 31.004 31.004 0 0 1-.939-1.718 1 1 0 0 1 .44-1.344Zm3.65 5.885a1 1 0 0 1 1.412.087c.357.404.727.797 1.108 1.179a1 1 0 0 1-1.414 1.414c-.41-.41-.809-.834-1.193-1.269a1 1 0 0 1 .088-1.411Z"
                                    clip-rule="evenodd" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M32.9 63c-.7 0-1.3 0-2-.1m0-61.6c.7-.2 1.3-.3 2-.3m29.8 28.7c.2.7.2 1.3.2 2M1 32.9c0-.7 0-1.3.1-2m61.9.2c0 4.9-3.3 9.9-8.9 13.1-6.7 3.7-14.3 5.7-22 5.7-7.6 0-15.1-1.9-21.8-5.7C4.8 41 1 36.5 1 31.6M31.4 1c4.9 0 9.4 3.9 12.7 9.5 3.8 6.7 5.8 14.2 5.8 21.9 0 7.7-2 15.2-5.8 21.9-3.2 5.6-7.7 8.8-12.7 8.8m22.7-8.8C48.3 60 40.4 63.2 32.2 63c-8.2.2-16-3-21.9-8.7C4.5 48.5 1.1 40.6 1 32.4c.1-8.3 3.5-16.1 9.4-21.9C16.1 4.5 24 1.1 32.2 1c8.3.1 16.2 3.5 21.9 9.5 5.8 5.8 9 13.7 8.9 21.9.1 8.2-3.1 16.1-8.9 21.9Z" />
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M31.5 39.9a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
                            </svg>
                            <span class="item-text">
                                Domains
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="Register a New Domain" class=" "
                                id="Primary_Navbar-Domains-Register_a_New_Domain">
                                <a href="#">
                                    <i class="fas fa-test lm lm-globe"></i>
                                    <span class="menu-item-content">Register a New Domain</span>
                                </a>
                            </li>

                            <li menuItemName="Transfer Domains to Us" class=" "
                                id="Primary_Navbar-Domains-Transfer_Domains_to_Us">
                                <a href="#">
                                    <i class="fas fa-test ls ls-transfer"></i>
                                    <span class="menu-item-content">Transfer Domains to Us</span>
                                </a>
                            </li>

                            <li menuItemName="Divider-445" class="nav-divider " id="Primary_Navbar-Domains-Divider-445">
                                -----
                            </li>

                            <li menuItemName="Domain Pricing" class=" " id="Primary_Navbar-Domains-Domain_Pricing">
                                <a href="#">
                                    <i class="fas fa-test ls ls-document-info"></i>
                                    <span class="menu-item-content">Domain Pricing</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li menuItemName="Website & Security" class="dropdown  nav-item-text-only"
                        id="Primary_Navbar-Website_&_Security">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="64" height="64" fill="none" viewBox="0 0 64 64">
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M31 27.5 59 3.8 54 1 26 17.2v7.5l5 2.8Z" />
                                <path fill="var(--svg-icon-color-1)" stroke="var(--svg-icon-color-1)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M31 19.9v7.6l7.5 4.4V48H45l14-16.2v-28L31 19.9Z" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m33 34.9 5-2.7m-5 2.7L5 18.8m28 16.1V63m5-30.8L10 16l-5 2.8m33 13.4v28.1L33 63M5 18.8v28L19 63h14" />
                            </svg>
                            <span class="item-text">
                                Website & Security
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="symantec" class=" " id="Primary_Navbar-Website_&_Security-symantec">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-padlock"></i>
                                    SSL Certificates
                                </a>
                            </li>

                            <li menuItemName="weebly" class=" " id="Primary_Navbar-Website_&_Security-weebly">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-dashboard"></i>
                                    Website Builder
                                </a>
                            </li>

                            <li menuItemName="sitelock" class=" " id="Primary_Navbar-Website_&_Security-sitelock">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-shield"></i>
                                    Website Security
                                </a>
                            </li>

                            <li menuItemName="spamexperts" class=" " id="Primary_Navbar-Website_&_Security-spamexperts">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-envelope"></i>
                                    E-mail Services
                                </a>
                            </li>

                            <li menuItemName="codeguard" class=" " id="Primary_Navbar-Website_&_Security-codeguard">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-refresh"></i>
                                    Website Backup
                                </a>
                            </li>

                            <li menuItemName="marketgoo" class=" " id="Primary_Navbar-Website_&_Security-marketgoo">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-search"></i>
                                    SEO Tools
                                </a>
                            </li>

                            <li menuItemName="ox" class=" " id="Primary_Navbar-Website_&_Security-ox">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-envelope"></i>
                                    Professional Email
                                </a>
                            </li>

                            <li menuItemName="siteBuilder" class=" " id="Primary_Navbar-Website_&_Security-siteBuilder">
                                <a href="#">
                                    <i class="fas fa-ticket ls ls-sitebuilder"></i>
                                    Site Builder
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li menuItemName="Support" class="dropdown  nav-item-text-only" id="Primary_Navbar-Support">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="64" height="64" fill="none" viewBox="0 0 64 64">
                                <path fill="var(--svg-icon-color-3)" fill-rule="evenodd"
                                    d="M34.945 2.047a1 1 0 0 1-.991 1.008c-.527.004-1.117.13-1.748.414l-2.615 1.506a1 1 0 0 1-.997-1.734l2.655-1.529a.99.99 0 0 1 .08-.041c.876-.404 1.758-.609 2.608-.616a1 1 0 0 1 1.008.992Zm2.2 1.408a1 1 0 0 1 1.322.5c.35.775.533 1.662.533 2.626a1 1 0 1 1-2 0c0-.71-.135-1.314-.356-1.803a1 1 0 0 1 .5-1.323ZM24.647 6.667a1 1 0 0 1-.367 1.366l-5.312 3.058a1 1 0 1 1-.998-1.733L23.282 6.3a1 1 0 0 1 1.366.367Zm-10.623 6.117a1 1 0 0 1-.367 1.366L11 15.679a.985.985 0 0 1-.08.041 9.781 9.781 0 0 0-2.343 1.538 1 1 0 0 1-1.32-1.503 11.831 11.831 0 0 1 2.783-1.832l2.617-1.507a1 1 0 0 1 1.366.368Zm-9.2 7.868a1 1 0 0 1 .634 1.264A8.671 8.671 0 0 0 5 24.646v3.679a1 1 0 1 1-2 0v-3.68c0-1.145.2-2.279.56-3.36a1 1 0 0 1 1.264-.633ZM4 34.684a1 1 0 0 1 1 1v3.679c0 .744.143 1.357.372 1.843a1 1 0 1 1-1.81.851C3.192 41.273 3 40.363 3 39.363v-3.68a1 1 0 0 1 1-1Zm8.538 7.073A1 1 0 0 1 13 42.6v1.498a1 1 0 0 1-1.998.07l-.078.036-.004.002c-.88.405-1.772.625-2.633.656a1 1 0 1 1-.07-1.999c.569-.02 1.2-.167 1.864-.473h.002l.371-.173a.996.996 0 0 1 .412-.094.996.996 0 0 1 .337-.255l.375-.175a1 1 0 0 1 .96.064ZM12 46.095a1 1 0 0 1 1 1v1.499c0 .283.059.428.09.481.033.055.06.112.08.17a.996.996 0 0 1 .295-.309c.153-.103.334-.265.526-.504a1 1 0 0 1 1.556 1.257 4.48 4.48 0 0 1-.96.903 1 1 0 0 1-1.503-.49 1 1 0 0 1-1.716-.01c-.259-.438-.368-.958-.368-1.498v-1.499a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 29.796c0-1.826.659-3.88 1.831-5.712 1.172-1.832 3.013-3.357 4.67-4.122L40.749 7.73c1.658-.764 3.248-.772 4.42-.022C46.342 8.457 47 9.905 47 11.731v15.258c0 1.826-.659 3.88-1.831 5.712-1.172 1.831-2.469 2.891-4.42 4.054l-8.557 4.893L23.77 54.21c-1.285 1.592-2.77 1.266-2.77-.466V47.75l-1.498.698c-1.658.764-3.498.839-4.67.088C13.658 47.786 13 46.34 13 44.513V29.796Z" />
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M23.831 29.234C22.66 31.065 22 33.12 22 34.945v14.718c0 1.826.659 3.273 1.831 4.023C25.308 54.632 28 56.08 28 56.08l2-2.38v5.2c0 .773.296 1.18.738 1.45.232.088 3.862 2.2 3.862 2.2l6.592-15.752 8.556-4.893c1.952-1.163 3.248-2.223 4.42-4.054C55.342 36.019 56 33.965 56 32.139l2.135-16.999c-.865-.473-3.038-1.689-3.966-2.283-1.172-.75-2.763-.742-4.42.022L28.501 25.112c-1.658.765-3.498 2.29-4.67 4.122Z" />
                                <path fill="var(--svg-icon-color-1)" stroke="var(--svg-icon-color-1)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M26 37.245c0-1.825.659-3.88 1.831-5.711 1.172-1.832 3.013-3.357 4.67-4.122L53.749 15.18c1.658-.764 3.248-.772 4.42-.022 1.173.75 1.832 2.198 1.832 4.024V34.44c0 1.826-.659 3.88-1.831 5.712-1.172 1.831-2.469 2.891-4.42 4.054l-8.557 4.893L36.77 61.66c-1.285 1.592-2.77 1.266-2.77-.466V55.2l-1.498.697c-1.658.765-3.499.84-4.67.09C26.658 55.236 26 53.788 26 51.962V37.245Z" />
                                <path stroke="var(--svg-icon-color-4)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m32.422 48.78 16.89-9.675m-16.89 2.925 8.446-4.838m-8.446-1.912 16.89-9.675" />
                            </svg>
                            <span class="item-text">
                                Support
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
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
                    </li>
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
                            <span>Panel</span>
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

const token = ref('')

const getCookie = async () => {
    token.value = await Cookies.get('token')
}
onMounted(() => {
    getCookie()
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
</script>

<style scoped>
/* Estilos del header */
</style>