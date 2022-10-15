import React from "react"
import { useAuth0 } from "@auth0/auth0-react";


function NotLogged() {
    <a href="/authentication/login" className="p-3 mr-3 text-xl rounded-3xl text-white bg-green-500">Login</a>
}

function Logged(){
    return (
        <a href="/account" className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">Username</a>
    )
}


export default function Nav_Atrz() {

    
    function VerifyAuth() {
        const {
            isAuthenticated,
            loginWithRedirect,
             } = useAuth0();

        const { user } = useAuth0();

            if (isAuthenticated) {
               return <h1 className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">{user.email}</h1>
            }
            else {
                return <button onClick={loginWithRedirect} className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">Login</button>
            }
          ;

    }

    return( 
        <div className="p-6 m-6 lg:flex justify-between">
            <h1 className="text-5xl text-green-600" style={{fontFamily: 'Merriweather'}}>ATRUI</h1>
            <div className="pt-6">
            
            {VerifyAuth()}
            </div>
        </div>
    )
}


/*
     const {
  isAuthenticated,
  loginWithRedirect,
   } = useAuth0();

   return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>
  );

*/