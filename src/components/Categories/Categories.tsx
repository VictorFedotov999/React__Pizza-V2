import CategoriesPagination from './CategoriesPagination/CategoriesPagination';
import CategoriesSortirovka from './CategoriesSortirovka/CategoriesSortirovka';

const Categories: React.FC = () => {
    return (
        <div className='content__top'>
            <CategoriesPagination />
            <CategoriesSortirovka />
        </div>
    );
};

export default Categories;
