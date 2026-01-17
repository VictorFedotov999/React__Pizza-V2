import type React from 'react';
import CartItemRemoveSvg from './CartItemCount/CartItemRemoveSvg';
import type { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../store/slices/cartSlice';
import type { cartProductType } from '../../ts/cartSliceType';
import { createUpdateItem } from '../../store/utils/utils';

interface CartItemRemove {
    product: cartProductType;
}

const CartItemRemove: React.FC<CartItemRemove> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onRemoveProduct = () => {
        const obj = createUpdateItem(product);
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
