import { useSelector } from 'react-redux';
import { categoriesPaginationSelector } from '../../store/slices/filterSlice';

const TitleProducts = () => {
    const { paginationActiveIndex, paginationTitle } = useSelector(categoriesPaginationSelector);

    return <h2 className='content__title'>{paginationTitle[paginationActiveIndex]}</h2>;
};

export default TitleProducts;
