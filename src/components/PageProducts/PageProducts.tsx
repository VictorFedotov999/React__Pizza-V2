import Categories from '../Categories/Categories';
import ItemsProducts from '../ItemsProducts/ItemsProducts';
import Pagination from '../Pagination/Pagination';
const PageProducts = ({ totalProductOnPage, currentPage, allProducts }) => {
    return (
        <>
            <div className='content'>
                <div className='container'>
                    <Categories />
                    <ItemsProducts />
                </div>
                <Pagination
                    totalProductOnPage={totalProductOnPage}
                    currentPage={currentPage}
                    allProducts={allProducts}
                />
            </div>
        </>
    );
};

export default PageProducts;
