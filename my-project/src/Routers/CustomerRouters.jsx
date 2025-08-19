import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import Product from "../Customer/Components/Product/Product";
import Cart from "../Customer/Components/Cart/Cart";
import Navigation from "../Customer/Components/Navigation/Navigation.jsx";
import Footer from "../Customer/Components/Footer/Footer";
import navigationData from "../Customer/Components/Navigation/navigationData";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import Checkout from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Order/Order";
import OrderDetail from "../Customer/Components/Order/OrderDetail";
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation navigationData={navigationData} />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
