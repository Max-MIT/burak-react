import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Container, Switch } from "@mui/material";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";

export default function ProductsPage() {
  const products = useParams();
  console.log("products:", products);

    return ( 
    <div className={"products-page"}>
      <Routes>
        <Route path={`${products.path}/:productId`}>
        <ChosenProduct/>
        </Route>
        <Route path={`${products.path}`}>
          <Products/>
        </Route>
      </Routes>
    </div>
    );
  }