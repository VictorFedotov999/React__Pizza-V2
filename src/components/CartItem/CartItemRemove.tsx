import CartItemRemoveSvg from './CartItemCount/CartItemRemoveSvg';

const CartItemRemove = () => {
    return (
        <div className='cart__item-remove'>
            <div className='button button--outline button--circle'>
                <CartItemRemoveSvg />
            </div>
        </div>
    );
};

export default CartItemRemove;
