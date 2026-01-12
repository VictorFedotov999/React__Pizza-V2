import React from 'react';
import CategoriesSortirovkaSvgArrow from '../../Categories/CategoriesSortirovka/CategoriesSortirovkaSvg';
import { setSortirovkaActiveIndex } from '../../../store/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
const CategoriesSortirovka = () => {
    const dispatch = useDispatch();
    const categories = ['популярности', 'цене', 'алфавиту'];

    const { sortirovkaActiveIndex } = useSelector((state) => state.filter.categoriesSortirovka);
    const [openPopup, setOpenPopup] = React.useState(false);

    const onChangeSortirovkaActiveIndex = (index: number) => {
        dispatch(setSortirovkaActiveIndex(index));
        setOpenPopup(false);
    };

    const onClickPopup = () => {
        setOpenPopup(true);
    };
    return (
        <div className='sort '>
            <div className='sort__label'>
                <CategoriesSortirovkaSvgArrow />
                <b>Сортировка по:</b>
                <span onClick={() => onClickPopup()}>{categories[sortirovkaActiveIndex]}</span>
            </div>
            <div className={openPopup ? 'sort__popup' : 'sort__popup none'}>
                <ul>
                    {categories.map((type, index) => (
                        <li
                            key={`${type}-${index}`}
                            onClick={() => onChangeSortirovkaActiveIndex(index)}
                            className={sortirovkaActiveIndex === index ? 'active' : ''}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoriesSortirovka;
