import { useDispatch } from 'react-redux';
import CartClearSvg from './CartClearSvg';
import { clearCart } from '../../store/slices/cartSlice';
const CartClear = () => {
    const dispatch = useDispatch();
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
