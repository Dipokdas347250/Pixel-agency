import React from 'react'
import Header from '../componets/Header'
import { Outlet } from 'react-router'
import Footer from '../componets/Footer'

const RootLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayout