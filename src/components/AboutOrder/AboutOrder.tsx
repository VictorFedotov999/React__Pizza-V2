import React from 'react';
import CartOrderDetails from './CartOrderDetails/CartOrderDetails';
import CartOrderButtons from './CartOrderButtons/CartOrderButtons';

const AboutOrder: React.FC = React.memo(() => {
    return (
        <>
            <div className='cart__bottom'>
                <CartOrderDetails />
                <CartOrderButtons />
            </div>
        </>
    );
});

export default AboutOrder;
