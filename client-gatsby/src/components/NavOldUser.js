import React, { useEffect,useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Link from 'gatsby-link'
import { navigate } from '@reach/router';


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
            fetch('https://atrui.online/userdata/verifyNewUser', requestOptions)
                .then(response => response.json())
                .then(data =>{
                    console.log(data)
                    if (!data) {
                        const requestOptions2 = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ uniqueid: `${user.sub}`, email: `${user.email}`, role: 'user'})
                        };
                        fetch('https://atrui.online/userdata/newUser', requestOptions2)
                            .then(response => response.json())
                            .then(data => console.log("New user has been added"));
                    }
                    else {
                    }    
             });
        }

        function VerifyRole() {
            const [role, setRole] = useState([])

            const { user } = useAuth0();

            useEffect(() => {
              axios.get(`https://atrui.online/userdata/getUserRoles/${user.sub}`)
                .then(res => {
                    setRole(res.data[0])
                })
                .catch(err => { console.log(err)})
              
              },[])

            
             
            const [isHover, setIsHover] = useState("Dashboard");

            const handleMouseEnter = () => {
                 setIsHover("Dashboard");
              };
            const handleMouseLeave = () => {
                 setIsHover(user.email);
            };


            
            if (role.role != undefined) {
                if(role.role === 'organizer') {
                    return (
                    <>
                        <Link to="/user/home"><h1 className="p-3 m-3 text-lg rounded-3xl text-white bg-green-500">Homepage</h1></Link>
                        <Link to="/user/u_dashboard"><h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="p-3 m-3 text-md rounded-3xl text-white bg-blue-500">{isHover}</h1></Link>
                        <Link to="/admin/org-dash" state={{showPage : true}}><h1 className="p-3 m-3 text-md rounded-3xl text-white bg-red-500">Org Dashboard</h1></Link>    
                    </>
                    )
                }
                else {
                    return (
                        <>
                        <Link to="/user/home"><h1 className="p-3 m-3 text-lg rounded-3xl text-white bg-green-500">Homepage</h1></Link>
                        <Link to="/user/u_dashboard"><h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="p-3 m-3 text-md rounded-3xl text-white bg-blue-500">{isHover}</h1></Link>
                        </>
                        )
                }
            }
            else {
                return (
                    <>
                        <Link to="/user/home"><h1 className="p-3 m-3 text-lg rounded-3xl text-white bg-green-500">Homepage</h1></Link>
                        <Link to="/user/u_dashboard"><h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="p-3 m-3 text-md rounded-3xl text-white bg-blue-500">{isHover}</h1></Link> 
                    </>
                    )
            }
            
        }

        if (isAuthenticated) {
            return  (
            <>
                <VerifyRole/>
            </>
            )
        }

        else {
            return <button onClick={loginWithRedirect} className="p-3 m-3 text-xl rounded-3xl text-white bg-red-500">Login</button>
        };



    }


    const imageStyle = {
        maxHeight: "50px",
        margin: 'auto'
    }

    return( 
        <div className="p-3 m-3 grid lg:grid-cols-1 lg:grid-cols-4 m-auto text-center">
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