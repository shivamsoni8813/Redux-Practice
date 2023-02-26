import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../conatiner/Header/Header'
import Product from '../conatiner/Product/Product'
import ProductDetails from '../conatiner/Product/ProductDetails/ProductDetails'
function Approuter() {
  return (
    <div>
        <Header/>
      <Routes>

        <Route path='/' element={<Product/>}></Route>
        <Route path='/Products/:id' element = {<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default Approuter
