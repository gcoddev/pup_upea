<template>
    <center>
        <table align="center" border="0" id="bodyTable">
            <tr>
                <td align="center" valign="top" id="bodyCell">
                    <table border="0" id="templateContainer">
                        <tr>
                            <td align="center" valign="top">
                                <table border="0" id="templateHeader">
                                    <tr>
                                        <td valign="top" class="headerContent">
                                            <a href="https://pup.upea.bo" class="d-flex align-items-center">
                                                <h1 class="h2 p-3 text-center" style="color: black !important;">
                                                    Plataforma Universitaria de Pagos - UPEA
                                                </h1>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" v-if="mail">
                                <table border="0" id="templateBody">
                                    <tr>
                                        <td valign="top" class="bodyContent">
                                            <p v-if="mail.orden.persona">
                                                Hola {{ mail.orden.persona.nombres }}
                                                {{ mail.orden.persona.paterno }}
                                                {{ mail.orden.persona.materno }}!
                                            </p>
                                            <p v-if="mail.orden.user">
                                                Hola {{ mail.orden.user.nombres }}
                                                {{ mail.orden.user.paterno }}
                                                {{ mail.orden.user.materno }}!
                                            </p>
                                            <br>
                                            <p>
                                                <b>Asunto: </b> {{ mail.subject }}
                                            </p>
                                            <br>
                                            <p>{{ mail.content }}</p>
                                            <br>
                                            <p>
                                                <b>Fecha:</b> {{ mail.fecha }}<br>
                                                <b>Concepto:</b>

                                            <ul style="margin-left:20px;">
                                                <li v-for="(con, id) of mail.orden.conceptos" :key="id">
                                                    Bs. {{ con.costo }} - {{ con.concepto.concepto }}
                                                </li>
                                                <li>Bs. {{ mail.orden.comision }} - Comisión</li>
                                            </ul>
                                            <br>
                                            <b>Monto total:</b> Bs. {{ mail.orden.montoTotal }}<br>
                                            </p>
                                            <p>
                                                Ingrese a
                                                <a :href="`${baseUrl}/comprobante?cod=${mail.orden.codigoTransaccion}`"
                                                    target="_blank">
                                                    {{ baseUrl }}/comprobante?cod?{{ mail.orden.codigoTransaccion }}
                                                </a>
                                                para ver detalles de su pedido.
                                            </p>
                                            <p>
                                                <br />
                                                Plataforma Universitaria de pagos <br />
                                                <a :href="baseUrl" target="_blank">{{ baseUrl }}</a>
                                            </p>
                                            <!-- message footer start -->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">
                                <table border="0" id="templateFooter">
                                    <tr>
                                        <td valign="top" class="footerContent text-center">
                                            <a :href="`${baseUrl}`" target="_blank">Visita nuestra web</a>
                                            <span class="hide-mobile"> | </span>
                                            <a :href="`${baseUrl}/login`" target="_blank">
                                                Ingrese a su cuenta
                                            </a>
                                            <br />
                                            Copyright © Plataforma Universitaria de Pagos - UPEA
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>

</template>

<style scoped>
.ExternalClass,
.ExternalClass div,
.ExternalClass font,
.ExternalClass p,
.ExternalClass span,
.ExternalClass td,
h1,
img {
    line-height: 100%
}

h1,
h2 {
    display: block;
    font-family: Helvetica;
    font-style: normal;
    font-weight: 700
}

#outlook a {
    padding: 0
}

.ExternalClass,
.ReadMsgBody {
    width: 100%
}

a,
blockquote,
body,
li,
p,
table,
td {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table,
td {
    mso-table-lspace: 0;
    mso-table-rspace: 0;
}

img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    outline: 0;
    text-decoration: none
}

table {
    border-collapse: collapse !important
}

#bodyCell,
#bodyTable,
body {
    height: 100% !important;
    margin: 0;
    padding: 0;
    width: 100% !important
}

#bodyCell {
    padding: 20px;
}

#templateContainer {
    width: 600px;
    border: 1px solid #ddd;
    background-color: #fff
}

#bodyTable,
body {
    background-color: #FAFAFA
}

h1 {
    color: #202020 !important;
    font-size: 26px;
    letter-spacing: normal;
    text-align: left;
    margin: 0 0 10px
}

h2 {
    color: #404040 !important;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: normal;
    text-align: left;
    margin: 0 0 10px
}

h3,
h4 {
    display: block;
    font-style: italic;
    font-weight: 400;
    letter-spacing: normal;
    text-align: left;
    margin: 0 0 10px;
    font-family: Helvetica;
    line-height: 100%
}

h3 {
    color: #606060 !important;
    font-size: 16px
}

h4 {
    color: grey !important;
    font-size: 14px
}

.headerContent {
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
    color: #505050;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    text-align: left;
    vertical-align: middle;
    padding: 0
}

.bodyContent,
.footerContent {
    font-family: Helvetica;
    line-height: 150%;
    text-align: left;
}

.footerContent {
    text-align: center
}

.bodyContent pre {
    padding: 15px;
    background-color: #444;
    color: #f8f8f8;
    border: 0
}

.bodyContent pre code {
    white-space: pre;
    word-break: normal;
    word-wrap: normal
}

.bodyContent table {
    margin: 10px 0;
    background-color: #fff;
    border: 1px solid #ddd
}

.bodyContent table th {
    padding: 4px 10px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    font-weight: 700;
    text-align: center
}

.bodyContent table td {
    padding: 3px 8px;
    border: 1px solid #ddd
}

.table-responsive {
    border: 0
}

.bodyContent a {
    word-break: break-all
}

.headerContent a .yshortcuts,
.headerContent a:link,
.headerContent a:visited {
    color: #1f5d8c;
    font-weight: 400;
    text-decoration: none;
}

#headerImage {
    height: auto;
    max-width: 600px;
    padding: 20px
}

#templateBody {
    background-color: #fff
}

.bodyContent {
    color: #505050;
    font-size: 14px;
    padding: 20px
}

.bodyContent a .yshortcuts,
.bodyContent a:link,
.bodyContent a:visited {
    color: #1f5d8c;
    font-weight: 400;
    text-decoration: underline
}

.bodyContent a:hover {
    text-decoration: none
}

.bodyContent img {
    display: inline;
    height: auto;
    max-width: 560px
}

.footerContent {
    color: grey;
    font-size: 12px;
    padding: 20px
}

.footerContent a .yshortcuts,
.footerContent a span,
.footerContent a:link,
.footerContent a:visited {
    color: #606060;
    font-weight: 400;
    text-decoration: underline
}

@media only screen and (max-width: 640px) {

    h1,
    h2,
    h3,
    h4 {
        line-height: 100% !important;
    }

    #templateContainer {
        max-width: 600px !important;
        width: 100% !important
    }

    #templateContainer,
    body {
        width: 100% !important
    }

    a,
    blockquote,
    body,
    li,
    p,
    table,
    td {
        -webkit-text-size-adjust: none !important
    }

    body {
        min-width: 100% !important
    }

    #bodyCell {
        padding: 10px !important
    }

    h1 {
        font-size: 24px !important
    }

    h2 {
        font-size: 20px !important
    }

    h3 {
        font-size: 18px !important
    }

    h4 {
        font-size: 16px !important
    }

    #templatePreheader {
        display: none !important
    }

    .headerContent {
        font-size: 20px !important;
        line-height: 125% !important
    }

    .footerContent {
        font-size: 14px !important;
        line-height: 115% !important
    }

    .footerContent a {
        display: block !important
    }

    .hide-mobile {
        display: none;
    }
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const config = useRuntimeConfig();
const baseUrl = ref(config.public.baseUrl)

const mail = ref(null)
const getMail = async (id) => {
    try {
        const data = await useApiFetch('/mail/' + id)
        mail.value = data

        console.log(mail.value)
    } catch (err) {
        console.log(err.data)
    }
}

const route = useRoute();
onMounted(() => {
    const id = route.query.id;

    getMail(id)
});
</script>