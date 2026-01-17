import React from 'react';
import ItemProductButton from './ItemProductButton/ItemProductButton';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../store/slices/cartSlice';
import { productSelector } from '../../store/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import { createItemProduct } from '../../store/utils/utils';
import type { ProductType } from '../../ts/productSliceType';
import type { AppDispatch } from '../../store/store';

interface ItemProductProps {
    product: ProductType;
}

const ItemProduct: React.FC<ItemProductProps> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { productType } = useSelector(productSelector);

    const [typeName, setTypeName] = React.useState(0);
    const [sizeType, setSizeType] = React.useState(0);

    const onAddProductToCart = () => {
        const productCart = createItemProduct(product, productType, typeName, sizeType);

        dispatch(addProductToCart(productCart));
    };

    const changeProduct = () => {
        navigate(`/${product.id}`);
    };

    return (
        <>
            <div className='pizza-block'>
                <img
                    className='pizza-block__image'
                    src={product.imageUrl}
                    alt='Pizza'
                    onClick={changeProduct}
                />
                <h4 className='pizza-block__title'>{product.name}</h4>
                <div className='pizza-block__selector'>
                    <ul>
                        {product.types.map((type: number, index: number) => (
                            <li
                                key={`${type}-${index}`}
                                className={typeName === index ? 'active' : ''}
                                onClick={() => setTypeName(index)}
                            >
                                {productType[type]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {product.sizes.map((size: number, index: number) => (
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

                    <ItemProductButton
                        product={product}
                        onAddProductToCart={onAddProductToCart}
                        sizeType={sizeType}
                        typeName={typeName}
                    />
                </div>
            </div>
        </>
    );
};

export default ItemProduct;
