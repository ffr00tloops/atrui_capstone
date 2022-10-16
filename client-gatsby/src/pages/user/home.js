import * as React from "react"
import {useEffect, useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import axios from 'axios'
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Fundraisers() {

  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/fundraisers/getAllPosts/")
    .then(res => {
        setFundraisers(res.data)
    })
    .catch(err => { console.log(err)})

  },[])

  console.log(fundraisers)

  
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
    <h1 className="text-center">Fundraisers</h1>
    <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-1 w-10/12 m-auto">
    
    {
      fundraisers.map(fundraiser => (
        <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
          <div className="">
            <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
            <h1 className="text-xl font-bold">{fundraiser.title}</h1>
            <p>{fundraiser.description}</p>
          </div> 
        </div>        
      ))
    }  
    

    </div>
  </div>
  )
}


function Organizers() {



  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
    <h1 className="text-center">Organizations</h1>
    <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-1 w-10/12 m-auto">
      <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
        <div className="">
          <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
          <h1 className="text-xl font-bold">Hello World</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
    </div>
  </div>
  )
}

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
  const [location, setLocation] = useState('Fundraisers')

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if (location == "Fundraisers") {
      return <Fundraisers />
    }

    else if (location == "Organizers") {
      return <Organizers />
    }
    else if (location == "Feed") {
      return <Feed />
    }
    else {
      return <h1>Error</h1>
    }

  }


  return (
    <div>
      <div className="w-6/12 m-auto mb-12 grid lg:grid-cols-3">
        <button onClick={() => setLocation('Fundraisers')} className="text-white bg-red-500 hover:bg-red-300 rounded-2xl drop-shadow-md border-2 p-3">Fundraisers</button>
        <button onClick={() => setLocation('Organizers')} className="text-white bg-red-500 hover:bg-red-300 rounded-2xl  drop-shadow-md border-2 p-3">Organizations</button>
        <button onClick={() => setLocation('Feed')} className="text-white bg-red-500 hover:bg-red-300 border-2 rounded-2xl drop-shadow-md p-3">Feed</button>
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



export default withAuthenticationRequired(HomepageLogged)

export const Head = () => <title>Home Page</title>
