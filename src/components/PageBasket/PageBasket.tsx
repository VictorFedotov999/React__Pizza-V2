import TitleBasket from '../TitleBasket/TitleBasket';
import CartClear from '../CartClear/CartClear';
import CartsItems from '../CartsItems/CartsItems';
import AboutOrder from '../AboutOrder/AboutOrder';
import BasketEmpty from '../BasketEmpy/BasketEmpy';
import { useSelector } from 'react-redux';

const PageBasket = () => {
    const { productsCart } = useSelector((state) => state.cart);
    if (productsCart.length === 0) {
        return <BasketEmpty />;
    }

    return (
        <div className='content'>
            <div className='container container--cart'>
                <div className='cart'>
                    <div className='cart__top'>
                        <TitleBasket />
                        <CartClear />
                    </div>

                    <CartsItems />
                    <AboutOrder />
                </div>
            </div>
        </div>
    );
};

export default PageBasket;
