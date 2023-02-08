<script setup>
import { ref } from "vue"

import MainLogo from "./icons/MainLogo.vue"
import MenuIcon from "./icons/MenuIcon.vue"
import UserIcon from "./icons/UserIcon.vue"
import MobileMenu from "./MobileMenu.vue"

const menuStatus = ref(false)

const mobileMenuToggle = () => {
    console.log("mobileMenuToggle")
    menuStatus.value = !menuStatus.value
}

</script>

<template>
    <MobileMenu class="md:hidden" @close="mobileMenuToggle" v-show="menuStatus"></MobileMenu>

    <header class="mb-5">
        <nav class="flex gap-x-4 justify-between items-center">
            <div class="flex items-center gap-x-1">
                <MainLogo></MainLogo>
                <div>
                    <h1 class="font-yekan font-bold text-sm">ایران یک، دو، سه</h1>
                    <h3 class="text-xs hidden">آکادمی انلاین تخصصی هک و تامین امنیت</h3>
                </div>
            </div>
            <div class="flex gap-x-2">
                <button>
                    <UserIcon></UserIcon>
                </button>
                <button @click="mobileMenuToggle">
                    <MenuIcon></MenuIcon>
                </button>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>