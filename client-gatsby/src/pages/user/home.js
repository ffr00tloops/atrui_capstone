import * as React from "react"
import { Link } from "gatsby"
import {useEffect, useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import axios from 'axios'
import { Router} from '@reach/router'
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
      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        fundraisers.map(fundraiser => (
          <Link to={`/user/home/posts/${fundraiser.id}`}>
          <div className="text-center border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3">
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{fundraiser.title}</h1>
              <p>{fundraiser.description}</p>
            </div> 
          </div>
          </Link>        
        ))
      }  

      </div>
  </div>
  
  )
}

function Organizers() {

  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/organizations/getAllOrgs")
    .then(res => {
        setOrganizations(res.data)
    })
    .catch(err => { console.log(err)})

  },[])


  console.log(organizations)

  
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
      <h1 className="text-center">Organizations</h1>
      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        organizations.map(organization => (
          <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
            <div className="">
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{organization.title}</h1>
              <p>{organization.description}</p>
            </div> 
          </div>        
        ))
      }  

      </div>
  </div>
  
  )
}

function Feed() {

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/feed/getAllFeeds")
    .then(res => {
        setFeeds(res.data)
    })
    .catch(err => { console.log(err)})

  },[])

  console.log(feeds)

  
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
      <h1 className="text-center">Feed</h1>
      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        feeds.map(feed => (
          <div className="border-2 rounded-sm drop-shadow-lg border-gray-200 m-3">
            <div className="">
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{feed.title}</h1>
              <p>{feed.description}</p>
            </div> 
          </div>        
        ))
      }  
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



const SubPage = props => {
  

  return (
    	<div className="w-8/12 m-auto bg-gray-200 mt-3 mb-3">
        <div className="p-3 grid lg:grid-cols-3 ">
          <img className="row-span-2 border-2 border-black " src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
          <div className="p-3">
            <h1 className="text-xl">Program Name</h1>
            <p>Description</p>
            <h1 className="">Total Goal Amount:</h1>
            <h1 className="">Current Progress</h1>
            <button className="bg-green-500 p-3 m-3 text-white">Donate</button>
            <Link to="/user/home"><button className="bg-blue-500 p-3 m-3 text-white">Go Back</button></Link>
            
          </div>
        </div>
        
      </div>
  )
}

const HomepageLogged = () => {
  return (
    <div>
      <Nav_Atrz/>
      
      <Router>
        <Nav path="/user/home"/> 
        <SubPage path="/user/home/posts/:id" />
      </Router>
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(HomepageLogged)

export const Head = () => <title>Home Page</title>
