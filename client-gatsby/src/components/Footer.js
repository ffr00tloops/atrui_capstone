import React from 'react'


export default function Footer() {
    return (

<footer class="p-4 bg-white rounded-lg bg-green-600 shadow md:px-6 md:py-8 font-bold text-white ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap">ATRUI</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
            <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="/contact" class="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
            <li>
                <a href="/about" class="mr-4 hover:underline md:mr-6 ">About Us</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8"/>
    <span class="block text-sm  sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">ATRUI</a>. All Rights Reserved.
    </span>
</footer>

    )
}