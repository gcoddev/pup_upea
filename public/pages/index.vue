<template>
    <div class="relative overflow-hidden pt-12 pb-24 mt-7">
        <div class="container px-4 mx-auto">
            <div class="flex flex-wrap xl:items-center -m-8">
                <div class="w-full md:w-1/2 xl:w-1/2 p-8 xl:p-12">
                    <div class="md:inline-block relative">
                        <div class="overflow-hidden rounded-lg">
                            <img class="w-full md:w-auto rounded-lg transform hover:scale-105 transition ease-in-out woduration-1000"
                                src="~/public/images/upea.png" alt="">

                        </div>
                        <div class="p-8 absolute bottom-0 left-0 w-full hidden">
                            <div class="p-11 bg-black bg-opacity-70 backdrop-blur-xl rounded-lg">
                                <p class="mb-6 text-sm text-opacity-60 font-semibold uppercase tracking-px text-center">
                                    Promo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 xl:flex-1 p-8 xl:p-12">
                    <div class="xl:max-w-2xl">
                        <h1
                            class="mb-7 text-4xl md:text-5xl xl:text-7xl font-extrabold font-heading tracking-px-n leading-none text-center md:text-left">
                            Plataforma Universitaria de Pagos</h1>
                        <p class="mb-9 text-sm md:text-lg font-medium md:w-full text-center md:text-left">
                            Simplificamos los pagos académicos y administrativos, ofreciendo una
                            experiencia eficiente para toda la comunidad universitaria.
                        </p>
                        <div class="mx-6">
                            <div
                                class="mb-16 p-1.5 xl:pl-7 inline-block md:max-w-xl w-full border border-gray-200 rounded-3xl focus-within:ring focus-within:ring-blue-500">
                                <div class="flex flex-wrap items-center" @keyup.enter="searchCarrera()">
                                    <div class="w-full  xl:flex-1">
                                        <input
                                            class="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 placeholder-gray-600 outline-none"
                                            name="domain" id="searchDomain" type="text" placeholder="Buscar carrera"
                                            v-model="search">
                                    </div>
                                    <div class="w-full xl:w-auto">
                                        <div class="block">
                                            <button type="submit"
                                                class="py-4 px-7 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                                                @click="searchCarrera()">Encontrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" text-center -m-8 px-5">
                            De la universidad, para la universidad.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})

useHead({
    title: 'Plataforma Universitaria de Pagos UPEA'
})

import { ref } from 'vue'

const search = ref('')
const searchCarrera = () => {
    localStorage.setItem('carrera', search.value)
    navigateTo('/convocatoria')
}
</script>