import React from 'react';
import iconSearch from '../../../assets/img/search.png';
import { setSearchProduct } from '../../../store/slices/productSlice';
import { useDispatch } from 'react-redux';

const HeaderFilter = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeText = () => {
        setSearchValue(inputRef.current.value);
    };

    const inputRef = React.useRef('');
    // React.useEffect(() => {
    //     dispatch(dispatch(setSearchProduct(searchValue)));
    // }[searchValue,dispatch]);
    return (
        <>
            <div className='header-filter'>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={onChangeText}
                    className='header-input'
                    type='text'
                    placeholder='Введите товар'
                />
                <img className='header-icon' src={iconSearch} alt='' />
            </div>
        </>
    );
};

export default HeaderFilter;
