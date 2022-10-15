import * as React from "react"
import Nav_Atrz from '../components/Nav_Atrz'
import Footer from '../components/Footer'
import { Link } from "gatsby";
/* 👇 New Code */ 

function Posts() {
  return (
    <div className="w-10/12 m-auto mt-8 mb-8">
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

function Banner() {
  return (
    <div className="bg-green-500 p-3">
      <h1 className="p-3 m-3 text-center text-5xl text-white font-bo"> Featured Fundraisers</h1>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div>
      <Nav_Atrz />
      <Banner />
      <Posts />
      <Footer/>
    </div>
  )
}



export default IndexPage

export const Head = () => <title>Home Page</title>
