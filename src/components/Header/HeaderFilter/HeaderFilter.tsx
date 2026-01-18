import React from 'react';
import { debounce } from 'lodash';
import iconSearch from '../../../assets/img/search.png';
import iconDelete from '../../../assets/img/krestik.png';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchProduct } from '../../../store/slices/filterSlice';
import type { AppDispatch } from '../../../store/store';

const HeaderFilter = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const [value, setValue] = React.useState('');

    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        setValue('');
        dispatch(setSearchProduct(''));

        if (inputRef.current) {
            inputRef.current.focus();
        }
        updateSearchValue.cancel();
    };

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchProduct(str));
        }, 1000),
        [dispatch],
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    if (location.pathname !== '/') {
        return null;
    }
    return (
        <>
            <div className='header-filter'>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput}
                    className='header-input'
                    type='text'
                    placeholder='Введите товар'
                />
                {value ? (
                    <img
                        onClick={onClickClear}
                        className='header-icon-delete '
                        src={iconDelete}
                        alt=''
                    />
                ) : (
                    <img className='header-icon' src={iconSearch} alt='' />
                )}
            </div>
        </>
    );
};

export default HeaderFilter;
