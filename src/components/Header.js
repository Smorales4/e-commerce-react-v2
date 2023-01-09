import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className='flex'>
      <Link to="/">
        <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcRrf5lgxh2d7ONwEVgOaOCZ_kwZUqv0vra2TIt9mUjuBopThQdO" class="logo" alt="loro's" className='h-16 w-16'/>
      </Link>
      </div>
      <div className='flex'>
        <ul className="flex h-auto w-full ">
          <li>
            <Link to="/home" className="header-text">Home</Link>
          </li>
          <li>
            <Link to="/products" className="header-text">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="header-text">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="header-text">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </Link>
          </li>
        </ul>
        </div>
      <section>
        <Outlet></Outlet>
      </section>
    </nav>
  );
};

export default Header;