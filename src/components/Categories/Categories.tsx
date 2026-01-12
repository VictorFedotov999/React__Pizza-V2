import CategoriesPagination from './CategoriesPagination/CategoriesPagination';
import CategoriesSortirovka from './CategoriesSortirovka/CategoriesSortirovka';

const Categories = () => {
    return (
        <div className='content__top'>
            <CategoriesPagination />
            <CategoriesSortirovka />
        </div>
    );
};

export default Categories;
