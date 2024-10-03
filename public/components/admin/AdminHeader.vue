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
                        <a href="cart.php?a=view">
                            <i class="fas fa-test lm lm-basket"></i>
                            <span class="item-text">View Cart
                            </span>
                            <span class="nav-badge badge badge-primary-faded hidden">
                                <span></span>
                            </span>
                        </a>
                    </li>
                    <li menuItemName="Notifications" class="dropdown  nav-item-icon-only nav-item-icon-only"
                        id="Secondary_Navbar-Notifications">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <div class="notification-icon-container">
                                <i class="fas fa-test lm lm-bell"></i>
                                <span class="nav-badge badge badge-primary badge-dot badge-icon">
                                    <span>NEW</span>
                                </span>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll client-alerts">
                            <li menuItemName="Alert_0" class="" id="Secondary_Navbar-Notifications-Alert_0">
                                <a href="javascript:void(0)" class="client-alerts-header">
                                    Notifications
                                </a>
                            </li>
                            <li menuItemName="Alert_1" class="" id="Secondary_Navbar-Notifications-Alert_1">
                                <a href="cart/domain/renew">
                                    <i class="fas fa-ticket lm lm-info text-danger"></i>
                                    <div>You have 1 domain(s) expiring within the next 7 days.</div>
                                </a>
                            </li>
                            <li menuItemName="Alert_2" class="" id="Secondary_Navbar-Notifications-Alert_2">
                                <a href="clientarea.php?action=masspay&all=true">
                                    <i class="fas fa-ticket lm lm-info text-info"></i>
                                    <div>You have 4 unpaid invoice(s). Pay them early for peace of mind.</div>
                                </a>
                            </li>
                            <li menuItemName="Alert_3" class="" id="Secondary_Navbar-Notifications-Alert_3">
                                <a href="clientarea.php?action=masspay&all=true">
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
                                    src="~/public/assets/admin/lagom2/assets/img/logo/eb76e3210778a71baad903fcff70c215.jpg"
                                    alt="Avatar">
                            </div>
                            <div class="active-client">
                                <span class="item-text">Petey MacGibbon</span>
                                <span>LockWorth</span>
                            </div>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll dropdown-menu-right ">
                            <li class="dropdown-header dropdown-header--account">
                                <div class="client-avatar client-avatar-sm">
                                    <img class="lazyload hidden"
                                        data-src="https://www.gravatar.com/avatar/eb76e3210778a71baad903fcff70c215"
                                        alt="Avatar">
                                </div>
                                <div class="dropdown-header-info">
                                    <div class="dropdown-header-desc">LockWorth
                                    </div>
                                    <div class="dropdown-header-title">Petey MacGibbon
                                    </div>
                                </div>
                            </li>
                            <li menuItemName="Divider-491" class="nav-divider "
                                id="Secondary_Navbar-Account-Divider-491">
                                -----
                            </li>
                            <li menuItemName="Account Details" class=" " id="Secondary_Navbar-Account-Account_Details">
                                <a href="clientarea.php?action=details">
                                    <i class="fas fa-test ls ls-info-circle"></i>
                                    <span class="menu-item-content">Account Details</span>
                                </a>
                            </li>
                            <li menuItemName="User Management" class=" " id="Secondary_Navbar-Account-User_Management">
                                <a href="account/users">
                                    <i class="fas fa-test ls ls-configure"></i>
                                    <span class="menu-item-content">User Management</span>
                                </a>
                            </li>
                            <li menuItemName="Payment Methods" class=" " id="Secondary_Navbar-Account-Payment_Methods">
                                <a href="account/paymentmethods">
                                    <i class="fas fa-test ls ls-wallet"></i>
                                    <span class="menu-item-content">Payment Methods</span>
                                </a>
                            </li>
                            <li menuItemName="Contacts" class=" " id="Secondary_Navbar-Account-Contacts">
                                <a href="account/contacts">
                                    <i class="fas fa-test ls ls-smartphone"></i>
                                    <span class="menu-item-content">Contacts</span>
                                </a>
                            </li>
                            <li menuItemName="Account Security" class=" "
                                id="Secondary_Navbar-Account-Account_Security">
                                <a href="clientarea.php?action=security">
                                    <i class="fas fa-test ls ls-shield"></i>
                                    <span class="menu-item-content">Account Security</span>
                                </a>
                            </li>
                            <li menuItemName="Email History" class=" " id="Secondary_Navbar-Account-Email_History">
                                <a href="clientarea.php?action=emails">
                                    <i class="fas fa-test ls ls-envelope"></i>
                                    <span class="menu-item-content">Email History</span>
                                </a>
                            </li>
                            <li menuItemName="Divider-498" class="nav-divider "
                                id="Secondary_Navbar-Account-Divider-498">
                                -----
                            </li>
                            <li menuItemName="Your Profile" class=" " id="Secondary_Navbar-Account-Your_Profile">
                                <a href="user/profile">
                                    <i class="fas fa-test ls ls-user"></i>
                                    <span class="menu-item-content">Your Profile</span>
                                </a>
                            </li>
                            <li menuItemName="Switch Account" class=" " id="Secondary_Navbar-Account-Switch_Account">
                                <a href="user/accounts">
                                    <i class="fas fa-random"></i>
                                    <span class="menu-item-content">Switch Account</span>
                                </a>
                            </li>
                            <li menuItemName="Change Password" class=" " id="Secondary_Navbar-Account-Change_Password">
                                <a href="user/password">
                                    <i class="fas fa-test ls ls-padlock"></i>
                                    <span class="menu-item-content">Change Password</span>
                                </a>
                            </li>
                            <li menuItemName="Security Settings" class=" "
                                id="Secondary_Navbar-Account-Security_Settings">
                                <a href="user/security">
                                    <i class="fas fa-test ls ls-security-code"></i>
                                    <span class="menu-item-content">Security Settings</span>
                                </a>
                            </li>
                            <li menuItemName="Divider-503" class="nav-divider "
                                id="Secondary_Navbar-Account-Divider-503">
                                -----
                            </li>
                            <li menuItemName="Logout" class="" id="Secondary_Navbar-Account-Logout">
                                <a href="#" @click="logout">
                                    <i class="fas fa-test ls ls-arrow-left-wall"></i>
                                    <span class="menu-item-content">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
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
                    <li menuItemName="Dashboard" class="dropdown-mega nav-item-text-only" id="Primary_Navbar-Dashboard"
                        :class="linkClass == 'panel' ? 'active' : ''">
                        <NuxtLink to="/admin" @click="sendTitle('panel', 'Panel principal')">
                            <span class="item-text">
                                Panel
                            </span>
                        </NuxtLink>
                    </li>
                    <li menuItemName="Services" class="  nav-item-text-only" id="Primary_Navbar-Services">
                        <a href="clientarea.php?action=services">
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
                            <span class="item-text">Services
                            </span>
                        </a>
                    </li>
                    <li menuItemName="Domains" class="  nav-item-text-only" id="Primary_Navbar-Domains">
                        <a href="clientarea.php?action=domains">
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
                            <span class="item-text">Domains
                            </span>
                        </a>
                    </li>
                    <li menuItemName="Billing" class="dropdown  nav-item-text-only" id="Primary_Navbar-Billing">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="66" height="65" fill="none" viewBox="0 0 66 65">
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M41.0288 3.06213C57.5663 7.49333 67.3803 24.4918 62.9491 41.0292C59.5798 53.6038 48.9445 62.2912 36.7708 63.7846" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M45.5428 4.64942C44.1028 4.01489 42.596 3.48212 41.0289 3.06221C24.4915 -1.36899 7.49301 8.44507 3.06181 24.9825C-0.335156 37.6602 4.63954 50.6088 14.5972 57.9588" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M15.0407 50.6448L15.3142 58.8968L6.9606 58.0043" />
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18 55.4001L20.7812 56.9688L52 3.80005L49.2 2.30005L18 20.4V55.4001Z" />
                                <path fill="var(--svg-icon-color-1)" stroke="var(--svg-icon-color-1)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 57.1L52 38.8V3.80005L21 22.1V57.1Z" />
                                <path stroke="var(--svg-icon-color-4)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M47.8 16.7L25.3 29.6M47.8 23.5L25.3 36.5M36.4001 36.5L25.3 42.8" />
                            </svg>
                            <span class="item-text">Billing
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="My Invoices" class=" " id="Primary_Navbar-Billing-My_Invoices">
                                <a href="clientarea.php?action=invoices">
                                    <i class="fas fa-test ls ls-document"></i>
                                    <span class="menu-item-content">My Invoices</span>
                                    <span class='badge badge-danger badge-right'>4</span>
                                </a>
                            </li>
                            <li menuItemName="My Quotes" class=" " id="Primary_Navbar-Billing-My_Quotes">
                                <a href="clientarea.php?action=quotes">
                                    <i class="fas fa-test ls ls-text-cloud"></i>
                                    <span class="menu-item-content">My Quotes</span>
                                </a>
                            </li>
                            <li menuItemName="Divider-527" class="nav-divider " id="Primary_Navbar-Billing-Divider-527">
                                -----
                            </li>
                            <li menuItemName="Mass Payment" class=" " id="Primary_Navbar-Billing-Mass_Payment">
                                <a href="clientarea.php?action=masspay&all=true">
                                    <i class="fas fa-test ls ls-bank-note"></i>
                                    <span class="menu-item-content">Mass Payment</span>
                                </a>
                            </li>
                            <li menuItemName="Payment Methods" class=" " id="Primary_Navbar-Billing-Payment_Methods">
                                <a href="account/paymentmethods">
                                    <i class="fas fa-test ls ls-bank-note"></i>
                                    <span class="menu-item-content">Payment Methods</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li menuItemName="Support" class="dropdown  nav-item-text-only" id="Primary_Navbar-Support">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <svg class="svg-icon {if $onDark} svg-icon-on-dark {/if}" xmlns="http://www.w3.org/2000/svg"
                                width="64" height="64" fill="none" viewBox="0 0 64 64">
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M59 20.6v-4m0 18.7v-6.6m-3.5 20.7 3.5-2v-4M42.6 56.9l5.8-3.4M28.5 61l3.5 2 3.5-2m-19.9-7.4 5.8 3.3M5 43.4v4l3.5 2M5 28.7v6.6m0-18.7v4" />
                                <path fill="var(--svg-icon-color-2)" stroke="var(--svg-icon-color-2)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m32 37-4.5-2.6-8.5 4.9 13 7.5 13-7.5-8.5-4.9L32 37Z" />
                                <path fill="var(--svg-icon-color-1)" stroke="var(--svg-icon-color-1)"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m32 32.8-7.2-4.2L19 32l13 7.5L45 32l-5.8-3.4-7.2 4.2Z" />
                                <path stroke="var(--svg-icon-color-3)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M26 4.7V20h26.8M25 13H11.5M38 21v7.5m-6 3.7L5 16.6 32 1l27 15.6-27 15.6Z" />
                            </svg>
                            <span class="item-text">Support
                            </span>
                            <b class="ls ls-caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-lazy has-scroll  ">
                            <li menuItemName="Tickets" class=" " id="Primary_Navbar-Support-Tickets">
                                <a href="supporttickets.php">
                                    <i class="fas fa-test ls ls-envelope"></i>
                                    <span class="menu-item-content">Tickets</span>
                                    <span class='badge badge-info badge-right'>1</span>
                                </a>
                            </li>
                            <li menuItemName="Announcements" class=" " id="Primary_Navbar-Support-Announcements">
                                <a href="announcements">
                                    <i class="fas fa-test ls ls-text-cloud"></i>
                                    <span class="menu-item-content">Announcements</span>
                                </a>
                            </li>
                            <li menuItemName="Knowledgebase" class=" " id="Primary_Navbar-Support-Knowledgebase">
                                <a href="knowledgebase">
                                    <i class="fas fa-test ls ls-document-info"></i>
                                    <span class="menu-item-content">Knowledgebase</span>
                                </a>
                            </li>
                            <li menuItemName="Downloads" class=" " id="Primary_Navbar-Support-Downloads">
                                <a href="download">
                                    <i class="fas fa-test ls ls-download-square"></i>
                                    <span class="menu-item-content">Downloads</span>
                                </a>
                            </li>
                            <li menuItemName="Network Status" class=" " id="Primary_Navbar-Support-Network_Status">
                                <a href="serverstatus.php">
                                    <i class="fas fa-test ls ls-range"></i>
                                    <span class="menu-item-content">Network Status</span>
                                </a>
                            </li>
                            <li menuItemName="Divider-537" class="nav-divider " id="Primary_Navbar-Support-Divider-537">
                                -----
                            </li>
                            <li menuItemName="Open Ticket" class=" " id="Primary_Navbar-Support-Open_Ticket">
                                <NuxtLink to="/admin/orden">
                                    <i class="fas fa-test ls ls-new-window"></i>
                                    <span class="menu-item-content">Orden</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li menuItemName="Store" class="dropdown is-right  dropdown-mega nav-item-text-only"
                        id="Primary_Navbar-Store">
                        <a href="javascript:void(0)" @click="goHome" id="go-home">
                            <span class="item-text">
                                Inicio
                            </span>
                            <!-- <b class="ls ls-caret"></b> -->
                        </a>
                        <div class="dropdown-menu dropdown-lazy has-scroll  ">
                            <div class="dropdown-menu-body">
                                <div class="dropdown-menu-content">
                                    <div class="dropdown-menu-parent">
                                        <div class="nav-header">Services
                                        </div>
                                        <div class="dropdown-menu-cols">
                                            <ul class="dropdown-menu-list">
                                                <li menuItemName="Web Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Web_Hosting">
                                                    <a href="store/web-hosting">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        Web Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="Reseller Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Reseller_Hosting">
                                                    <a href="store/reseller-hosting">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        Reseller Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="VPS Hosting" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-VPS_Hosting">
                                                    <a href="store/vps-hosting">
                                                        <i class="fas fa-ticket ls ls-hosting"></i>
                                                        VPS Hosting

                                                    </a>
                                                </li>
                                                <li menuItemName="Dedicated Servers" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Dedicated_Servers">
                                                    <a href="store/dedicated-servers">
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
                                                    <a href="store/ssl-certificates">
                                                        <i class="fas fa-ticket ls ls-padlock"></i>
                                                        SSL Certificates

                                                    </a>
                                                </li>
                                                <li menuItemName="weebly" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-weebly">
                                                    <a href="store/weebly-website-builder">
                                                        <i class="fas fa-ticket ls ls-dashboard"></i>
                                                        Website Builder

                                                    </a>
                                                </li>
                                                <li menuItemName="sitelock" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-sitelock">
                                                    <a href="store/sitelock">
                                                        <i class="fas fa-ticket ls ls-shield"></i>
                                                        Website Security

                                                    </a>
                                                </li>
                                                <li menuItemName="spamexperts" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-spamexperts">
                                                    <a href="store/email-spam-filtering">
                                                        <i class="fas fa-ticket ls ls-envelope"></i>
                                                        E-mail Services

                                                    </a>
                                                </li>
                                                <li menuItemName="codeguard" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-codeguard">
                                                    <a href="store/codeguard">
                                                        <i class="fas fa-ticket ls ls-refresh"></i>
                                                        Website Backup
                                                    </a>
                                                </li>
                                                <li menuItemName="marketgoo" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-marketgoo">
                                                    <a href="store/marketgoo">
                                                        <i class="fas fa-ticket ls ls-search"></i>
                                                        SEO Tools

                                                    </a>
                                                </li>
                                                <li menuItemName="ox" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-ox">
                                                    <a href="store/professional-email">
                                                        <i class="fas fa-ticket ls ls-envelope"></i>
                                                        Professional Email

                                                    </a>
                                                </li>
                                                <li menuItemName="siteBuilder" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-siteBuilder">
                                                    <a href="store/site-builder">
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
                                                    <a href="cart/domain/renew">
                                                        <i class="fas fa-test ls ls-refresh"></i>
                                                        <span class="menu-item-content">
                                                            <span class="menu-item-title">Domain Renewals</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li menuItemName="Register a New Domain" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Register_a_New_Domain">
                                                    <a href="cart.php?a=add&domain=register">
                                                        <i class="fas fa-test ls ls-ticket-tag"></i>
                                                        <span class="menu-item-content">
                                                            <span class="menu-item-title">Register a New Domain</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li menuItemName="Transfer Domains to Us" class="dropdown-menu-item  "
                                                    id="Primary_Navbar-Store-Transfer_Domains_to_Us">
                                                    <a href="cart.php?a=add&domain=transfer">
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
                        </div>
                    </li>
                    <li menuItemName="Open Ticket" class=" nav-item-btn is-right" id="Primary_Navbar-Open_Ticket">
                        <nuxtLink class="btn btn-primary" to="/admin/orden"
                            @click="sendTitle('orden', 'Orden de compra')">
                            <span>Orden</span>
                        </nuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import Cookies from 'js-cookie'
import { ref } from 'vue';

const logout = () => {
    Cookies.remove('token')
    sessionStorage.setItem('successMessage', 'Sesión cerrada correctamente')

    return navigateTo('/login')
}

const linkClass = ref('panel')

const emit = defineEmits(['titleFromHeader'])
const sendTitle = (title, sendTitle) => {
    linkClass.value = title
    emit('titleFromHeader', sendTitle)
}

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
</script>

<style scoped>
/* Estilos del header del admin */
</style>