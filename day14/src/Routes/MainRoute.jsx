import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "../Components/PrivateRoute";
import EditProduct from "../Pages/EditProduct";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/product/:id" element={<SingleProduct />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
        <Route path="Login" element={<Login />} ></Route>
        <Route path="Signup" element={<Signup />} ></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default MainRoute;