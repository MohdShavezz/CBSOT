import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2>About</h2>
        <Link to={'/about/car'}>Car</Link>
        <br />
        <Link to={'/about/bike'}>Bike</Link>
        <br />
        <Outlet />         
    </div>
  )
}

export default About