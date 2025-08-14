import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Men from "./component/Men";
import Women from "./component/Women";
import About from "./component/About";
import Contact from "./component/Contact";
import Product_detail from "./component/sub/Product_detail";
import Cart from "./component/sub/Cart";
import Admin_login from "./component/admin/Admin_login";
import Layout from "./component/admin/Layout";
import Dashboard from "./component/admin/Dashboard";
import AddProduct from "./component/admin/AddProduct";
import Products from "./component/admin/Products";
import Order from "./component/admin/Order";
import All_Product from "./component/All_Product";
import Checkout from "./component/admin/Checkout";

// import "/css/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/all_product" element={<All_Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product_detail" element={<Product_detail />} />
          <Route path="/product_detail/:id" element={<Product_detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin_login" element={<Admin_login />} />

          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/add_product" element={<AddProduct />} />
            <Route path="/admin/add_product/:id" element={<AddProduct />} />
            <Route path="/admin/order" element={<Order />} />
          </Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
