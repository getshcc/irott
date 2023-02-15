<script setup>

import { ref } from 'vue'
const signupText = ref(false)
function toggleSignupText() {
    signupText.value = !signupText.value
}
</script>

<template>
    <div
        class="min-w-[400px] md:w-[700px] lg:w-[900px] h-auto bg-white dark:bg-zinc-800 rounded-md mb-44 grid grid-cols-1 md:grid-cols-2 shadow-xl">

        <div class="p-5 flex flex-col justify-between">
            <div>
                <div class="flex justify-between pb-12">
                    <h4 class="font-extrabold text-lg">ورود به حساب کاربری</h4>
                </div>
                <div class="flex flex-col gap-y-2 items-start">
                    <label class="text-sm" for="num">شماره موبایل خود را وارد کنید:</label>
                    <input type="number" class="bg-zinc-100 w-full p-3 mt-1 rounded-md dark:bg-zinc-900/80 apperance-none"
                        name="" id="" placeholder="شماره همراه">

                    <button @click="toggleSignupText" class="text-xs text-blue-500">تا کنون ثبت نام نکرده اید؟</button>
                    <p class="text-xs text-zinc-400 mt-1" v-if="signupText">اگر قبلا ثبت نام نکرده اید "کد ثبت‌نام"
                        برای شما
                        ارسال میشود.</p>
                </div>
                <div class="flex flex-col items-start gap-y-4 pt-4">
                    <button class="rounded-md font-extrabold">ورود</button>
                </div>
            </div>
        </div>

        <div class="hidden md:flex">
            <img class="rounded-l-md w-full" src="../assets/imgs/magic_two.jpg" alt="">
        </div>
</div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>