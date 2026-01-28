<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white rounded shadow">
            <GuestLayout title="Entrar na sua conta">
                <form class="space-y-6" method="POST" @submit.prevent="login">
                    <div
                        v-if="errorMsg"
                        class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                    >
                        {{ errorMsg }}
                        <span
                            @click="errorMsg = ''"
                            class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-black/20"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </div>
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
                            :disbaled="loading"
                            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            :class="{
                                'cursor-not-allowed': loading,
                                'hover:bg-violet-500': loading,
                            }"
                        >
                            <svg
                                v-if="loading"
                                class="mr-3 -ml-1 size-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
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
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();

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
