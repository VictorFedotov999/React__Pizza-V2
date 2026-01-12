import { useSelector } from 'react-redux';
import ItemProduct from '../ItemProduct/ItemProduct';
import AddProducts from './AddProducts';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';
import ProductEmpty from '../ProductsEmpty/ProductEmpty';
const ItemsProducts = (props) => {
    const { isLoading, products, totalProductOnPage } = useSelector((state) => state.product);

    const skeletonProduct = Array(totalProductOnPage).fill(0);

    if (isLoading) {
        return (
            <div className='content__items'>
                {skeletonProduct.map((_, index) => (
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
                {products.map((product, index) => (
                    <ItemProduct key={`${product.name}-${index}`} product={product} />
                ))}
            </div>
        );
    }
};

export default ItemsProducts;
