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
                    <input type="number"
                        class="bg-zinc-100 focus:bg-zinc-200/70 focus:ring-2 ring-offset-2 dark:ring-offset-zinc-800 dark:ring-zinc- transition duration-150 w-full p-4 mt-1 rounded-md dark:bg-zinc-900/80 apperance-none text-sm"
                        name="" id="" placeholder="شماره همراه">

                    <button @click="toggleSignupText" class="text-xs text-blue-500 dark:text-blue-400 mt-1">تا کنون ثبت نام نکرده اید؟</button>
                    <div class="h-4">
                        <Transition name="fade">
                            <p v-if="signupText" class="text-xs text-zinc-400 dark:text-zinc-400/90 ">اگر قبلا ثبت نام نکرده اید "کد ثبت‌نام"
                                برای شما
                                ارسال میشود.</p>
                        </Transition>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-y-4 pt-4">
                    <button
                        class="rounded-md font-extrabold bg-blue-500 hover:bg-blue-600 px-8 py-2 text-white">ورود</button>
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>