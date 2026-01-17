import React from 'react';

interface CartItemPriceProps {
    price: number;
}

const CartItemPrice: React.FC<CartItemPriceProps> = ({ price }) => {
    return (
        <>
            <div className='cart__item-price'>
                <b>{price} ₽</b>
            </div>
        </>
    );
};

export default CartItemPrice;
