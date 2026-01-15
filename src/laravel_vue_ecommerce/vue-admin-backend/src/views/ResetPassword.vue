<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-900">
    <body class="h-full">
    ```
  -->
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white"
            >
                Defina uma nova senha
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                            required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
                            required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
        </div>
    </div>
</template>

<style scoped></style>
