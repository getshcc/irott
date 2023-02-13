<template>
    <section class="flex flex-col gap-y-6 justify-center md:pt-16 pb-24 px-5 3xl:px-0">
        <!-- Main Text -->
        <div class="font-black">
            <h1
                class="dark:text-white bg-gradient-to-b text-transparent bg-clip-text from-[#FF6666] to-[#ff5656] leading-[100px] text-[4.4rem] min-w-[400px] w-auto text-center">
                <span>
                    دروازه ورود شما
                </span>

                <span class="lg:block dark:text-white">
                    <span class="md:text-[2rem] lg:text-[4.4rem] lg:ml-4">به دنیای</span>
                    <span class="block lg:inline-block">هک و تامین امنیت</span>
                    <!-- <span class="font-black dark:text-white">ایران 123</span> -->
                </span>
            </h1>
        </div>

        <!-- Newsletter -->

        <div class="w-full flex justify-center items-center mt-10">
            <form>
                <div class="flex flex-col relative z-[1]">
                    <input type="email"
                        class="p-4 outline-none min-w-[380px] lg:w-[500px] rounded-md bg-zinc-100 dark:bg-zinc-900/70 dark:placeholder:text-zinc-500"
                        placeholder="your@email.com" dir="ltr">
                    <button
                        class="absolute py-[9px] px-5 bg-[#FF5656] rounded-md text-white text-sm m-2 shadow-md shadow-[#ff565670] dark:shadow-none hover:scale-y-90 hover:scale-x-95 transition-all duration-300">ثبت
                        نام</button>
                    <div class="flex justify-center items-center gap-x-1 lg:gap-x-2 pt-4 ">
                        <input type="checkbox" name="news" id="news">
                        <label for="news" class="text-xs">
                            همچمین تمایل دارم عضو خبرنامه شوم و از اخرین اخبار و تخفیفات مطلع باشم.
                        </label>
                    </div>
                </div>
            </form>
        </div>

    </section>
</template>