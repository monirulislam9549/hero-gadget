import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const { cartArray, products } = useLoaderData()
    console.log(products, cartArray);
    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;