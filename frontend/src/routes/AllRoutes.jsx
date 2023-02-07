import { Box , Text} from '@chakra-ui/react'
import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import TopSection from '../components/Navbar/Navbar'
import TopNavbar from '../components/Navbar/TopNavbar'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
    
  )
}

export default AllRoutes
