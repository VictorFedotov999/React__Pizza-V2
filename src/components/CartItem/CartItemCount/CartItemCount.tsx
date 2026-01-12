import { useDispatch } from 'react-redux';
import CartItemButtonMinus from './CartItemButtonMinus';
import CartItemButtonPlus from './CartItemButtonPlus';
import { minusCount, plusCount } from '../../../store/slices/cartSlice';

const CartItemCount = ({ productCount, product }) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        const productCurrent = {
            id: product.id,
            types: product.types,
            sizes: product.sizes,
            count: product.count,
        };
        dispatch(plusCount(productCurrent));
    };

    const onClickMinus = () => {
        const productCurrent = {
            id: product.id,
            types: product.types,
            sizes: product.sizes,
            count: product.count,
        };
        dispatch(minusCount(productCurrent));
    };

    return (
        <div className='cart__item-count'>
            <div onClick={onClickMinus}>
                <CartItemButtonMinus />
            </div>
            <b>{productCount}</b>
            <div onClick={onClickPlus}>
                <CartItemButtonPlus />
            </div>
        </div>
    );
};

export default CartItemCount;
