import React from "react"

export default function Nav_Atrz() {
    return( 
        <div className="p-6 m-6 lg:flex justify-between">
            <h1 className="text-5xl text-green-600" style={{fontFamily: 'Merriweather'}}>ATRUI</h1>
            <div className="pt-6">
                <a href="/register" className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">Register</a>
                <a href="/login" className="p-3 mr-3 text-xl rounded-3xl text-white bg-green-500">Login</a>
            </div>
        </div>
    )
}