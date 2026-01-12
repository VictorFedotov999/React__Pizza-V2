import { useDispatch, useSelector } from 'react-redux';
import CartItemRemoveSvg from './CartItemCount/CartItemRemoveSvg';
import { removeProduct } from '../../store/slices/cartSlice';
const CartItemRemove = ({ product }) => {
    const dispatch = useDispatch();

    const onRemoveProduct = () => {
        const obj = {
            id: product.id,
            types: product.types,
            sizes: product.sizes,
        };
        dispatch(removeProduct(obj));
    };

    return (
        <div className='cart__item-remove'>
            <div onClick={onRemoveProduct} className='button button--outline button--circle'>
                <CartItemRemoveSvg />
            </div>
        </div>
    );
};

export default CartItemRemove;
