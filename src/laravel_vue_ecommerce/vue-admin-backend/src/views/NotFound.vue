<template>
    <div class="flex justify-center items-center min-h-full w-full min-w-full">
        <div class="flex">
            <div
                class="text-violet-600 self-start text-5xl p-8 font-bold border-r pb-8 leading-10"
            >
                404
            </div>
            <div class="px-8 flex flex-col items-start">
                <h1 class="text-5xl font-bold mb-2">Página Não Encontrada</h1>
                <p class="text-gray-400 mb-10">
                    Por favor cheque a url na barra de endereço e tente
                    novamente.
                </p>
                <div>
                    <router-link
                        :to="{ name: 'app.dashboard' }"
                        class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Voltar para Página Inicial
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
