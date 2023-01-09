import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    // making a GET request to the server to retrieve the products data
    axios
      .get('http://localhost:5500/products', {
      })
      .then((response) => {
        // setting the products data to the state
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // fetch the products when the component mounts
    fetchProducts();
  }, [fetchProducts]); // include 'fetchProducts' in the dependency array

  return (

<div className="flex justify-center px-20 pt-10">
  <div className="grid grid-cols-3 gap-4 justify-center">
    {    
      products.map((product) => {
        return (
          <div className="rounded-lg shadow-xl bg-white max-w-sm pt-4">
            <img className="rounded-t-lg object-contain h-48 w-96" src={product.image} alt="product images" />
            <h5 className='text-gray-900 text-xl font-medium mb-2'>{product.name}</h5>
            <span className='text-gray-700 text-base mb-4'>{product.brand}</span>
            <h4 className='text-gray-700 text-base mb-4'>{product.price}</h4>
            <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
              Shop Now
            </button>
          </div>
        )
      })
    }
  </div>
</div>)}