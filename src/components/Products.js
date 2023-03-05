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
    {
        name: 'Colorful Mask',
        description: 'A very colorful mask',
        image: '/images/colorful-mask.jpg',
        price: 10.00,
    }
]

const Products = () => {
    return <article>
        <h1>Products</h1>
        <ul>
            {products.map((product) => {
                return <Product
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                />
            })}
        </ul>
    </article>;
}


export default Products;