export enum EstadoPagoName {
    PROCESADO = 'Procesado',
    EN_PROCESO = 'En proceso',
    EXPIRADO = 'Expirado',
    FALLIDO = 'Fallido',
    ANULADO = 'Anulado'
}

export enum Estado {
    PROCESADO = 'status-paid',
    EN_PROCESO = 'status-pending',
    EXPIRADO = 'status-dead',
    FALLIDO = 'status-unpaid',
    ANULADO = 'status-closed'
}

export enum EstadoLabel {
    PROCESADO = 'label-success',
    EN_PROCESO = 'label-warning',
    EXPIRADO = 'status-dead',
    FALLIDO = 'label-danger',
    ANULADO = 'label-default'
}

export enum EstadoPago {
    PROCESADO = 'PROCESADO',
    EN_PROCESO = 'EN_PROCESO',
    EXPIRADO = 'EXPIRADO',
    FALLIDO = 'FALLIDO',
    ANULADO = 'ANULADO'
}

export enum EstadoBg {
    PROCESADO = 'bg-green-400',
    EN_PROCESO = 'bg-orange-400',
    EXPIRADO = 'bg-gray-500',
    FALLIDO = 'bg-red-500',
    ANULADO = 'bg-gray-400'
}

export enum EstadoText {
    PROCESADO = 'text-success',
    EN_PROCESO = 'text-warning',
    EXPIRADO = 'text-secondary',
    FALLIDO = 'text-danger',
    ANULADO = 'text-light'
}