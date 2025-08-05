import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Product from '../Customer/Components/Product/Product'
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import Cart from '../Customer/Components/Cart/Cart'
import Checkout from '../Customer/Components/Checkout/Checkout'
import Order from '../Customer/Components/Order/Order'
import OrderDetail from '../Customer/Components/Order/OrderDetail'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            
        </div>
        <createBrowserRouter>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderDetail" element={<OrderDetail />} />
        </createBrowserRouter>
    </div>
  )
}

export default CustomerRouters