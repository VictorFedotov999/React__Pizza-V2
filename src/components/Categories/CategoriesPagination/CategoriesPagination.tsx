import TitleProducts from '../../TitleProducts/TitleProducts';
import { useSelector, useDispatch } from 'react-redux';
import {
    categoriesPaginationSelector,
    setPaginationActiveIndex,
} from '../../../store/slices/filterSlice';

const CategoriesPagination = () => {
    const dispatch = useDispatch();
    const { paginationActiveIndex, paginationTitle } = useSelector(categoriesPaginationSelector);

    const onChangePaginationActiveIndex = (index) => {
        dispatch(setPaginationActiveIndex(index));
    };

    return (
        <div className='categories'>
            <ul>
                {paginationTitle.map((type, index) => (
                    <li
                        key={`${type}-${index}`}
                        onClick={() => onChangePaginationActiveIndex(index)}
                        className={paginationActiveIndex === index ? 'active' : ''}
                    >
                        {type}
                    </li>
                ))}
            </ul>
            <TitleProducts />
        </div>
    );
};

export default CategoriesPagination;
