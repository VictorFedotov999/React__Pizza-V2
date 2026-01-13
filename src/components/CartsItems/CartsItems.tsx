import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { cartSelector } from '../../store/slices/cartSlice';
const CartsItems = () => {
    const { productsCart } = useSelector(cartSelector);
    return (
        <div className='content__items'>
            {productsCart.map((product, index) => (
                <CartItem key={`${product}-${index}`} product={product} />
            ))}
        </div>
    );
};

export default CartsItems;
