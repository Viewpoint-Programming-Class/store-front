import Product from './Product';
import './Products.css';

const Products = () => {
    return <article>
        <h1>Products</h1>
        <ul>
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
        </ul>
    </article>;
}


export default Products;