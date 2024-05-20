import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Body from './Components/Body/Body.jsx'
import Footer from './Components/Footer/Footer.jsx'

const WeatherApp = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default WeatherApp;
