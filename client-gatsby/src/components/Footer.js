import React from 'react'


export default function Footer() {
    return (
      <div className="pb-8 bg-green-600 text-white">
        <div className="w-10/12 m-auto text-center ">
          <h1 className="lg:text-xl text-4xl font-bold lg:m-0 mb-12 lg:pt-8 pt-16">&nbsp;&nbsp;ATRUI</h1>
          <div className="pt-8">
          <a href="/" className="p-1 hover:text-black hover:bg-white hover:border-black lg:mr-3 text-md mb-3 border-solid border-2 border-white rounded-xl">Home</a>
          <a href="/about" className="p-1 hover:text-black hover:bg-white hover:border-black lg:mr-3 text-md mb-3 border-solid border-2 border-white rounded-xl">About</a>
          <a href="/services "className="p-1 hover:text-black hover:bg-white hover:border-black lg:mr-3 text-md mb-3 border-solid border-2 border-white rounded-xl">Services</a>
          <a href="/contacts" className="p-1 hover:text-black hover:bg-white hover:border-black lg:mr-3 mb-3 text-md border-solid border-2 border-white rounded-xl">Contact</a>
          </div>
          <div className="text-center pt-8">
            <h1>@Copyright Atrui</h1>
          </div>
        </div>
      </div>
    )
}