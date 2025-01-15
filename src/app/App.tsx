import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Routes, useLocation  } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { OrdersPage } from './screens/ordersPage';
import { UsersPage } from './screens/userPage';
import { ProductsPage } from './screens/productsPage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { Footer } from './components/footer';

function App() {
  const location = useLocation();
  

  return (
    <>
     
     {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
        <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
 );
}


export default App;