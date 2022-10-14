import * as React from "react"
import {useState} from "react"
import Footer from '../../components/Footer'
import NavLogged from '../../components/NavLogged'


function DashboardContent(){
  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-3 gap-3 grid-rows-6">
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
    </div>
  </div>
  )
}

function Leaderboard(){
  return (
    <div className="bg-gray-300 col-span-3 ">
    <div className="grid lg:grid-cols-3 gap-3 grid-rows-6">
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white m-3 p-3 text-center">
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
      <div className="bg-white row-span-5 m-3 p-3 text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
        <h1>Current Rank: Bronze IV</h1>
        <h1>Season 1: 60 Days Left</h1>
      </div>
    </div>
  </div>
  )
}

function Main() {

  const [location, setLocation] = useState('Dashboard')

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if(location == 'Dashboard') {
      return <DashboardContent />
    }
    else if (location == 'Leaderboard') {
      return <Leaderboard />
    }
    else {
      return <h1>Error</h1>
    }

  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 p-3 m-auto">
      <div className="grid gap-3 grid-cols-1 bg-white">
        <button onClick={() => setLocation('Dashboard')}  className="cursor-pointer hover:bg-gray-300 p-3">Dashboard</button>
        <button onClick={() => setLocation('Leaderboard')} className="cursor-pointer hover:bg-gray-300 p-3">Leaderboard</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Badges</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Achievements</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">History</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Profile</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 p-3">Account</button>
        <button onClick={() => setLocation('Dashboard')} className="cursor-pointer hover:bg-gray-300 text-red-500 p-3">Logout</button>
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
      <NavLogged />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}



export default Dashboard

export const Head = () => <title>User Dashboard</title>
