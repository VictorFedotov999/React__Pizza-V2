import TitleProducts from '../../TitleProducts/TitleProducts';
import { useSelector, useDispatch } from 'react-redux';
import { setPaginationActiveIndex } from '../../../store/slices/filterSlice';

const CategoriesPagination = () => {
    const dispatch = useDispatch();

    const onChangePaginationActiveIndex = (index) => {
        dispatch(setPaginationActiveIndex(index));
    };

    const paginationActiveIndex = useSelector(
        (state) => state.filter.categoriesPagination.paginationActiveIndex,
    );

    const paginationTitle = useSelector(
        (state) => state.filter.categoriesPagination.paginationTitle,
    );

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
            <TitleProducts
                paginationActiveIndex={paginationActiveIndex}
                paginationTitle={paginationTitle}
            />
        </div>
    );
};

export default CategoriesPagination;
