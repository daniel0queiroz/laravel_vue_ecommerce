<template>
    <div class="w-[200px] transition-all bg-indigo-700 text-white py-4 px-2">
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-2 rounded transition-colors hover:bg-black/30"
        >
            <span class="mr-2 text-white"><HomeIcon class="w-5" /></span>
            <span class="text-xs text-white">Dashboard</span>
        </router-link>
        <router-link
            :to="{ name: 'app.products' }"
            class="flex items-center p-2 rounded transition-colors hover:bg-black/30"
        >
            <span class="mr-2 text-white"><ListBulletIcon class="w-5" /></span>
            <span class="text-xs text-white">Products</span>
        </router-link>
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-2 rounded transition-colors hover:bg-black/30"
        >
            <span class="mr-2 text-white"><UsersIcon class="w-5" /></span>
            <span class="text-xs text-white">Users</span>
        </router-link>
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-2 rounded transition-colors hover:bg-black/30"
        >
            <span class="mr-2 text-white"><ChartBarIcon class="w-5" /></span>
            <span class="text-xs text-white">Reports</span>
        </router-link>
    </div>
</template>

<script setup>
import {
    HomeIcon,
    UsersIcon,
    ListBulletIcon,
    ChartBarIcon,
} from "@heroicons/vue/24/outline";
</script>

<style scoped></style>
