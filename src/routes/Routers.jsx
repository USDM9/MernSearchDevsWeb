import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Services from '../pages/Services'
import Error from '../pages/Error'
import Developers from '../pages/Developers'
import DevelopersDetails from '../pages/DevelopersDetails'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/services' element={<Services />} />
      <Route path='/developers' element={<Developers />} />
      <Route path='/developers/:id' element={<DevelopersDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Routers
