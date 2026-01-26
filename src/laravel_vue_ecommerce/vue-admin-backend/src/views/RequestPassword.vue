<template>
    <GuestLayout title="Solicitar nova senha">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label
                    for="email"
                    class="flex text-sm/6 font-medium text-gray-100"
                    >Endereço de Email</label
                >
                <div class="mt-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <div class="text-sm">
                        <router-link
                            :to="{ name: 'login' }"
                            class="font-semibold text-indigo-400 hover:text-indigo-300"
                            >Lembra de sua senha?
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
</template>

<script setup lang="ts">
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style scoped></style>
