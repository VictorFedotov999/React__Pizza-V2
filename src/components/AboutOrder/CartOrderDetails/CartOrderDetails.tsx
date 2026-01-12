import { useSelector } from 'react-redux';

const CartOrderDetails = () => {
    const totalCount = useSelector((state) => state.cart.totalCount);
    const totalOrder = useSelector((state) => state.cart.totalOrder);
    return (
        <>
            <div className='cart__bottom-details'>
                <span>
                    Всего пицц: <b>{totalCount} шт.</b>
                </span>

                <span>
                    Сумма заказа: <b> {totalOrder} ₽</b>
                </span>
            </div>
        </>
    );
};

export default CartOrderDetails;
