import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../component/default/About'
import Contact from '../component/default/Contact'
import Login from '../component/auth/login'
import Register from '../component/auth/Register'
import Pnf from '../component/default/Pnf'
import Home from '../component/default/Home'
import Store from '../Screen/Product/Store'
import ProductCart from '../Screen/Cart/ProductCart'
import ProductCheckout from '../Screen/checkout/ProductCheckout'
import ProductItem from '../Screen/Product/ProductItem'
import SingleProduct from '../Screen/Product/SingleProduct'


function Container() {
  return (
    <Routes>
        <Route path={`/`} element={<Home/>}>
            <Route path={`/`} element={<Store/>}/>
            <Route path={`/product/:id`} element={<SingleProduct/>}/>
            <Route path={`cart`} element={<ProductCart/>}/>
            <Route path={`checkout`} element={<ProductCheckout/>}/>
        </Route>

    
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/contact`} element={<Contact/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
  )
}

export default Container