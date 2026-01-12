const CartItemPrice = ({ price }) => {
    return (
        <>
            <div className='cart__item-price'>
                <b>{price} ₽</b>
            </div>
        </>
    );
};

export default CartItemPrice;
