import { useSelector } from 'react-redux';
import { cartSelector } from '../../../store/slices/cartSlice';
const CartOrderDetails = () => {
    const { totalCount, totalOrder } = useSelector(cartSelector);

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
