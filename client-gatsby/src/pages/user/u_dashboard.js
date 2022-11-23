import * as React from "react"
import {useState, useEffect} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import NavOldUser from "../../components/NavOldUser";




function DashboardContent(){

  const [userStats, setUserStats] = useState([]);
  const [totaldonations, setTotaldonations] = useState([]);

  const image = {
    maxWidth: "200px",
    maxHeight: "200px"
  };

  const { user } = useAuth0();



  useEffect(() => {
    axios.get(`https://atrui.online/userdata/getUserPoints/${user.sub}`)
      .then(res => {
          setUserStats(res.data[0])
      })
      .catch(err => { console.log(err)})
    
    },[])

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getUserTotalDonations/${user.name}`)
      .then(res => {
          setTotaldonations(res.data[0])
      })
      .catch(err => { console.log(err)})
    
    },[]) 

  
  function BadgeImage() {

    if ((userStats.rankpoints >= 0.25 * 4000) && (userStats.rankpoints <= 0.50 * 4000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/br4.png`}/> }
    if ((userStats.rankpoints >= 0.50 * 4000) && (userStats.rankpoints <= 0.75 * 4000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/br3.png`}/> }
    if ((userStats.rankpoints >= 0.75 * 4000) && (userStats.rankpoints <= 4000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/br2.png`}/> }
    if ((userStats.rankpoints >= 4000) && (userStats.rankpoints <= 0.25 * 32000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/br1.png`}/> }

    if ((userStats.rankpoints >= 0.25 * 32000) && (userStats.rankpoints <= 0.50 * 32000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil4.png`}/> }
    if ((userStats.rankpoints >= 0.50 * 32000) && (userStats.rankpoints <= 0.75 * 32000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil3.png`}/> }
    if ((userStats.rankpoints >= 0.75 * 32000) && (userStats.rankpoints <= 32000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil2.png`}/> }
    if ((userStats.rankpoints >= 32000) && (userStats.rankpoints <= 0.25 * 960000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil1.png`}/> }

    if ((userStats.rankpoints >= 0.25 * 960000) && (userStats.rankpoints <= 0.50 * 960000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl4.png`}/> }
    if ((userStats.rankpoints >= 0.50 * 960000) && (userStats.rankpoints <= 0.75 * 960000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl3.png`}/> }
    if ((userStats.rankpoints >= 0.75 * 4000) && (userStats.rankpoints <= 960000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl2.png`}/> }
    if ((userStats.rankpoints >= 960000) && (userStats.rankpoints <= 0.25 * 15360000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl1.png`}/> }

    if ((userStats.rankpoints >= 0.25 * 15360000) && (userStats.rankpoints <= 0.50 * 15360000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl4.png`}/> }
    if ((userStats.rankpoints >= 0.50 * 15360000) && (userStats.rankpoints <= 0.75 * 15360000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl3.png`}/> }
    if ((userStats.rankpoints >= 0.75 * 15360000) && (userStats.rankpoints <= 15360000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl2.png`}/> }
    if ((userStats.rankpoints >= 15360000) && (userStats.rankpoints <= 0.25 * 100000000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl1.png`}/> }


    if ((userStats.rankpoints >= 0.25 * 100000000) && (userStats.rankpoints <= 0.50 * 100000000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph4.png`}/> }
    if ((userStats.rankpoints >= 0.50 * 100000000) && (userStats.rankpoints <= 0.75 * 100000000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph3.png`}/> }
    if ((userStats.rankpoints >= 0.75 * 100000000) && (userStats.rankpoints <= 100000000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph2.png`}/> }
    if ((userStats.rankpoints >= 100000000) && (userStats.rankpoints <= 0.25 * 500000000)) { return <img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph1.png`}/> }
    

    


  }




  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="lg:grid lg:grid-cols-2 grid-rows-2 gap-3">
      <div className="bg-white m-3 p-3 grid grid-rows-3 text-center">
        <h1 className="row-start-2 text-2xl font-bold" >Total Rank Points : { userStats.rankpoints}</h1>
      </div>
      <div className="bg-white m-3 p-3 grid grid-rows-3 text-center">
        <h1 className="row-start-2 text-red-500 font-bold text-5xl">Level {userStats.level}</h1>
      </div>
      <div className="bg-white row-start-2 row-span-2 m-3 p-3 text-center"> 
          <BadgeImage />
          <h1>Current Rank Badge</h1>
      </div>
      <div className="bg-white m-3 col-start-2 row-start-2 row-span-1 p-3 text-center">
        <div>
          <h1>Total Donations Made:</h1>
          <h1 className="text-5xl font-bold">₱{totaldonations.sum}</h1>
          </div>
      </div>
      <div className="bg-white m-3 p-3 row-start-3 col-start-2">
        <h1>Earn Level exp and rank points through the following.</h1>
        <h1 className="text-blue-500">Donations</h1>
      </div>
    </div>
  </div>
  )
}

function Leaderboard(){


  const [donations, setDonation] = useState([]);

  const {user} = useAuth0()

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getDonationsDesc`)
    .then(res => {
        setDonation(res.data)
    })
    .catch(err => { console.log(err)})

  },[])


  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1 ">
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <h1 className="text-xl font-bold text-red-600">Donor Name:</h1>
        <h1 className="text-xl font-bold text-red-600">Fundraiser Name:</h1>
        <h1 className="text-xl font-bold text-red-600">Date Made</h1>
        <h1 className="text-xl font-bold text-blue-600">Donation Amount</h1>
      </div>
      {
        donations.map(donation => (
          <div className=" grid grid-cols-4 text-center">
          <h1 className="text-sm">{donation.donor}</h1>
          <h1 className="text-sm">{donation.fundraiser}</h1>
          <h1 className="text-sm">{donation.datemade}</h1>
          <h1 className="text-sm">₱{donation.amount}</h1>
        </div>
        ))
      }
    </div>
  </div>
  )
}

function History(){


  const [donations, setDonation] = useState([]);

  const {user} = useAuth0()

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getDonations/${user.name}`)
    .then(res => {
        setDonation(res.data)
    })
    .catch(err => { console.log(err)})

  },[])

  


  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1 ">
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <h1 className="text-xl font-bold text-green-600">ID:</h1>
        <h1 className="text-xl font-bold text-red-600">Fundraiser Name:</h1>
        <h1 className="text-xl font-bold text-red-600">Date Made</h1>
        <h1 className="text-xl font-bold text-blue-600">Donation Amount</h1>
      </div>
      {
        donations.map(donation => (
          <div className=" grid grid-cols-4 text-center">
          <h1 className="text-sm">{donation.id}</h1>
          <h1 className="text-sm">{donation.fundraiser}</h1>

          <h1 className="text-sm">{donation.datemade}</h1>
          <h1 className="text-sm">₱{donation.amount}</h1>
        </div>
        ))
      }
    </div>
  </div>
  )
}

function Badges(){

  const [userStats, setUserStats] = useState([])

  const {user} = useAuth0()

  useEffect(() => {
    axios.get(`https://atrui.online/userdata/getUserPoints/${user.sub}`)
      .then(res => {
          setUserStats(res.data[0])
      })
      .catch(err => { console.log(err)})
    
    },[])

    const image = {
      maxWidth: "50px",
      maxHeight: "50px"
    };


    function BadgeImage() {

      if ((userStats.rankpoints >= 0.25 * 4000) && (userStats.rankpoints <= 0.50 * 4000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/br4.png`}/><h1>Bronze 4</h1></> }
      if ((userStats.rankpoints >= 0.50 * 4000) && (userStats.rankpoints <= 0.75 * 4000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/br3.png`}/><h1>Bronze 3</h1></> }
      if ((userStats.rankpoints >= 0.75 * 4000) && (userStats.rankpoints <= 4000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/br2.png`}/><h1>Bronze 2</h1></> }
      if ((userStats.rankpoints >= 4000) && (userStats.rankpoints <= 0.25 * 32000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/br1.png`}/><h1>Bronze 1</h1></> }
  
      if ((userStats.rankpoints >= 0.25 * 32000) && (userStats.rankpoints <= 0.50 * 32000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil4.png`}/><h1>Silver 4</h1></> }
      if ((userStats.rankpoints >= 0.50 * 32000) && (userStats.rankpoints <= 0.75 * 32000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil3.png`}/><h1>Silver 3</h1></> }
      if ((userStats.rankpoints >= 0.75 * 32000) && (userStats.rankpoints <= 32000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil2.png`}/><h1>Silver 2</h1></> }
      if ((userStats.rankpoints >= 32000) && (userStats.rankpoints <= 0.25 * 960000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/sil1.png`}/><h1>Silver 1</h1></> }
   
      if ((userStats.rankpoints >= 0.25 * 960000) && (userStats.rankpoints <= 0.50 * 960000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl4.png`}/><h1>Gold 4</h1></> }
      if ((userStats.rankpoints >= 0.50 * 960000) && (userStats.rankpoints <= 0.75 * 960000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl3.png`}/><h1>Gold 3</h1></> }
      if ((userStats.rankpoints >= 0.75 * 4000) && (userStats.rankpoints <= 960000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl2.png`}/><h1>Gold 2</h1></> }
      if ((userStats.rankpoints >= 960000) && (userStats.rankpoints <= 0.25 * 15360000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/gl1.png`}/><h1>Gold 1</h1></> }
  
      if ((userStats.rankpoints >= 0.25 * 15360000) && (userStats.rankpoints <= 0.50 * 15360000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl4.png`}/><h1>Platinum 4</h1></> }
      if ((userStats.rankpoints >= 0.50 * 15360000) && (userStats.rankpoints <= 0.75 * 15360000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl3.png`}/><h1>Platinum 3</h1></> }
      if ((userStats.rankpoints >= 0.75 * 15360000) && (userStats.rankpoints <= 15360000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl2.png`}/><h1>Platinum 2</h1></> }
      if ((userStats.rankpoints >= 15360000) && (userStats.rankpoints <= 0.25 * 100000000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/pl1.png`}/><h1>Platinum 1</h1></> }
  
  
      if ((userStats.rankpoints >= 0.25 * 100000000) && (userStats.rankpoints <= 0.50 * 100000000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph4.png`}/><h1>Philanthropist 4</h1></> }
      if ((userStats.rankpoints >= 0.50 * 100000000) && (userStats.rankpoints <= 0.75 * 100000000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph3.png`}/><h1>Philanthropist 3</h1></> }
      if ((userStats.rankpoints >= 0.75 * 100000000) && (userStats.rankpoints <= 100000000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph2.png`}/><h1>Philanthropist 2</h1></> }
      if ((userStats.rankpoints >= 100000000) && (userStats.rankpoints <= 0.25 * 500000000)) { return <><img className="m-auto rounded-full" style={image} src={`https://atrui.online/ph1.png`}/><h1>Philanthropist 1</h1></> }
      
  
      
  
  
    }


  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-1 lg:grid-rows-6 ">
      <h1 className="text-center p-3 m-3 text-2xl font-bold">Ranking System</h1>
      <div className=" text-black grid grid-cols-2 text-center">
        <div>
          <h1>Your current rank is</h1>
          <BadgeImage/>
        </div>
        <div>
          <h1>Points awarded:</h1>
          <h1>PHP1 = 5 Ranked Points:</h1>
          <h1>PHP1 = 0.5LVL Points:</h1>
        </div>
      </div>
      <div className=" text-black grid grid-cols-7 gap-4 text-center m-auto">
        <div className="bg-yellow-500 p-3 rounded-full">
          <h1 className="font-bold text-lg">IV</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-3">
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <div className="bg-yellow-500 p-3 rounded-full">
          <h1 className="font-bold text-lg">III</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-3">
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <div className="bg-yellow-500 p-3 rounded-full">
          <h1 className="font-bold text-lg">II</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-3">
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <div className="bg-yellow-500 p-3 rounded-full">
          <h1 className="font-bold text-lg">I</h1>
        </div>
      </div>
      <div className="lg:grid row-span-3 grid-cols-5">
        <div className="bg-yellow-700 p-12 m-3 text-center">
          <h1>0 RP Required</h1>
          <h1 className="text-xl font-bold">Bronze</h1>
          <h1>Rewards:</h1>
          <h1>Bronze Badge</h1>
        </div>
        <div className="bg-gray-600 p-12 m-3 text-center">
          <h1>4,000 RP Required</h1>
          <h1 className="text-xl font-bold">Silver</h1>
          <h1>Rewards:</h1>
          <h1>Silver Badge</h1>
        </div>
        <div className="bg-yellow-500 p-12 m-3 text-center">
          <h1>32,000 RP Required</h1>
          <h1 className="text-xl font-bold">Gold</h1>
          <h1>Rewards:</h1>
          <h1>Gold Badge</h1>
        </div>
        <div className="bg-blue-400 p-12 m-3 text-center">
          <h1>960,000 RP Required</h1>
          <h1 className="text-xl font-bold">Platinum</h1>
          <h1>Rewards:</h1>
          <h1>Platinum Badge</h1>
        </div>
        <div className="bg-red-700 p-12 m-3 text-center">
          <h1>15,360,000 RP Required</h1>
          <h1 className="text-xl font-bold">Philanthropist</h1>
          <h1>Rewards:</h1>
          <h1>Philanthropist Badge</h1>
        </div>
      </div>
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
    else if (location == 'Badges') {
      return <Badges />
    }
    else {
      return <h1>Error</h1>
    }

  }

  return (
    <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 m-auto">
      <div className="grid grid-cols-1 lg:grid-rows-2  bg-white">
        <div className="grid grid-cols-1">
          <button onClick={() => setLocation('Home')}  className="cursor-pointer hover:bg-blue-500 bg-blue-700 text-white p-3">Home</button>
          <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 p-3">Dashboard</button>
          <button onClick={() => setLocation('Leaderboard')} className="cursor-pointer hover:bg-gray-300 p-3">All-Time Leaderboard</button>
          <button onClick={() => setLocation('Badges')} className="cursor-pointer hover:bg-gray-300 p-3">Badges</button>
          <button onClick={() => setLocation('History')} className="cursor-pointer hover:bg-gray-300 p-3">Donation History</button>
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
      <NavOldUser/>
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(Dashboard)

export const Head = () => <title>User Dashboard</title>
