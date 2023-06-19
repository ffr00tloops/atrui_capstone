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
import NavOldUser from "../../components/NavOldUser"


const imageStyle = {
  minHeight: "200px",
  maxHeight: "200px"
}

const cardStyle = {
  minHeight: "20em",
  maxHeight: "20em"
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
    <div className="m-auto mt-8 lg:mb-8">
      <div className="mt-16 lg:grid lg:grid-cols-4 lg:grid-rows-1 drop-shadow w-10/12 m-auto">
      {
        fundraisers.map(fundraiser => (
          <Link to={`/user/home/fundraisers/${fundraiser.id}`}>
          <div className="border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div className="p-3" style={cardStyle}>
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


  const cardStyle = {
    minHeight: "18em",
    maxHeight: "18em"
  }



  return (
    <div className="m-auto mt-8 mb-8">
      <div className="mt-16 lg:grid lg:grid-cols-4 lg:grid-rows-1 w-10/12 m-auto drop-shadow">
      {
        organizations.map(organization => (
          <Link to={`/user/home/organization/${organization.id}`}>
          <div className="text-center border-2 rounded-xl drop-shadow-lg border-gray-200 m-3">
            <div style={cardStyle} className="p-3">
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
    <div className="mb-32">
      <div className="lg:w-3/12 m-auto lg:my-10 grid grid-cols-2">
        <button onClick={() => setLocation('Fundraisers')} className="p-3 drop-shadow-lg font-bold lg:m-3 lg:rounded-lg hover:bg-gray-500 inline-block px-4 py-3 text-white bg-green-500 ">Fundraisers</button>
        <button onClick={() => setLocation('Organizers')} className="p-3 drop-shadow-lg lg:m-3 font-bold lg:rounded-lg  hover:bg-gray-500 inline-block px-4 py-3 text-white bg-green-500 ">Organizations</button>
      </div>
      {renderMenu()}
    </div>
  )
}



const SubPageFundraisers = props => {

  const imageSize = {
    minHeight: '450px'
    
  }


  const [isChecked, setIsChecked] = useState(false)
  const [fundraisers, setFundraisers] = useState([]);
  const [donationprogress, setDonationprogress] = useState([]);
  const [leaderboards, setLeaderBoard] = useState([]);


  const [amount, setAmount] = useState(0);
  
  const { user } = useAuth0();

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getAllPosts/${props.id}`)
    .then(res => {
        setFundraisers(res.data[0])
    })
    .catch(err => { console.log(err)})



  },[])    
  
  useEffect(() => {
  axios.get(`https://atrui.online/fundraisers/getFundraiserProgress/${fundraisers.title}`)
    .then(res => {
        setDonationprogress(res.data[0])
    })
    .catch(err => { console.log(err)})
  
  },[fundraisers])

  useEffect(() => {
    axios.get(`https://atrui.online/fundraisers/getFundraiserLeaderboard/${fundraisers.title}`)
    .then(res => {
      setLeaderBoard(res.data)
    })
    .catch(err => { console.log(err)})
  },[fundraisers])




  function Donate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    

    let donorname;


    today = mm + '/' + dd + '/' + yyyy;

    if (isChecked) {
      donorname = "Anonymous"
    } else {
      donorname = user.name
    }

    
    console.log(donorname)

    const postData = {
          "donor" : `${donorname}`,
          "fundraiser" : `${fundraisers.title}`,
          'datemade' : `${today}`,
          "amount" : `${amount}`,
          "uniqueid" : `${user.sub}`

      };

    
    
    const postDataPayment = {
        // Gcash Oayment Key "x-public-key" : "pk_6262bde60ed2ac4dd26b91fdffcbb2a9",
        "external_id": "atrui-payment",
        "amount" : `${amount}`,
        "description" : `For Fundraiser ${fundraisers.title}`,
    };


    /*
    const config = {
      headers: {
        "Origin": "localhost:8000",
        "Content-Type":"application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": "Basic eG5kX2RldmVsb3BtZW50X2RDWDU5bktVdXY3VlUwWTh0UXE3bEZiQmVaQkRYUUwxZUJWcnBacEVYdzhydlNBdUN6QTlFbGhBZEJJSWxrOg" 
      }
    }
    
    */


    

    if (amount < 100000 && amount > 0 ) {
      axios.post(`https://atrui.online/fundraisers/donate`, postData)
      .then( res => {
            console.log(res)
      })


      var data = new FormData();
      // Gcash Payment Key data.append("x-public-key", "pk_6262bde60ed2ac4dd26b91fdffcbb2a9");
      data.append("external_id", 'atrui-payment');
      data.append("amount", `${amount}`);
      data.append("description", `For Fundraiser ${fundraisers.title}`);
  
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;

  
      xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
          console.log();
          window.location.href = `${JSON.parse(this.responseText).invoice_url}`
      }
      });
  
      xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://api.xendit.co/v2/invoices");

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("Authorization", "Basic eG5kX2RldmVsb3BtZW50X2RDWDU5bktVdXY3VlUwWTh0UXE3bEZiQmVaQkRYUUwxZUJWcnBacEVYdzhydlNBdUN6QTlFbGhBZEJJSWxrOg");

  
      const jsonObj = {
        "external_id": "atrui-payment",
        "amount": `${amount}`,
        "description": `For Fundraiser ${fundraisers.title}`
        }

      xhr.send(JSON.stringify(jsonObj));

      /*

      axios.post(`https://cors-anywhere.herokuapp.com/https://g.payx.ph/payment_request`, postDataPayment)
      .then( res => {
            console.log(res)
      })
      .catch(error => console.log(error.toJSON()))

      */

      /*
      const bodyFormData = new FormData();
      bodyFormData.append("x-public-key", "pk_6262bde60ed2ac4dd26b91fdffcbb2a9")
      bodyFormData.append("amount", `${amount}`)
      bodyFormData.append("description", `For Fundraiser ${fundraisers.title}`)

      axios({
        method: "post",
        url : "https://cors-anywhere.herokuapp.com/https://g.payx.ph/payment_request",
        data: bodyFormData,
        headers: { "Content-Type":"application/json"}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

      */

      alert("You have submitted a donation");

    } else {
      alert("You cannot donate more than 100000 or less than 0")
    }


  }

  console.log(isChecked)

  
  return (
    	<div className="lg:w-10/12 m-auto rounded-lg bg-gray-200 mt-3 mb-14">
        <div className="p-3 m-3 lg:grid lg:grid-cols-3 grid-rows-1">
          <img className="col-start-1" style={imageSize} src={`https://atrui.online/${fundraisers.image}`}/>
          <div className="col-start-2">
            <h1 className="text-3xl p-3 m-3 font-bold">{fundraisers.title}</h1>
            <h1 className="p-3 m-3"><b>Date Made:</b>  {fundraisers.datemade}</h1>
            <h1 className="p-3 m-3"><b>Total Donation Goal: </b> ₱{fundraisers.donationgoal}</h1>
            <h1 className="p-3 m-3"><b>Money Raised:</b>₱{donationprogress.sum}</h1>
            <ProgressBar className="p-3 m-3" completed={donationprogress.percent} maxCompleted={100} />
            <div className="p-3 m-3 text-center">
              <input className="m-3" type="checkbox" onChange={() => setIsChecked(!isChecked)} />
              <label className="m-3">Donate Anonymously?</label>
              <input className="border-black border-2 rounded-xl" onChange={(e) => setAmount(e.target.value)} value={amount} />
              <button onClick={Donate} className="bg-green-500 rounded-xl p-3 m-3 text-white">Donate</button>
              <Link to="/user/home">
              <button className="bg-blue-500 rounded-xl p-3 m-3 text-white">Go Back</button>
              </Link>
            </div>
          </div>
          <div className="bg-white m-3 p-3 grid grid-cols-1 text-center">
            <div className="grid grid-cols-2">
              <h1 className="text-md font-bold text-red-600">Donor Name</h1>
              <h1 className="text-md font-bold text-blue-600">Donation Amount</h1>
            </div>
            {
              leaderboards.map(leaderboard => (
              <div className="grid grid-cols-2">
                  <h1 className="text-xl">{leaderboard.donor}</h1>
                  <h1 className="text-xl text-black">₱{leaderboard.amount}</h1>
              </div>
              ))
            }
          </div>
          <div className="p-3 m-3 col-start-1 col-span-3 ">
            <p className="whitespace-pre-line" >{fundraisers.description}</p>
            <div id="gcash-container"></div>
          </div>
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
    	<div className="w-9/12 m-auto rounded-lg bg-gray-200 mt-16 mb-96 ">
        <div className="p-3 m-auto lg:grid lg:grid-cols-4 ">
          <img className="p-3 m-3 m-auto" src={`https://atrui.online/${organizations.image}`}/>
          <div className="p-3 m-3 col-start-2 col-span-2">
            <h1 className="text-xl font-bold">{organizations.orgname}</h1>
            <h1 className="whitespace-pre-line">{organizations.description}</h1>
            <Link to="/user/home">
            <button className="bg-blue-500 p-3 my-6 rounded-xl text-white">Go Back</button>
            </Link>
          </div>
          <div className="p-3 m-3">
            <h1><b>Location:</b> {organizations.location}</h1>
            <h1><b>Contact Person:</b> {organizations.contactperson}</h1>
            <h1><b>Contact Number:</b>{organizations.contactno}</h1>
            <h1><b>Website:</b> <a>{organizations.website}</a></h1>            
          </div>
        </div>
      </div>
  )
}

const HomepageLogged = () => {
  return (
    <div>
      <NavOldUser/>
      <Router>
        <Nav path="/user/home"/> 
        <SubPageFundraisers path="/user/home/fundraisers/:id"/>
        <SubPageOrganization path="/user/home/organization/:id"/>
      </Router>
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(HomepageLogged)

export const Head = () => <title>Home Page</title>
