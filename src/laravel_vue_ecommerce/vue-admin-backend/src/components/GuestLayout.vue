<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                class="text-center text-2xl/9 font-bold tracking-tight text-gray-900"
            >
                {{ title }}
            </h2>
        </div>

        <form class="space-y-6 py-12" action="#" method="POST" style="border:">
            <slot></slot>
        </form>
    </div>
</template>

<script setup>
const { title } = defineProps({
    title: String,
});
</script>

<style scoped></style>
