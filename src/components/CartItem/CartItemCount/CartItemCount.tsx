import React from 'react';

import CartItemButtonMinus from './CartItemButtonMinus';
import CartItemButtonPlus from './CartItemButtonPlus';
import type { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { minusCount, plusCount } from '../../../store/slices/cartSlice';
import { createUpdateItem } from '../../../store/utils/utils';
import type { cartProductType } from '../../../ts/cartSliceType';

interface CartItemCountProps {
    productCount: number;
    product: cartProductType;
}

const CartItemCount: React.FC<CartItemCountProps> = ({ productCount, product }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onClickPlus = () => {
        const productCurrent = createUpdateItem(product);
        dispatch(plusCount(productCurrent));
    };

    const onClickMinus = () => {
        const productCurrent = createUpdateItem(product);
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
