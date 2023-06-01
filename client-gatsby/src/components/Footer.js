import React from 'react'
import footer from './footer.css'




function Footer_Desktop() {
    
    return(
    <footer id="footer_container" class="p-4 bottom-0 bg-green-600 rounded-lg shadow md:px-6 md:py-8 font-bold text-white ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://atrui.vercel.app" class="flex items-center mb-4 sm:mb-0">
            <img src="https://media.discordapp.net/attachments/688647892084588626/1041719681809141800/logo-no-background.png?width=601&height=676" class="mr-3 h-8" alt="Atrui Logo"/>
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
    <span class="block text-sm  sm:text-center">© 2022 <a href="https://atrui.vercel.app" class="hover:underline">ATRUI</a>. All Rights Reserved.
    </span>
</footer>
    )
}

function Footer_Mobile (){
    return (
    <footer id="footer_container_mobile" class="grid grid-rows-1 grid-cols-4 bg-white border-2 bg-black sticky bottom-0 ">
        <div class="ico_txt_cont" onClick={() => window.location.href = '/user/home'}>
            <i class="fi fi-rr-house-blank"></i>
            <h1>Home</h1>
        </div>
        <div class="ico_txt_cont" onClick={() => window.location.href = '/user/u_dashboard'}>
            <i class="fi fi-rr-dashboard"></i>
            <h1>Dashboard</h1>
        </div>
        <div class="ico_txt_cont" onClick={() => window.location.href = '/contact'}>
            <i class="fi fi-rr-phone-call"></i>
            <h1>Contact Us</h1>
        </div>
        <div class="ico_txt_cont" onClick={() => window.location.href = '/about'}>
            <i class="fi fi-rr-id-card-clip-alt"></i>
            <h1>About Us</h1>
        </div>

    </footer>
    )
}

export default function Footer() {
    return (
        <>
        <Footer_Desktop />
        <Footer_Mobile />
        </>

    )
}