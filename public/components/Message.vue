<template>
    <div :class="`alert alert-${status} d-flex justify-content-between`" v-if="message">
        {{ message }}
        <UIcon name="i-heroicons-x-mark" class="w-5 h-5 cursor-pointer" @click="closeMessage" />
    </div>
</template>

<script setup>
const props = defineProps({
    message: String,
    status: String
});

const emit = defineEmits(['close']);

const closeMessage = () => {
    emit('close');
};
</script>