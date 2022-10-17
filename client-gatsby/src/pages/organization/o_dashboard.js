import * as React from "react"
import {useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";


function NewFundraiser(){
  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1">
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Fundraiser Name:</label>
        <input className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 grid-rows-6 text-center">
        <label>Description</label>
        <textarea className="col-span-3 row-span-6 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Donation Amount:</label>
        <input placeholder="Philippine Pesos" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Duration</label>
        <input placeholder="Days" className="col-span-3 border-2" />
      </div>
      <button className="bg-green-500 p-3 m-3 " >Create Fundraiser +</button>
    </div>
  </div>
  )
}

function Main() {

  

  const [location, setLocation] = useState('NewFundraiser')

  const {
    isAuthenticated,
    logout,
    } = useAuth0();

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if (location == 'Home') {
      window.location.href = "/user/home"
    }
    else if (location == 'NewFundraiser') {
      return <NewFundraiser />
    }
    else {
      return <h1>Error</h1>
    }

  }

  return (
    <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 m-auto">
      <div className="grid grid-cols-1 lg:grid-rows-2 bg-white">
        <div className="grid grid-cols-1">
            <button onClick={() => setLocation('Home')}  className="cursor-pointer hover:bg-blue-500 bg-blue-700 text-white p-3">Home</button>
            <button onClick={() => setLocation('NewFundraiser')}  className="cursor-pointer hover:bg-gray-300 bg-green-200 p-3">New Fundraiser +</button>
            <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 bg-green-200 p-3">New Post +</button>
            <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 p-3">Posts and Fundraisers</button>
            <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 p-3">Organization Profile</button>
            <button onClick={() => { logout({ returnTo: window.location.origin })}}className="cursor-pointer bg-red-500 hover:bg-red-300 text-white p-3">Logout</button>
        </div>
      </div>

      {renderMenu()}

    </div>
  )
}

function Banner() {
  return (
    <div className="bg-green-500 p-3">
      <h1 className="p-3 m-3 text-center text-5xl text-white font-bo">Organizer Dashboard</h1>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <Nav_Atrz/>
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(Dashboard)

export const Head = () => <title>User Dashboard</title>
