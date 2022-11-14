import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";


export default function NavOldUser() {

    function VerifyAuth() {
        const {isAuthenticated,loginWithRedirect} = useAuth0();
        
        const { user } = useAuth0();

        if (isAuthenticated) {
            return  (
            <>
                <a href='/user/home'className="p-3 m-3 text-lg rounded-3xl text-white bg-green-500">Homepage</a>
                <a href='/user/u_dashboard'className="p-3 m-3 text-md rounded-3xl text-white bg-blue-500">{user.email}</a>
            </>
            )
        }
        else {
            return <button onClick={loginWithRedirect} className="p-3 mr-3 text-xl rounded-3xl text-white bg-red-500">Login</button>
        };



    }

    const imageStyle = {
        maxHeight: "50px",
        margin: 'auto'
    }

    return( 
        <div className="p-3 m-3 grid grid-cols-1 lg:grid-cols-3 m-auto text-center">
            <img style={imageStyle} src="https://cdn.discordapp.com/attachments/688647892084588626/1041720097649201182/logo-no-background.png"/>

        
            {VerifyAuth()}
            
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