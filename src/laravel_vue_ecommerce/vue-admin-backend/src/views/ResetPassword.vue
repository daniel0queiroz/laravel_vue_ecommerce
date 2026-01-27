<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white rounded shadow">
            <GuestLayout title="Defina uma nova senha">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            for="new-password"
                            class="flex text-sm/6 font-medium text-gray-100"
                            >Nova Senha</label
                        >
                        <div class="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="new-password"
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                placeholder="Nova Senha"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="password-repeat"
                            class="flex text-sm/6 font-medium text-gray-100"
                            >Confirme a Nova Senha</label
                        >
                        <div class="mt-2">
                            <input
                                type="password"
                                name="password_repeat"
                                id="password-repeat"
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                placeholder="Confirme a Nova Senha"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <router-link
                                    :to="{ name: 'login' }"
                                    class="font-semibold text-indigo-400 hover:text-indigo-300"
                                    >Voltar para Login
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </GuestLayout>
        </div>
    </div>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style scoped></style>
