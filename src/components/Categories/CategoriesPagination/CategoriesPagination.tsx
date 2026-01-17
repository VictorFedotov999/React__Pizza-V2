import TitleProducts from '../../TitleProducts/TitleProducts';
import type { AppDispatch } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
    categoriesPaginationSelector,
    setPaginationActiveIndex,
} from '../../../store/slices/filterSlice';

const CategoriesPagination: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { paginationActiveIndex, paginationTitle } = useSelector(categoriesPaginationSelector);

    const onChangePaginationActiveIndex = (index: number) => {
        dispatch(setPaginationActiveIndex(index));
    };

    return (
        <div className='categories'>
            <ul>
                {paginationTitle.map((type: string, index: number) => (
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
