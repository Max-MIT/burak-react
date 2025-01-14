import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Routes  } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { OrdersPage } from './screens/ordersPage';
import { UsersPage } from './screens/userPage';
import { ProductsPage } from './screens/productsPage';

function App() {
  return (
    <div>
        <nav>
          <ul>
          <li>
              <Link to="/HomePage">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
 );
}


export default App;