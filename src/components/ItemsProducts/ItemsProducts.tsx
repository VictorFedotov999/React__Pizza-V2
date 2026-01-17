import ItemProduct from '../ItemProduct/ItemProduct';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';
import ProductEmpty from '../ProductsEmpty/ProductEmpty';
import { useSelector } from 'react-redux';
import { productSelector } from '../../store/slices/productSlice';
import type { ProductType } from '../../ts/productSliceType';

const ItemsProducts: React.FC = () => {
    const { status, products, totalProductOnPage } = useSelector(productSelector);

    const skeletonProduct = Array(totalProductOnPage).fill(0);

    if (status === 'loading') {
        return (
            <div className='content__items'>
                {skeletonProduct.map((_, index: number) => (
                    <SkeletonProduct key={`${_}-${index}`} />
                ))}
            </div>
        );
    }
    if (products.length === 0) {
        return <ProductEmpty />;
    } else {
        return (
            <div className='content__items'>
                {products.map((product: ProductType, index: number) => (
                    <ItemProduct key={`${product.name}-${index}`} product={product} />
                ))}
            </div>
        );
    }
};

export default ItemsProducts;
