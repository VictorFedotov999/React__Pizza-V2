import { useSelector } from 'react-redux';
import ItemProductButtonSvg from './ItemProductButtonSvg';
import { productSelector } from '../../../store/slices/productSlice';
import { cartSelector } from '../../../store/slices/cartSlice';
import type { ProductType } from '../../../ts/productSliceType';

interface ItemProductButtonProps {
    onAddProductToCart: () => void;
    product: ProductType;
    sizeType: number;
    typeName: number;
}

const ItemProductButton: React.FC<ItemProductButtonProps> = ({
    onAddProductToCart,
    product,
    sizeType,
    typeName,
}) => {
    const { productType } = useSelector(productSelector);
    const { productsCart } = useSelector(cartSelector);

    const currentProduct = productsCart
        .filter(
            (obj) =>
                obj.id === product.id &&
                obj.types === productType[typeName] &&
                obj.sizes === product.sizes[sizeType],
        )
        .reduce((sum, item) => sum + item.count, 0);

    return (
        <>
            <div onClick={onAddProductToCart} className='button button--outline button--add'>
                <ItemProductButtonSvg />
                <span>Добавить</span>

                {currentProduct > 0 && <i>{currentProduct}</i>}
            </div>
        </>
    );
};

export default ItemProductButton;
