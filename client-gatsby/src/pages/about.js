import * as React from "react"
import Nav_Atrz from '../components/Nav_Atrz'
import Footer from '../components/Footer'


function About() {
    return (
      <div className="mb-96 shadow-lg rounded-lg m-auto border-2 border-solid border-gray-100 p-3 lg:w-6/12 mt-16 grid">
        <div >
        <h1 className="bg-green-500 text-2xl p-3 text-center font-bold text-white">About Us</h1>
        </div>            
        <h2 className="text-xl font-bold p-3">What is Atrui?</h2>
        <p className="p-3">Atrui is a charity fundraising platform aimed at making the act of giving fun for its users. We employ leaderboards, badges, and ranking systems in the app and gamify them in order to entice users to donate more to our platform, in turn helping those in need of support.</p>

      </div> 
    )
  }
  

const AboutPage = () => {
  return (
    <div>
      <Nav_Atrz />
      <About />
      <Footer/>
    </div>
  )
}



export default AboutPage

export const Head = () => <title>About Page</title>
