import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../store/slices/cartSlice';
import type { cartProductType } from '../../ts/cartSliceType';

const CartsItems: React.FC = () => {
    const { productsCart } = useSelector(cartSelector);
    return (
        <div className='content__items'>
            {productsCart.map((product: cartProductType, index) => (
                <CartItem key={`${product}-${index}`} product={product} />
            ))}
        </div>
    );
};

export default CartsItems;
