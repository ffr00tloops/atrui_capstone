import * as React from "react"
import Nav_Atrz from '../components/Nav_Atrz'
import Footer from '../components/Footer'


function About() {
    return (
      <div className="mb-72 shadow-lg rounded-lg m-auto border-2 border-solid border-gray-100 p-3 lg:w-6/12 mt-16 mb-16 grid">
        <div >
        <h1 className="bg-green-500 text-2xl p-3 text-center font-bold text-white">About Us</h1>
        </div>            
        <h2 className="text-xl p-3">What is Lorem Ipsum?</h2>
        <p className="p-3">Lorem Ipsum is s imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

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
