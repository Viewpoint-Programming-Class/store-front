import Product from './Product';
import './Products.css';

import { useState, useEffect } from 'react';

const Products = ({addRemoveProduct, cartData}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/products/json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    
    return <article>
        <h1>Products</h1>
        <ul>
            {products.map((product) => {
                return <Product
                    cartData={cartData[product.ProductId]}
                    id={product.ProductId}
                    addRemoveProduct={addRemoveProduct}
                    name={product.ProductName}
                    description={product.Description}
                    image={product.Image}
                    price={product.Price}
                />
            })}
        </ul>
    </article>;
}


export default Products;