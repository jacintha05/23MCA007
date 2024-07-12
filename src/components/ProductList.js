// ProductList.js

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsFromAPI = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };

        fetchProductsFromAPI();
    }, []);

    return (
        <div>
            <h1>Products from E-commerce Company</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        {/* Add more product details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
