import ProductEmptyPhoto from '../../assets/img/ProductEmpty.png';

const ProductEmpty: React.FC = () => {
    return (
        <>
            <div className='container container--cart '>
                <div className='cart cart--empty'>
                    <h2 className=''>Данный товар не нашелся</h2>
                    <p>Вероятней всего, товара нету в наличие.</p>
                    <img src={ProductEmptyPhoto} alt='Empty Product' />
                </div>
            </div>
        </>
    );
};

export default ProductEmpty;
