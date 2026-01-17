import TitleBasketSvg from './TitleBasketSvg';

const TitleBasket: React.FC = () => {
    return (
        <>
            <h2 className='content__title'>
                <TitleBasketSvg />
                Корзина
            </h2>
        </>
    );
};

export default TitleBasket;
