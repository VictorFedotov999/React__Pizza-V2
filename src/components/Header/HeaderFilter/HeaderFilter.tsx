import React from 'react';
import iconSearch from '../../../assets/img/search.png';
import iconDelete from '../../../assets/img/krestik.png';
import { setSearchProduct } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';

const HeaderFilter = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');

    const inputRef = React.useRef();

    const onClickClear = () => {
        setValue('');
        dispatch(setSearchProduct(''));

        if (inputRef.current) {
            inputRef.current.focus();
        }
        updateSearchValue.cancel();
    };

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchProduct(str));
        }, 1000),
        [dispatch],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
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
