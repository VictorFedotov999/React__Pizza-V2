import CartItemImg from './CartItemImg.tsx';
import CartItemInfo from './CartItemInfo.tsx';
import CartItemPrice from './CartItemPrice.tsx';
import CartItemCount from './CartItemCount/CartItemCount';
import CartItemRemove from './CartItemRemove';
import React from 'react';
import type { cartProductType } from '../../ts/cartSliceType.ts';

interface CartItemProps {
    product: cartProductType;
}

const CartItem: React.FC<CartItemProps> = React.memo(({ product }) => {
    const price = product.count * product.price;

    return (
        <div className='cart__item'>
            <CartItemImg productImg={product.imageUrl} />
            <CartItemInfo
                productTitle={product.name}
                productType={product.types}
                productSize={product.sizes}
            />
            <CartItemCount productCount={product.count} product={product} />
            <CartItemPrice price={price} />
            <CartItemRemove product={product} />
        </div>
    );
});

export default CartItem;
