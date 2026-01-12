const CartItemImg = ({ productImg }) => {
    return (
        <>
            <div className='cart__item-img'>
                <img className='pizza-block__image' src={productImg} alt='Pizza' />
            </div>
        </>
    );
};

export default CartItemImg;
