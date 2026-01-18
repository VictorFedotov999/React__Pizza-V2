import React from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import ProductButtonToCart from './ProductButtonToCart';
import ProductSvg from './ProductSvg';
import { Link, useParams } from 'react-router-dom';
import type { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzaId, productSelector } from '../../store/slices/productSlice';
import { addProductToCart } from '../../store/slices/cartSlice';
import { createItemProduct } from '../../store/utils/utils';

const ProductInfoId: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { productId } = useSelector(productSelector);
    const { productType } = useSelector(productSelector);

    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        dispatch(fetchPizzaId({ id }));
    }, [id, dispatch]);

    if (!productId || !productId.id) {
        return (
            <div className='container'>
                <div className='loading'>Загрузка...</div>
            </div>
        );
    }

    const onAddProductToCart = () => {
        const productCart = createItemProduct(productId, productType, activeType, activeSize);

        dispatch(addProductToCart(productCart));
    };

    return (
        <div className='container product-info'>
            <Link to='/'>
                <ButtonBack />
            </Link>

            <div className='product-info__content'>
                <div className='product-info__image'>
                    <img src={productId.imageUrl} alt={productId.name} />
                </div>

                <div className='product-info__details'>
                    <h1 className='product-info__title'>{productId.name}</h1>

                    <div className='product-info__meta'>
                        <div className='product-info__rating'>
                            <ProductSvg />
                            {productId.rating}/10
                        </div>
                        <div className='product-info__category'>
                            Категория: {productType[activeType]}
                        </div>
                    </div>

                    <div className='product-info__price'>{productId.price} ₽</div>

                    <div className='product-info__description'>
                        <p>
                            Вкуснейшая пицца "{productId.name}" с самым лучшим сочетанием
                            ингредиентов. Идеальный выбор для любого случая!
                        </p>
                    </div>

                    <div className='product-info__options'>
                        <div className='product-info__section'>
                            <h3 className='prouduct__info-type'>Выберите тип теста:</h3>
                            <div className='product-info__types'>
                                {productId.types.map((type, index) => (
                                    <div
                                        key={index}
                                        className={`option-item ${
                                            activeType === index ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveType(index)}
                                    >
                                        {productType[type]}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='product-info__section'>
                            <h3 className='product__info-size'>Выберите размер:</h3>
                            <div className='product-info__sizes'>
                                {productId.sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`option-item ${
                                            activeSize === index ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveSize(index)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div onClick={onAddProductToCart}>
                        <ProductButtonToCart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoId;
