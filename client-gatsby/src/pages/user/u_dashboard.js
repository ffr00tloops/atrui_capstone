import * as React from "react"
import {useState, useEffect} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'




function DashboardContent(){


  const image = {
    maxWidth: "200px",
    maxHeight: "200px"
  };


  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="lg:grid lg:grid-cols-2 gap-3 grid-rows-6">
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 grid grid-rows-3 text-center">
        <h1 className="row-start-2">Level : 1</h1>
      </div>
      <div className="bg-white row-start-2 row-span-2 m-3 p-3 text-center">
          <img className="m-auto" style={image} src="https://cdn.shopify.com/s/files/1/0527/5808/5812/products/Badge_You_27re_Tiering_Me_Apart_Bronze_RS5_720x.png?v=1613484537"></img>
          <h1>Current Rank Badge</h1>
      </div>
      <div className="bg-white m-3 col-start-2 row-start-2 row-span-2 p-3 text-center">
        <h1>Total Donations</h1>
      </div>
      <div className="bg-white m-3 p-3 row-start-4 col-start-1 col-span-2 text-center">
        <h1>Level Experience</h1>
      </div>
      <div className="bg-white m-3 p-3 row-start-5 col-start-1 col-span-2 text-center">
        <h1>Rank Progress</h1>
      </div>
      <div className="bg-white m-3 p-3 row-start-6 col-start-1 col-span-3">
        <h1>Earn Level exp and rank points through the following.</h1>
        <h1 className="text-blue-500">Donations</h1>
        <h1 className="text-blue-500"s>Weekly Challenges</h1>
      </div>
    </div>
  </div>
  )
}

function Leaderboard(){
  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1 ">
      <div className="bg-white m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-xl font-bold text-green-600">Position</h1>
        <h1 className="text-xl font-bold text-red-600">User</h1>
        <h1 className="text-xl font-bold text-blue-600">Total Donation</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
      <div className="m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-green-600">1</h1>
        <h1 className="text-red-600">Joe</h1>
        <h1 className="text-blue-600">1000000000</h1>
      </div>
    </div>
  </div>
  )
}

function History(){


  const [donations, setDonation] = useState([]);

  const {user} = useAuth0()

  useEffect(() => {
    axios.get(`http://localhost:3000/fundraisers/getDonations/${user.name}`)
    .then(res => {
        setDonation(res.data)
    })
    .catch(err => { console.log(err)})

  },[])


  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1 ">
      <div className="bg-white m-3 p-3 grid grid-cols-3 text-center">
        <h1 className="text-xl font-bold text-green-600">ID:</h1>
        <h1 className="text-xl font-bold text-red-600">Date Made</h1>
        <h1 className="text-xl font-bold text-blue-600">Donation Amount</h1>
      </div>
      {
        donations.map(donation => (
          <div className=" m-3 p-3 grid grid-cols-3 text-center">
          <h1 className="text-xl">{donation.id}</h1>
          <h1 className="text-xl">{donation.datemade}</h1>
          <h1 className="text-xl">{donation.amount}</h1>
        </div>
        ))
      }
    </div>
  </div>
  )
}


function Main() {

  

  const [location, setLocation] = useState('Dashboard')

  const {
    isAuthenticated,
    logout,
    } = useAuth0();

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if(location == 'Dashboard') {
      return <DashboardContent />
    }
    else if (location == 'Home') {
      window.location.href = "/user/home"
    }
    else if (location == 'Leaderboard') {
      return <Leaderboard />
    }
    else if (location == 'History') {
      return <History />
    }
    else {
      return <h1>Error</h1>
    }

  }

  return (
    <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 m-auto mb-64">
      <div className="grid grid-cols-1 lg:grid-rows-2  bg-white">
        <div className="grid grid-cols-1">
          <button onClick={() => setLocation('Home')}  className="cursor-pointer hover:bg-blue-500 bg-blue-700 text-white p-3">Home</button>
          <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 p-3">Dashboard</button>
          <button onClick={() => setLocation('Leaderboard')} className="cursor-pointer hover:bg-gray-300 p-3">Leaderboard</button>
          <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Badges</button>
          <button onClick={() => setLocation('History')} className="cursor-pointer hover:bg-gray-300 p-3">History</button>
          <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Profile</button>
          <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Account</button>
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
      <h1 className="p-3 m-3 text-center text-5xl text-white font-bo"> Dashboard</h1>
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
