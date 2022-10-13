import * as React from "react"
import Footer from '../../components/Footer'
import NavLogged from '../../components/NavLogged'

function Main() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 p-3 m-auto">
      <div className="grid gap-4 grid-cols-1 bg-gray-200 p-6">
        <a>Dashboard</a>
        <a>Leaderboard</a>
        <a>Badges</a>
        <a>Achievements</a>
        <a>History</a>
        <a>Profile</a>
        <a>Account</a>
        <a>Logout</a>

      </div>
      <div className="bg-red-500 col-span-3">
        <div className="grid grid-cols-3 gap-5 grid-rows-3">
          <div className="bg-green-500 p-3 m-3">Classname</div>
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

    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <NavLogged />
      <Main />
      <Footer />
    </div>
  )
}



export default Dashboard

export const Head = () => <title>User Dashboard</title>
