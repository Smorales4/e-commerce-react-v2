import './App.css';
import { Helmet } from "react-helmet";
import './Global.css';
import Home from './pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
      </Helmet>
      <Routes>
          <Route path='/products' element={<ProductsPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='*' element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
