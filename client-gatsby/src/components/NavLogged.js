import React from "react"

export default function Nav_Atrz() {
    return( 
        <div className="p-6 m-6 lg:flex justify-between">
            <h1 className="text-5xl text-green-600" style={{fontFamily: 'Merriweather'}}>ATRUI</h1>
            <div className="pt-6">
                <a href="/account" className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">Username</a>
            </div>
        </div>
    )
}