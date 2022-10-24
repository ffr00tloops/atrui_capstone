import * as React from "react"
import { Link } from "gatsby"
import {useEffect, useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import axios from 'axios'
import { Router} from '@reach/router'
import { withAuthenticationRequired } from '@auth0/auth0-react';
import ProgressBar from "@ramonak/react-progress-bar";
import { useAuth0 } from "@auth0/auth0-react";


const imageStyle = {
  minHeight: "200px",
  maxHeight: "200px"
}



function Fundraisers() {



  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    axios.get("https://atrui.online/fundraisers/getAllPosts/")
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
          <div className="border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3">
              <img className="m-auto" style={imageStyle} src={`https://atrui.online/${fundraiser.image}`}/>
              <h1 className="text-xl font-bold">{fundraiser.title}</h1>
              <p className="whitespace-pre-line">{fundraiser.description.substring(0,60) + "....." /*.slice(0, 50)+'...' */ }</p>
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
    axios.get("https://atrui.online/organizations/getAllOrgs")
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
            <img className="m-auto" style={imageStyle} src={`https://atrui.online/${organization.image}`}/>
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
    axios.get("https://atrui.online/feed/getAllFeeds")
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
              <h1 className="text-xl font-bold">{feed.title}</h1>
              <h1 className="">{feed.description}</h1>
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
    else {
      return <h1>Error</h1>
    }

  }


  return (
    <div className="mb-64">
      <div className="w-6/12 m-auto mb-12 grid lg:grid-cols-2 ">
        <button onClick={() => setLocation('Fundraisers')} className="text-white bg-red-500 hover:bg-red-300 rounded-2xl drop-shadow-md border-2 p-3">Fundraisers</button>
        <button onClick={() => setLocation('Organizers')} className="text-white bg-red-500 hover:bg-red-300 rounded-2xl  drop-shadow-md border-2 p-3">Organizations</button>
      </div>


      {renderMenu()}
    </div>
  )
}



const SubPageFundraisers = props => {



  const [fundraisers, setFundraisers] = useState([]);

  const [amount, setAmount] = useState(0);
  
  const { user } = useAuth0();

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getAllPosts/${props.id}`)
    .then(res => {
        setFundraisers(res.data[0])
    })
    .catch(err => { console.log(err)})

  },[])

  function Donate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    


    today = mm + '/' + dd + '/' + yyyy;

    const postData = {
          "donor" : `${user.name}`,
          "fundraiser" : `${fundraisers.title}`,
          'datemade' : `${today}`,
          "amount" : `${amount}`

      };
      axios.post(`https://atrui.online/fundraisers/donate`, postData)
      .then( res => {
          console.log(res)
      })
      alert("You have submitted a recipe");

  }

  
  return (
    	<div className="w-8/12 m-auto rounded-lg bg-gray-200 mt-3 mb-3">
        <div className="p-3 m-3 lg:grid lg:grid-cols-1 grid-rows-6 ">
          <img className=" border-2 border-black" style={imageStyle} src={`https://atrui.online/${fundraisers.image}`}/>
          <div className="col-start-3 m-auto">
            <h1 className="text-xl p-3 m-3 font-bold">{fundraisers.title}</h1>
            <h1 className="p-3 m-3">Date Made: {fundraisers.datemade}</h1>
            <h1 className="p-3 m-3">Total Goal Amount: {fundraisers.donationgoal}</h1>
            <h1 className="p-3 m-3">Duration: {fundraisers.duration} Days Left</h1>
            <ProgressBar className="p-3 m-3" completed={60} maxCompleted={100} />
            <div className="p-3 m-3 text-center">
              <input onChange={(e) => setAmount(e.target.value)} value={amount} />
              <button onClick={Donate} className="bg-green-500 p-3 m-3 text-white">Donate</button>
              <Link to="/user/home">
              <button className="bg-blue-500 p-3 m-3 text-white">Go Back</button>
              </Link>
            </div>
          </div>
          <div className="p-3 m-3 row-start-2 row-span-4 col-span-4 row col-start-1">
            <p className="whitespace-pre-line" >{fundraisers.description}</p>
          </div>
        </div>
      </div>
  )
}

const SubPageFeed = props => {


  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get(`https://atrui.online/feed/getAllFeeds/${props.id}`)
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
    axios.get(`https://atrui.online/organizations/getAllOrgs/${props.id}`)
    .then(res => {
        setOrganizations(res.data[0])
    })
    .catch(err => { console.log(err)})

  },[])

  
  return (
    	<div className="w-9/12 m-auto rounded-lg bg-gray-200 mt-3 mb-3">
        <div className="p-3 lg:grid lg:grid-cols-4 ">
          <img classname="m-auto" src={`https://atrui.online/${organizations.image}`}/>
          <div className="p-3 m-3 col-start-2 col-span-2">
            <h1 className="text-xl font-bold">{organizations.orgname}</h1>
            <h1 className="whitespace-pre-line">{organizations.description}</h1>
            <Link to="/user/home">
            <button className="bg-blue-500 p-3 m-3 text-white">Go Back</button>
            </Link>
          </div>
          <div className="p-3 m-3">
            <h1>Location: {organizations.location}</h1>
            <h1>Contact Person: {organizations.contactperson}</h1>
            <h1>Contact Number:{organizations.contactno}</h1>
            <h1>Website: <a>{organizations.website}</a></h1>            
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
