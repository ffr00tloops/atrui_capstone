import * as React from "react"
import Footer from '../components/Footer'
import NavLogged from '../components/NavLogged'



const HomepageLogged = () => {
  return (
    <div>
      <NavLogged />
      <Footer />
    </div>
  )
}



export default HomepageLogged

export const Head = () => <title>Home Page</title>
