import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <>
      <Header/>
      <Outlet/> 
      {/* //represents the children element in the route  */}
      <Footer/>
    </>
  )
}

export default SharedLayout
