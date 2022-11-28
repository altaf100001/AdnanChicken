import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Cart } from '../Cart/Cart'
import { Home } from '../Homepage/Home'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home a={"a"} />}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  )
}
