import * as React from "react"
import Nav_Atrz from '../components/Nav_Atrz'
import Footer from '../components/Footer'
import { Link } from "gatsby";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import {useEffect, useState} from "react"
import axios from 'axios'
const imageStyle = {
  minHeight: "300px",
  maxHeight: "300px"
}


function Fundraisers() {



  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/fundraisers/getAllPosts/")
    .then(res => {
        setFundraisers(res.data)
    })
    .catch(err => { console.log(err)})

  },[])
  
  return (
    <div className="lg:w-10/12 m-auto mt-8 mb-64">
      <h1 className="text-center text-green-600 text-5xl p-3 m-3">Featured Fundraisers</h1>
      <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-1 w-10/12 m-auto">
      {
        fundraisers.map(fundraiser => (
          <Link to={`/user/home/fundraisers/${fundraiser.id}`}>
          <div className="border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3">
              <img className="m-auto" style={imageStyle} src={`http://localhost:3000/${fundraiser.image}`}/>
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

function Banner() {
  return (
    <div className="bg-green-500 p-3">
      <h1 className="p-3 m-3 text-center text-5xl text-white font-bold"> Featured Fundraisers</h1>
    </div>
  )
}

function Motto() {

  const imageStyles = {
    maxHeight: "20em",
    maxWidth: "20em",
    margin: "auto"
  }

  return (
    <div className="bg-green-500 p-12">
      <img style={imageStyles} src="https://cdn.discordapp.com/attachments/688647892084588626/1041719681809141800/logo-no-background.png"/>
      <h1 className="text-center font-bold text-5xl text-white italic">Your change can make a difference</h1>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div>
      <Nav_Atrz />
      <Motto/>
      <Fundraisers />
      <Footer/>
    </div>
  )
}



export default IndexPage

export const Head = () => <title>Home Page</title>
