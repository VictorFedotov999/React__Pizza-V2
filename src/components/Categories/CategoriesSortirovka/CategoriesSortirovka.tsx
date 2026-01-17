import React from 'react';
import CategoriesSortirovkaSvgArrow from '../../Categories/CategoriesSortirovka/CategoriesSortirovkaSvg';
import type { AppDispatch } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
    setSortirovkaActiveIndex,
    categoriesSortirovkaSelector,
} from '../../../store/slices/filterSlice';

const CategoriesSortirovka: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = ['популярности', 'цене', 'алфавиту'];

    const { sortirovkaActiveIndex } = useSelector(categoriesSortirovkaSelector);
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
                <b className='sort_title'>Сортировка по:</b>
                <span onClick={() => onClickPopup()}>{categories[sortirovkaActiveIndex]}</span>
            </div>
            <div className={openPopup ? 'sort__popup' : 'sort__popup none'}>
                <ul>
                    {categories.map((type: string, index: number) => (
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
