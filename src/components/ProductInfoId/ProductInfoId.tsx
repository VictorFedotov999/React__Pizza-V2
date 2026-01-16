import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector } from '../../store/slices/productSlice';
import ButtonBack from '../ButtonBack/ButtonBack';
import ProductButtonToCart from './ProductButtonToCart';
import ProductSvg from './ProductSvg';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../store/slices/cartSlice';

const ProductInfoId = () => {
    const dispatch = useDispatch();
    const { productType } = useSelector(productSelector);
    const [product, setProduct] = React.useState();
    const navigate = useNavigate();
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const { id } = useParams();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`http://localhost:3000/pizzas/${id}`);
                setProduct(data);
            } catch (error) {
                console.error('Ошибка загрузки товара:', error);
            }
        }

        fetchPizza();
    }, [id]);

    const typeNames = ['Мясная', 'Традиционная'];

    if (!product) {
        return (
            <div className='container'>
                <div className='loading'>Загрузка...</div>
            </div>
        );
    }

    const onAddProductToCart = () => {
        const productCart = {
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name,
            types: productType[activeType],
            sizes: product.sizes[activeSize],
            price: product.price,
            category: product.category,
            rating: product.rating,
            count: 1,
        };
        dispatch(addProductToCart(productCart));
    };

    return (
        <div className='container product-info'>
            <Link to='/'>
                <ButtonBack />
            </Link>

            <div className='product-info__content'>
                <div className='product-info__image'>
                    <img src={product.imageUrl} alt={product.name} />
                </div>

                <div className='product-info__details'>
                    <h1 className='product-info__title'>{product.name}</h1>

                    <div className='product-info__meta'>
                        <div className='product-info__rating'>
                            <ProductSvg />
                            {product.rating}/10
                        </div>
                        <div className='product-info__category'>
                            Категория: {productType[activeType]}
                        </div>
                    </div>

                    <div className='product-info__price'>{product.price} ₽</div>

                    <div className='product-info__description'>
                        <p>
                            Вкуснейшая пицца "{product.name}" с самым лучшим сочетанием
                            ингредиентов. Идеальный выбор для любого случая!
                        </p>
                    </div>

                    <div className='product-info__options'>
                        <div className='product-info__section'>
                            <h3 className='prouduct__info-type'>Выберите тип теста:</h3>
                            <div className='product-info__types'>
                                {product.types.map((type, index) => (
                                    <div
                                        key={index}
                                        className={`option-item ${
                                            activeType === index ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveType(index)}
                                    >
                                        {typeNames[type]}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='product-info__section'>
                            <h3 className='product__info-size'>Выберите размер:</h3>
                            <div className='product-info__sizes'>
                                {product.sizes.map((size, index) => (
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
