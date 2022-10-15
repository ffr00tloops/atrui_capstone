import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";


export default function Nav_Atrz() {

    
    function VerifyAuth() {
        const {isAuthenticated,loginWithRedirect} = useAuth0();
        
        const { user } = useAuth0();

        function VerifyNewUser() {

            const { user } = useAuth0();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uniqueid: `${user.sub}` })
            };
            fetch('http://localhost:3000/userdata/verifyNewUser', requestOptions)
                .then(response => response.json())
                .then(data =>{

                    console.log(data)
                    if (!data) {
                        const requestOptions2 = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ uniqueid: `${user.sub}`, email: `${user.email}` })
                        };
                        fetch('http://localhost:3000/userdata/newUser', requestOptions2)
                            .then(response => response.json())
                            .then(data => console.log("New user has been added"));
                    }
                    else {
                    }
                });
            



            


            

        }


        

            if (isAuthenticated) {
               VerifyNewUser()
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