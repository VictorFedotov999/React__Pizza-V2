import React from 'react';
import ItemProductButton from './ItemProductButton/ItemProductButton';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../store/slices/cartSlice';

const ItemProduct = ({ product }) => {
    const dispatch = useDispatch();

    const typeNames = ['Мясная', 'Традиционная'];
    const [typeName, setTypeName] = React.useState(0);
    const [sizeType, setSizeType] = React.useState(0);

    const onAddProductToCart = () => {
        const productCart = {
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name,
            types: typeNames[typeName],
            sizes: product.sizes[sizeType],
            price: product.price,
            category: product.category,
            rating: product.rating,
            count: 1,
        };
        dispatch(addProductToCart(productCart));
    };

    return (
        <>
            <div className='pizza-block'>
                <img className='pizza-block__image' src={product.imageUrl} alt='Pizza' />
                <h4 className='pizza-block__title'>{product.name}</h4>
                <div className='pizza-block__selector'>
                    <ul>
                        {product.types.map((type, index) => (
                            <li
                                key={`${type}-${index}`}
                                className={typeName === index ? 'active' : ''}
                                onClick={() => setTypeName(index)}
                            >
                                {typeNames[type]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {product.sizes.map((size, index) => (
                            <li
                                key={`${size}-${index}`}
                                className={sizeType === index ? 'active' : ''}
                                onClick={() => setSizeType(index)}
                            >
                                {size} cм.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='pizza-block__bottom'>
                    <div className='pizza-block__price'>{product.price} Руб</div>

                    <ItemProductButton onAddProductToCart={onAddProductToCart} />
                </div>
            </div>
        </>
    );
};

export default ItemProduct;
