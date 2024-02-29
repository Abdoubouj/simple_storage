import React from 'react'
import Header from '../Header/Header'
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div className='app-conatiner'>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout