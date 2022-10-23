import * as React from "react"
import {useState} from "react"
import Footer from '../../components/Footer'
import Nav_Atrz from "../../components/Nav_Atrz"
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


function NewFundraiser(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [donationgoal, setAmount] = useState('');
    const [duration, setDuration] = useState('');

    const [selectedFile, setSelectedFile] = React.useState(null);



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const { user } = useAuth0();
    const orgname = user.name

    today = mm + '/' + dd + '/' + yyyy;


    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("organizer", orgname);
      formData.append("title", title);
      formData.append("donationgoal", donationgoal);
      formData.append("description", description);
      formData.append("duration", duration);
      formData.append("datemade", today);
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/fundraisers/createFundraiser",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert('You submitted a new fundraiser')
      } catch(error) {
        console.log(error)
      }
    }    
    
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }

  return (
    <div className="bg-gray-300 col-span-3 ">
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-1">
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
          <label>Fundraiser Picture:</label>
          <input onChange={handleFileSelect} type="file" className="col-span-3 border-2" />
        </div>
        <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
          <label>Fundraiser Name:</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title} className="col-span-3 border-2" />
        </div>
        <div className="bg-white m-3 p-3 grid grid-cols-4 grid-rows-6 text-center">
          <label>Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="col-span-3 row-span-6 border-2" />
        </div>
        <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
          <label>Donation Amount:</label>
          <input onChange={(e) => setAmount(e.target.value)} value={donationgoal} va placeholder="Philippine Pesos" className="col-span-3 border-2" />
        </div>
        <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
          <label>Duration</label>
          <input onChange={(e) => setDuration(e.target.value)} value={duration} placeholder="Days" className="col-span-3 border-2" />
        </div>
        <button type="submit" className="bg-green-500 p-3 m-3 " >Create Fundraiser +</button>
      </div>
    </form>
  </div>
  )
}

function NewOrg(){

  const [orgname, setOrgname] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [contactno, setContactno] = useState('')
  const [contactperson, setContactperson] = useState('')

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("orgname", orgname);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("contactno", contactno);
    formData.append("contactperson", contactperson);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/organizations/createOrganization",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },

      });
      
        alert('You submitted a new Organization')
    } catch(error) {
      console.log(error)
    }
  }    
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

return (
  <div className="bg-gray-300 col-span-3 ">
  <form onSubmit={handleSubmit}>
    <div className="grid lg:grid-cols-1">
    <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Organization Picture:</label>
        <input onChange={handleFileSelect} type="file" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Organization Name:</label>
        <input onChange={(e) => setOrgname(e.target.value)} value={orgname} className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 grid-rows-6 text-center">
        <label>Description:</label>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="col-span-3 row-span-6 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Location:</label>
        <input onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Manila" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="dan@gmail.com" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Website:</label>
        <input onChange={(e) => setWebsite(e.target.value)} value={website} placeholder="atrui.com" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Contact Number:</label>
        <input onChange={(e) => setContactno(e.target.value)} value={contactno} placeholder="02968443" className="col-span-3 border-2" />
      </div>
      <div className="bg-white m-3 p-3 grid grid-cols-4 text-center">
        <label>Contact Person:</label>
        <input onChange={(e) => setContactperson(e.target.value)} value={contactperson} placeholder="Daniel George" className="col-span-3 border-2" />
      </div>
      <button type="submit" className="bg-green-500 p-3 m-3 " >Create Organization +</button>
    </div>
  </form>
</div>
)
}

function Main() {

  

  const [location, setLocation] = useState('NewFundraiser')

  const {
    isAuthenticated,
    logout,
    } = useAuth0();

  // this function will trigger which menu is displayed 
  function renderMenu() {
    if (location == 'Home') {
      window.location.href = "/user/home"
    }
    else if (location == 'NewFundraiser') {
      return <NewFundraiser />
    }
    else if (location == 'NewOrg') {
      return <NewOrg />
    }
    else {
      return <h1>Error</h1>
    }

  }

  return (
    <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 m-auto">
      <div className="grid grid-cols-1 lg:grid-rows-2 bg-white">
        <div className="grid grid-cols-1">
            <button onClick={() => setLocation('Home')}  className="cursor-pointer hover:bg-blue-500 bg-blue-700 text-white p-3">Home</button>
            <button onClick={() => setLocation('NewFundraiser')}  className="cursor-pointer hover:bg-gray-300 bg-green-200 p-3">New Fundraiser +</button>
            <button onClick={() => setLocation('NewOrg')}  className="cursor-pointer hover:bg-gray-300 bg-green-200 p-3">New Organization + </button>
            <button onClick={() => { logout({ returnTo: window.location.origin })}}className="cursor-pointer bg-red-500 hover:bg-red-300 text-white p-3">Logout</button>
        </div>
      </div>

      {renderMenu()}

    </div>
  )
}

function Banner() {
  return (
    <div className="bg-green-500 p-3">
      <h1 className="p-3 m-3 text-center text-5xl text-white font-bo">Admin Dashboard</h1>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <Nav_Atrz/>
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}



export default withAuthenticationRequired(Dashboard)

export const Head = () => <title>Admin Dashboard</title>
