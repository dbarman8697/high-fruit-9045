import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Discount from '../pages/Discount'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Wishlist from '../pages/Wishlist'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/discount' element={<Discount/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='wishlist' element={<Wishlist/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
