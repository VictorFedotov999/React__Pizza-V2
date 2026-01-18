const ProductButtonToCart: React.FC = () => {
    return (
        <>
            <div className='product-info__add-to-cart'>
                <button className='add-button'>
                    <svg viewBox='0 0 24 24'>
                        <circle cx='9' cy='21' r='1' />
                        <circle cx='20' cy='21' r='1' />
                        <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
                    </svg>
                    Добавить в корзину
                </button>
            </div>
        </>
    );
};

export default ProductButtonToCart;
