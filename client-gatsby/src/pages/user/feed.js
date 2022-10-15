import * as React from "react"
import {useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Feed() {
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
    <h1 className="text-center">Feed</h1>
    <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-1 w-10/12 m-auto">
      <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
        <div className="">
          <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
          <h1 className="text-xl font-bold">Hello World</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
      <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
        <div className="">
          <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
          <h1 className="text-xl font-bold">Hello World</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
        <div className="">
          <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
          <h1 className="text-xl font-bold">Hello World</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </div>
  )
}


// handles logic for when changing menus in the home-loggedin page
function Nav() {
  const [location, setLocation] = useState('Fundraiser')

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if(location == 'Home') {
      window.location.href = "/user/home"
    }
    else if (location == 'Fundraiser') {
        return <Feed />
    }
    else {
      return <h1>Error</h1>
    }

  }


  return (
    <div>
      <div className="w-6/12 m-auto mb-12 grid lg:grid-cols-1">
        <button onClick={() => setLocation('Home')} className="text-white bg-red-500 border-2 p-3">Home</button>
      </div>
      {renderMenu()}
    </div>
  )
}



const HomepageLogged = () => {
  return (
    <div>
      <Nav_Atrz/>
      <Nav />
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(HomepageLogged);

export const Head = () => <title>Home Page</title>
