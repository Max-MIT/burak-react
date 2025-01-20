import React from "react";
import { Route, Routes } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";

export default function ProductsPage() {
  return (
    <div className="products-page">
      <Routes>
        {/* Каталог товаров */}
        <Route path="/" element={<Products />} />

        {/* Конкретный продукт */}
        <Route path=":productId" element={<ChosenProduct />} />
      </Routes>
    </div>
  );
}
