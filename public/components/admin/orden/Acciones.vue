<template>
    <div class="main-sidebar ">
        <div class="sidebar sidebar-primary">
        </div>
        <div class="sidebar sidebar-secondary">
            <div menuitemname="My Services Actions" class="panel panel-sidebar panel-default">
                <div class="panel-heading">
                    <h5 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp; Acciones
                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h5>
                </div>
                <div class="list-group">
                    <NuxtLink menuitemname="Place a New Order" to="/admin/orden/nuevo" class="list-group-item"
                        id="Secondary_Sidebar-My_Services_Actions-Place_a_New_Order">
                        <UIcon name="i-heroicons-shopping-cart-solid" class="w-4 h-4 mr-2 bg-blue-500" />
                        Nuevo pedido
                    </NuxtLink>
                    <a menuitemname="View Available Addons" href="/cart.php?gid=addons" class="list-group-item"
                        id="Secondary_Sidebar-My_Services_Actions-View_Available_Addons">
                        <i class="fas fa-ticket ls ls-addon"></i>
                        Comprar Complementos
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>