import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartsItems = () => {
    const productsCart = useSelector((state) => state.cart.productsCart);
    return (
        <div className='content__items'>
            {productsCart.map((product, index) => (
                <CartItem key={`${product}-${index}`} product={product} />
            ))}
        </div>
    );
};

export default CartsItems;
