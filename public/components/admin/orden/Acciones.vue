<template>
    <div class="main-sidebar ">
        <div class="sidebar sidebar-primary">
        </div>
        <div class="sidebar sidebar-secondary">
            <div class="panel panel-sidebar panel-default">
                <div class="panel-heading">
                    <h5 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp; Acciones
                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h5>
                </div>
                <div class="list-group">
                    <NuxtLink to="/admin/orden" class="list-group-item" :class="option == 'pedidos' ? 'active' : ''"
                        id="Secondary_Sidebar-My_Services_Actions-Place_a_New_Order">
                        <UIcon name="i-heroicons-shopping-cart-solid" class="w-4 h-4 mr-2 bg-blue-500" />
                        Pedidos personales
                    </NuxtLink>
                    <NuxtLink to="/admin/orden/todos" class="list-group-item" :class="option == 'todos' ? 'active' : ''"
                        id="Secondary_Sidebar-My_Services_Actions-Place_a_New_Order" v-if="user.data.role == 'admin'">
                        <UIcon name="i-heroicons-presentation-chart-line-solid" class="w-4 h-4 mr-2 bg-blue-500" />
                        Todos los pedidos
                    </NuxtLink>
                    <br>
                    <NuxtLink to="/admin/orden/nuevo" class="list-group-item"
                        id="Secondary_Sidebar-My_Services_Actions-Place_a_New_Order">
                        <UIcon name="i-heroicons-plus-16-solid" class="w-4 h-4 mr-2 bg-blue-500" />
                        Nuevo pedido
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Role } from '~/enums/Role.enum';
const route = useRoute()
const option = ref('')
import { useUserStore } from '~/stores/user'
const user = useUserStore()

onMounted(() => {
    const ruta = route.path.split('/')

    if (ruta[3] && !ruta[4]) {
        option.value = ruta[3]
    } else if (ruta[4]) {
        option.value = ruta[4]
    } else {
        option.value = 'pedidos'
    }
})
</script>