import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Body = () => {
    const location = useLocation()
  return (
    <div>
      {location.pathname !== '/' && <Header />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
