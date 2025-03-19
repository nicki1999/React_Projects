import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Pages/Product";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import NotFound from "./Components/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product">
          <Route path="" element={<Product></Product>}></Route>
          <Route
            path="create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="details"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="list" element={<ProductList></ProductList>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
