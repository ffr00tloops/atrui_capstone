import * as React from "react"
import { Link } from "gatsby"
import {useEffect, useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import axios from 'axios'
import { Router} from '@reach/router'
import { withAuthenticationRequired } from '@auth0/auth0-react';
import ProgressBar from "@ramonak/react-progress-bar";


function Fundraisers() {

  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    axios.get("http://128.199.101.58/fundraisers/getAllPosts/")
    .then(res => {
        setFundraisers(res.data)
    })
    .catch(err => { console.log(err)})

  },[])
  
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
      <h1 className="text-center text-green-600 text-5xl p-3 m-3">Fundraisers</h1>
      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        fundraisers.map(fundraiser => (
          <Link to={`/user/home/fundraisers/${fundraiser.id}`}>
          <div className="text-center border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3">
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{fundraiser.title}</h1>
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
    axios.get("http://128.199.101.58/organizations/getAllOrgs")
    .then(res => {
        setOrganizations(res.data)
    })
    .catch(err => { console.log(err)})

  },[])



  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
      <h1 className="text-center text-green-600 text-5xl p-3 m-3">Organizations</h1>
      <div className="  lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        organizations.map(organization => (
          <Link to={`/user/home/organization/${organization.id}`}>
          <div className="text-center border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3">
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{organization.orgname}</h1>
            </div> 
          </div>
          </Link>        
        ))
      }  

      </div>
  </div>
  
  )
}

function Feed() {

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get("http://128.199.101.58/feed/getAllFeeds")
    .then(res => {
        setFeeds(res.data)
    })
    .catch(err => { console.log(err)})

  },[])

  console.log(feeds)

  
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
      <h1 className="text-center text-green-600 text-5xl p-3 m-3">Feed</h1>
      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto">
      {
        feeds.map(feed => (
          <Link to={`/user/home/feeds/${feed.id}`}>
          <div className="text-center border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3"> 
              <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>
              <h1 className="text-xl font-bold">{feed.title}</h1>
            </div> 
          </div>
          </Link>        
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



const SubPageFundraisers = props => {



  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    axios.get(`http://128.199.101.58/fundraisers/getAllPosts/${props.id}`)
    .then(res => {
        setFundraisers(res.data[0])
    })
    .catch(err => { console.log(err)})

  },[])

  
  return (
    	<div className="w-8/12 m-auto rounded-lg bg-gray-200 mt-3 mb-3">
        <div className="p-3 m-3 lg:grid lg:grid-cols-4 grid-rows-6 ">
          <img className="row-span-1 m-auto col-start-1 row-start-1 border-2 border-black" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
          <div className="col-start-3 m-auto row-start-1">
            <h1 className="text-xl p-3 m-3 font-bold">{fundraisers.title}</h1>
            <h1 className="p-3 m-3">Date Made: {fundraisers.datemade}</h1>
            <h1 className="p-3 m-3">Total Goal Amount: {fundraisers.donationgoal}</h1>
            <h1 className="p-3 m-3">Duration: {fundraisers.duration} Days Left</h1>
            <ProgressBar className="p-3 m-3" completed={60} maxCompleted={100} />
            <div className="text-center">
              <button className="bg-green-500 p-3 m-3 text-white">Donate</button>
              <Link to="/user/home">
              <button className="bg-blue-500 p-3 m-3 text-white">Go Back</button>
              </Link>
            </div>
          </div>
          <div className="row-start-2 row-span-4 col-span-4 row col-start-1">
            <p className="whitespace-pre-line" >{fundraisers.description}</p>
          </div>
        </div>
      </div>
  )
}

const SubPageFeed = props => {


  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get(`http://128.199.101.58/feed/getAllFeeds/${props.id}`)
    .then(res => {
        setFeeds(res.data[0])
    })
    .catch(err => { console.log(err)})

  },[])

  
  return (
    	<div className="w-6/12 m-auto rounded-lg bg-gray-200 mt-3 mb-3">
        <div className="p-3 grid lg:grid-cols-1 text-center ">
          <h1 className="text-3xl font-bold ">{feeds.title}</h1>
          <p className="whitespace-pre-line">{feeds.description}</p>
          <p>{feeds.orgname}</p>
          <Link to="/user/home">
          <button className="bg-blue-500 p-3 m-3 text-white">Go Back</button>
          </Link>
            
        </div>
      </div>
  )
}

const SubPageOrganization = props => {


  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get(`http://128.199.101.58/organizations/getAllOrgs/${props.id}`)
    .then(res => {
        setOrganizations(res.data[0])
    })
    .catch(err => { console.log(err)})

  },[])

  
  return (
    	<div className="w-6/12 m-auto rounded-lg bg-gray-200 mt-3 mb-3">
        <div className="p-3 grid lg:grid-cols-2 text-center ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
          <div>
            <p className="whitespace-pre-line">{organizations.description}</p>
            <p>{organizations.orgname}</p>
            <Link to="/user/home">
            <button className="bg-blue-500 p-3 m-3 text-white">Go Back</button>
            </Link>
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
        <SubPageFundraisers path="/user/home/fundraisers/:id"/>
        <SubPageFeed path="/user/home/feeds/:id"/>
        <SubPageOrganization path="/user/home/organization/:id"/>
      </Router>
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(HomepageLogged)

export const Head = () => <title>Home Page</title>
