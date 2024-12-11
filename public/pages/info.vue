<template>
    <div>

        <section class="py-10">
            <div class="container px-4 mx-auto">
                <div class="max-w-2xl mx-auto text-center">
                    <div class="flex mb-2 items-center justify-center text-gray-400">
                        <NuxtLink class="text-xs" to="/">Portada</NuxtLink>
                        <svg class="w-3 h-3 mx-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                        <a class="text-xs" href="#">Plataforma Universitaria de Pagos</a>
                    </div>
                    <h2 class="mb-6 text-4xl lg:text-5xl font-extrabold font-heading text-blue-500">
                        Información de uso del servicio
                    </h2>
                </div>
                <!-- <div class="">
                    <img class="m-auto w-full md:w-1/2"
                        src="https://boliviahost.com/storage/app/uploads/public/62c/86e/0d4/62c86e0d420b9356967495.png"
                        alt="">
                </div> -->
            </div>
        </section>

        <section class="">
            <div class="container px-4 mx-auto">
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-3xl font-extrabold font-heading"></h2>
                    <p class="text-lg text-gray-500 leading-loose"></p>
                    <h1>Acerca del servicio</h1>
                    <p>
                        <br>
                    </p>
                    <p>
                        El presente servicio web API tiene por objetivo proveer una plataforma para poder realizar pagos
                        de manera digital o en linea, para tramites académicos y/o administrativos. Con el fin de dar
                        solución a uno de los problemas actual de no contar con un sistema capaz de proveer información
                        acerca de los pagos realizados en la cuenta de recursos propios de la Universidad Pública de El
                        Alto.
                    </p>
                    <p>
                        <br>
                    </p>

                    <h3>Políticas de uso</h3>

                    <p>
                        <br>
                    </p>

                    <p>
                        De manera que la Plataforma Universitaria de Pagos usa los registros almacenados en la base de
                        datos de la universidad, cada persona es responsable de cuidar su información de acceso al
                        sistema, este servicio no usa sus datos relativamente para otro uso, toda la información esta
                        protegida con claves transaccionales para evitar posibles secuestros de datos.
                    </p>

                    <p>
                        <br>
                    </p>
                    <h3>Aplicaciones del servicio</h3>
                    <p>
                        <br>
                    </p>

                    <table border="1">
                        <thead>
                            <tr>
                                <th style="width: 22.6916%;">
                                    <div style="text-align: left;">Tipo</div>
                                </th>
                                <th style="width: 43.1916%;">
                                    <div style="text-align: left;">Descripción</div>
                                </th>
                                <th style="width: 34.0599%;">
                                    <div style="text-align: left;">Ejemplos de uso</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 22.6916%;">
                                    <div style="text-align: left;"><strong>SESIÓN</strong></div>
                                </td>
                                <td style="width: 43.1916%;">

                                    <p>
                                        Esta pagina usa el servicio de Plataforma Universitaria de Pagos para sesiones
                                        únicas desde un navegador, solo esta plataforma tiene acceso al uso del servicio
                                        completo.
                                    </p>
                                    <p>
                                        <br>
                                    </p>

                                    <p>
                                        El servicio esta limitado a tener un único usuario para todas esos tipos de
                                        personas.

                                    </p>
                                    <p>
                                        <br>
                                    </p>
                                </td>
                                <td style="width: 34.0599%;">

                                    <ul>
                                        <li>Las sesiones por personas se basan en registros de la base de datos de la
                                            universidad respecto al tipo de persona: estudiante, docente y/o personal
                                            administrativos.</li>
                                        <br>
                                        <li>Este tipo se asigna solo a la sesión actual que dura 2 hrs.</li>
                                    </ul>

                                    <p>
                                        <br>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 22.6916%;">
                                    <div style="text-align: left;"><strong>GOOGLE AUTH</strong></div>
                                </td>
                                <td style="width: 43.1916%;">

                                    <p>
                                        Para facilitar la sesión, la plataforma cuenta con inicio de sesión por google
                                        desde el apartado de <strong>Seguridad</strong> del perfil, donde con un
                                        determinado correo electrónico de google podrá vincularse a esa cuenta para
                                        futuros inicios de sesión.
                                    </p>
                                    <p>
                                        <br>
                                    </p>
                                </td>
                                <td style="width: 34.0599%;">

                                    <ul>
                                        <li>Vinculación con Google por email y la misma cuenta</li>
                                        <br>
                                        <li>Es la misma forma de autenticación que por usuario y contraseña.</li>
                                    </ul>

                                    <p>
                                        <br>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 22.6916%;">
                                    <div style="text-align: left;"><strong>ENVIÓ DE MAILS</strong></div>
                                </td>
                                <td style="width: 43.1916%;">

                                    <p>
                                        La plataforma permite enviar correos electrónicos a los estudiantes, docentes
                                        y/o personal
                                        administrativos para notificarles sobre los pagos realizados, así como para
                                        notificarles
                                        sobre los trámites que están en proceso de realización.
                                    </p>
                                    <p>
                                        <br>
                                    </p>
                                </td>
                                <td style="width: 34.0599%;">

                                    <ul>
                                        <li>
                                            En envió de emails no es para fines de <strong>spam</strong>, si desea no
                                            recibir emails podrá ajustarlo en configuración del sitio.
                                        </li>
                                        <br>
                                        <li>
                                            Los emails son enviados a las direcciones de correo electrónico registradas
                                            en la
                                            base de datos de la universidad o al que modifico al momento del registro.
                                        </li>
                                        <br>
                                        <li>
                                            Puede cambiar el correo electrónico donde recibirá los emails.
                                        </li>
                                    </ul>

                                    <p>
                                        <br>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        <br>
                    </p>
                    <h3>Mas información de uso del servicio</h3>
                    <p>
                        <br>
                    </p>

                    <p><strong>Manual de uso del sistema:</strong></p>

                    <p>
                        <a href="/docs/ManualUsuario_PUP.pdf" target="_blank">Manual de usuario de la Plataforma
                            Universitaria de Pagos</a>
                    </p>

                    <p>
                        <br>
                    </p>
                    <p><strong>Documentación de la API:</strong></p>

                    <p>
                        <a :href="`${baseUrl}/api/docs`">Documentación API</a>
                    </p>

                    <p>
                        <br>
                    </p>

                    <h3>Actualizaciones de la plataforma</h3>

                    <p>
                        <br>
                    </p>

                    <p>
                        Por ser un proyecto inicial, los cambios son variables, debido a la escalabilidad del sistema
                        puede cambiar. Cabe destacar que para algún cambio la debida actualización estará presente y
                        notificada a cada usuario para evitar problemas de desinformación.
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        <br>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})

const config = useRuntimeConfig();
const baseUrl = ref(config.public.baseUrl)
</script>