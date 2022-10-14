import * as React from "react"
import Footer from '../../components/Footer'
import NavLogged from '../../components/NavLogged'


function DashboardContent(){
  return (
    <div className="bg-gray-300 col-span-3">
    <div className="grid lg:grid-cols-3 gap-5 grid-rows-3">
      <div className="bg-white row-span-2 p-3 m-3 ">
        <div className="m-auto">
          <h1>Current Rank: Bronze IV</h1>
          <h1>Season 1: 60 Days Left</h1>
        </div>  
      </div> 
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
      <div className="bg-green-500 p-3 m-3">Classname</div>
    </div>
  </div>
  )

}

function Main() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 p-3 m-auto">
      <div className="grid gap-4 grid-cols-1 bg-white p-6">
        <a>Dashboard</a>
        <a>Leaderboard</a>
        <a>Badges</a>
        <a>Achievements</a>
        <a>History</a>
        <a>Profile</a>
        <a>Account</a>
        <a>Logout</a>

      </div>
      <DashboardContent />

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
