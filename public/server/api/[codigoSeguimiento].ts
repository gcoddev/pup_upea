import { defineEventHandler, getRouterParam, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    // Obtener el código de la URL
    const codigoSeguimiento = getRouterParam(event, 'codigoSeguimiento');

    // Leer el cuerpo del POST
    const body = await readBody(event);

    // Validar que exista un cuerpo en la petición
    if (!body || !codigoSeguimiento) {
        return {
            statusCode: 400,
            message: 'Código de seguimiento o datos no válidos',
        };
    }

    try {
        // Realizar la petición PATCH a otro servicio
        const response = await $fetch(`http://otro-servidor.com/endpoint`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: {
                codigoSeguimiento, // Pasar el código capturado
                ...body,           // Agregar datos del body original
            },
        });

        // Retornar la respuesta del PATCH
        return {
            statusCode: 200,
            message: 'Petición procesada correctamente',
            data: response,
        };
    } catch (error) {
        return {
            statusCode: 500,
            message: 'Error procesando la petición',
            error: error,
        };
    }
});
