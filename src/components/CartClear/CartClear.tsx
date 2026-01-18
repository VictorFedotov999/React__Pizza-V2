import CartClearSvg from './CartClearSvg';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/slices/cartSlice';
import type { AppDispatch } from '../../store/store';

const CartClear: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <div onClick={onClearCart} className='cart__clear'>
                <CartClearSvg />
                <span>Очистить корзину</span>
            </div>
        </>
    );
};

export default CartClear;
