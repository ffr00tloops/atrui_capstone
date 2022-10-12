import * as React from "react"
import Nav_Atrz from '../components/Nav_Atrz'
import Footer from '../components/Footer'


function EmailForm() {
    return (
      <div className="shadow-lg rounded-lg m-auto border-2 border-solid border-gray-100 p-3 text-center lg:w-6/12 mt-16 mb-16 grid">
        <h1 className="text-2xl p-3 font-bold">Send us an Inquiry!</h1>
        <input className="border-gray-300 border-2 p-3 m-3 rounded-lg" placeholder="Name"/>
        <input className="border-gray-300 border-2 p-3 m-3 rounded-lg" placeholder="Email Address"/>
        <input className="border-gray-300 border-2 p-3 m-3 rounded-lg" placeholder="Phone Number"/>
        <input type="text" className="border-gray-300 border-2 p-3 m-3 lg:pr-64 pb-64 rounded-lg" placeholder="Write your message here"/>
        <button className="hover:bg-green-900 hover:text-white mt-14 pr-8 pl-8 text-xl p-3 rounded-xl text-lg text-white bg-green-400">Send Inquiry</button>
      </div> 
    )
  }
  

const Contact = () => {
  return (
    <div>
      <Nav_Atrz />
      <EmailForm />
      <Footer/>
    </div>
  )
}



export default Contact

export const Head = () => <title>Contact Page</title>
