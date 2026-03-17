import React from 'react'
import TopHeader from './Swaroop/TopHeader'
import Navbar from './Swaroop/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Swaroop/Footer'

const Layout = ({LikedCount}) => {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
