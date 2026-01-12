import CartOrderDetails from './CartOrderDetails/CartOrderDetails';
import CartOrderButtons from './CartOrderButtons/CartOrderButtons';

const AboutOrder = () => {
    return (
        <>
            <div className='cart__bottom'>
                <CartOrderDetails />
                <CartOrderButtons />
            </div>
        </>
    );
};

export default AboutOrder;
