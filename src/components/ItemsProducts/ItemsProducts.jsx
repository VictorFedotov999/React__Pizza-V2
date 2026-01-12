import { useSelector } from 'react-redux';
import ItemProduct from '../ItemProduct/ItemProduct';
import AddProducts from './AddProducts';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';
const ItemsProducts = (props) => {
    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.products);
    const totalProductOnPage = useSelector((state) => state.product.totalProductOnPage);
    const skeletonProduct = Array(totalProductOnPage).fill(0);

    if (isLoading) {
        return (
            <div className='content__items'>
                {skeletonProduct.map((_, index) => (
                    <SkeletonProduct key={`${_}-${index}`} />
                ))}
            </div>
        );
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
