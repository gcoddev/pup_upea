<template>
    <div class="main-sidebar hidden-xs hidden-sm hidden-md ">
        <div class="sidebar-sticky" data-sidebar-sticky>
            <div menuItemName="Categories" class="panel panel-sidebar">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        <i class="fas fa-shopping-cart"></i>&nbsp;
                        Categorías
                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h3>
                </div>


                <div class="list-group">
                    <a href="#" class="list-group-item" :class="categoria == 'estudiantes'"
                        @click="sendCategory('estudiantes')">
                        <UIcon name="i-heroicons-academic-cap-solid" class="w-4 h-4" />
                        Estudiantes
                    </a>
                    <a href="#" class="list-group-item" :class="categoria == 'docentes'"
                        @click="sendCategory('docentes')">
                        <UIcon name="i-heroicons-document-duplicate-solid" class="w-4 h-4" />
                        Docentes
                    </a>
                    <a href="#" class="list-group-item" :class="categoria == 'administrativos'"
                        @click="sendCategory('administrativos')">
                        <UIcon name="i-heroicons-building-office-solid" class="w-4 h-4" />
                        Administrativos
                    </a>
                </div>

            </div>


            <div menuItemName="Actions" class="panel panel-sidebar">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp;

                        Actions


                        <i class="fa fa-chevron-up panel-minimise pull-right"></i>
                    </h3>
                </div>


                <div class="list-group">
                    <a menuItemName="Domain Registration" href="../cart2029.html?a=add&amp;domain=register"
                        class="list-group-item" id="Secondary_Sidebar-Actions-Domain_Registration">
                        <i class="fas fa-ticket ls ls-dns"></i>&nbsp;

                        Register a New Domain

                    </a>
                    <a menuItemName="Domain Transfer" href="../cart7c76.html?a=add&amp;domain=transfer"
                        class="list-group-item" id="Secondary_Sidebar-Actions-Domain_Transfer">
                        <i class="fas fa-ticket ls ls-transfer"></i>&nbsp;

                        Transfer in a Domain

                    </a>
                    <a menuItemName="View Cart" href="../cart17cb.html?a=view" class="list-group-item"
                        id="Secondary_Sidebar-Actions-View_Cart">
                        <i class="fas fa-ticket ls ls-basket"></i>&nbsp;

                        View Cart

                    </a>
                </div>

            </div>


        </div>
    </div>
</template>

<script setup>
const categoria = ref('estudiantes')

const emit = defineEmits(['viewCategory'])
const sendCategory = (category) => {
    categoria.value = category
    emit('viewCategory', category)
}
</script>