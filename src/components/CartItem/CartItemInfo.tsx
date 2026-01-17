import type React from 'react';

interface CartItemInfoProps {
    productTitle: string;
    productType: string;
    productSize: number;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({ productTitle, productType, productSize }) => {
    return (
        <>
            <div className='cart__item-info'>
                <h3>{productTitle}</h3>
                <p>
                    {productType}тесто, {productSize}см.
                </p>
            </div>
        </>
    );
};

export default CartItemInfo;
