import Categories from '../Categories/Categories';
import ItemsProducts from '../ItemsProducts/ItemsProducts';
import Pagination from '../Pagination/Pagination';
const PageProducts = () => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <Categories />
                    <ItemsProducts />
                </div>
                <Pagination />
            </div>
        </>
    );
};

export default PageProducts;
