import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
