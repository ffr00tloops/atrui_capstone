import React from "react"

export default function Nav_Atrz() {
    return( 
        <div className="p-6 m-6 flex justify-between">
            <h1 className="text-5xl" style={{fontFamily: 'Merriweather'}}>ATRUI</h1>
            <div>
                <button className="p-3 mr-3 text-xl rounded-3xl text-white bg-black">Register</button>
                <button className="p-3 mr-3 text-xl rounded-3xl text-white bg-black">Login</button>
            </div>
        </div>
    )
}