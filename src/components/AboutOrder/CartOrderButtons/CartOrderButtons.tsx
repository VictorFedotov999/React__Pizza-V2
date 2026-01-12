import ButtonExit from './ButtonExit';
import ButtonPay from './ButtonPay';

const CartOrderButtons = () => {
    return (
        <>
            <div className='cart__bottom-buttons'>
                <ButtonExit />
                <ButtonPay />
            </div>
        </>
    );
};

export default CartOrderButtons;
