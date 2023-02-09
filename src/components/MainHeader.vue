<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import MainLogo from "./icons/MainLogo.vue"
import MenuIcon from "./icons/MenuIcon.vue"
import UserIcon from "./icons/UserIcon.vue"
import SearchIcon from "./icons/SearchIcon.vue"
import MobileMenu from "./MobileMenu.vue"
import DesktopMenu from "./DesktopMenu.vue"
import DarkmodeSwitch from "./DarkmodeSwitch.vue"
import AccountButton from "./AccountButton.vue"


const menuStatus = ref(false)

const mobileMenuToggle = () => {
    console.log("mobileMenuToggle")
    menuStatus.value = !menuStatus.value
}

</script>

<template>
    <MobileMenu class="md:hidden" @close="mobileMenuToggle" v-show="menuStatus"></MobileMenu>

    <header class="mb-5 py-2">
        <nav class="flex gap-x-6 justify-between items-center">

            <div class="flex items-center gap-x-5">
                <div class="flex items-center gap-x-1">
                    <a href="/">
                        <MainLogo class="w-10"></MainLogo>
                    </a>
                    <div>
                        <h1 class="font-yekan font-extrabold md:font-black text-zinc-900 dark:text-white text-base">
                            ایران یک، دو، سه</h1>
                        <h3 class="text-xs font-light mt-1 hidden lg:block text-zinc-400 dark:text-zinc-300 leading-4">
                            آکادمی انلاین تخصصی هک و تامین امنیت</h3>
                    </div>
                </div>

                <DesktopMenu class="md:flex lg:hidden"></DesktopMenu>
            </div>

            <div class="flex gap-x-5 md:hidden">
                <button>
                    <UserIcon></UserIcon>
                </button>
                <button @click="mobileMenuToggle">
                    <MenuIcon></MenuIcon>
                </button>
            </div>

            <DesktopMenu class="lg:flex font-medium"></DesktopMenu>


            <div class="hidden md:flex justify-end text-sm gap-x-3">
                <button>
                    <DarkmodeSwitch></DarkmodeSwitch>
                </button>
                <button>
                    <SearchIcon></SearchIcon>
                </button>
                <button>
                    <AccountButton></AccountButton>
                </button>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>