const CartItemInfo = ({ productTitle, productType, productSize }) => {
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
