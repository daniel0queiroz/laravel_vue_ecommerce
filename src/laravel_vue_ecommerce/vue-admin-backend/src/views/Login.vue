<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white rounded shadow">
            <GuestLayout title="Entrar na sua conta">
                <form class="space-y-6" method="POST" @submit.prevent="login">
                    <input type="hidden" name="remember" value="true" />
                    <div>
                        <label
                            for="email-address"
                            class="block text-left text-sm/6 font-medium text-gray-700 mb-1"
                        >
                            Endereço de Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email-address"
                            autocomplete="email"
                            required
                            v-model="user.email"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>

                    <div>
                        <label
                            for="password"
                            class="block text-left text-sm/6 font-medium text-gray-700 mb-1"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autocomplete="current-password"
                            required
                            v-model="user.password"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <div class="flex items-center justify-between mt-3">
                            <div class="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    name="remember-me"
                                    v-model="user.remember"
                                    class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label
                                    for="remember-me"
                                    class="ml-2 block text-sm text-gray-900 select-none"
                                >
                                    Lembrar-me
                                </label>
                            </div>
                            <div class="text-sm">
                                <router-link
                                    :to="{ name: 'requestPassword' }"
                                    class="font-semibold text-indigo-400 hover:text-indigo-300"
                                    >Esqueceu sua senha?</router-link
                                >
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </GuestLayout>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import GuestLayout from "../components/GuestLayout.vue";
import store from "../store";
import router from "../router";

const loading = ref(false);
let errorMsg = ref("");

const user = {
    email: "",
    password: "",
    remember: false,
};

function login() {
    loading.value = true;
    store
        .dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({ name: "app.dashboard" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>

<style scoped></style>
