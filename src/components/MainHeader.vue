<script setup>
import { ref } from "vue"
import MainLogo from "./icons/MainLogo.vue"
import MenuIcon from "./icons/MenuIcon.vue"
import SearchIcon from "./icons/SearchIcon.vue"
import CloseIcon from "./icons/CloseIcon.vue"
import MobileMenu from "./MobileMenu.vue"
import DesktopMenu from "./DesktopMenu.vue"
import DarkmodeSwitch from "./DarkmodeSwitch.vue"
import AccountButton from "./AccountButton.vue"
import MainModal from "./MainModal.vue"
import AccountModal from "./AccountModal.vue"

const body = document.querySelector("body");
const searchView = ref(false)
const menuStatus = ref(false)

const mobileMenuToggle = () => {
    console.log("mobileMenuToggle")
    menuStatus.value = !menuStatus.value
    body.classList.toggle("overflow-hidden")
}

const showModal = ref(false)
const toggleModal = () => {
    showModal.value = !showModal.value
    body.classList.toggle("overflow-hidden")
}
</script>

<template>
    <section>
        <MobileMenu class="md:hidden" @close="mobileMenuToggle" v-show="menuStatus"></MobileMenu>
        <header class="my-4">
            <section v-if="searchView"
                class="flex items-center justify-between gap-x-4 mb-4 transition-all duration-150 ease-linear">
                <input type="text" class="w-full py-2 bg-transparent" placeholder="جستوجو کنید...">
                <button class="flex" @click="searchView = false">
                    <CloseIcon />
                </button>
            </section>
            <nav class="flex gap-x-6 justify-between items-center">

                <div class="flex items-center gap-x-5">
                    <div class="flex items-center gap-x-1">
                        <a href="/">
                            <MainLogo class="w-10"></MainLogo>
                        </a>
                        <div>
                            <h1 class="font-yekan font-extrabold md:font-black text-zinc-900 dark:text-white text-base">
                                ایران یک، دو، سه</h1>
                            <h3 id="brand-description"
                                class="font-light mt-1 hidden lg:block text-zinc-400 dark:text-zinc-300 leading-4">
                                آکادمی انلاین تخصصی هک و تامین امنیت</h3>
                        </div>
                    </div>

                    <DesktopMenu class="md:flex lg:hidden"></DesktopMenu>
                </div>

                <div class="flex gap-x-5 md:hidden">
                    <AccountButton @click="toggleModal"></AccountButton>
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
                        <SearchIcon @click="searchView = !searchView"></SearchIcon>
                    </button>
                    <button>
                        <AccountButton @click="toggleModal"></AccountButton>
                    </button>
                </div>

                <transition name="fade">
                    <MainModal @close="toggleModal" v-if="showModal">
                        <AccountModal></AccountModal>
                    </MainModal>
                </transition>
            </nav>
        </header>
</section>
</template>

<style scoped>
#brand-description {
    font-size: 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>