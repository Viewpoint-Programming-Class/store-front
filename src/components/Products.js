import Product from './Product';
import './Products.css';

const products = [
    {
        name: 'Chocolate Mask',
        description: 'Handmade Belgian Dark Chocolate Mask Pop',
        image: '/images/choc-mask.jpg',
        price: 3.25,
    },
    {
        name: 'Sumchas Purim Mask',
        description: 'Scratch Art Purim Masks Kit',
        image: '/images/sumchas-mask.jpg',
        price: 5.00,
    },
]

const Products = () => {
    return <article>
        <h1>Products</h1>
        <ul>
           <Product
                name={products[0].name}
                description={products[0].description}
                image={products[0].image}
                price={products[0].price}
           />
            <Product
                name={products[1].name}
                description={products[1].description}
                image={products[1].image}
                price={products[1].price}
            />
        </ul>
    </article>;
}


export default Products;