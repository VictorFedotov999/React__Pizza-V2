import React from 'react';
import HeaderBtnSvg from './HeaderBtnSvg';
import HeaderChangeTheme from '../HeaderChangeTheme/HeaderChangeTheme';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { cartSelector } from '../../../store/slices/cartSlice';

const HeaderBtn: React.FC = () => {
    const { totalCount, totalOrder } = useSelector(cartSelector);
    const location = useLocation();
    return (
        <>
            <div className='header__cart'>
                {location.pathname !== '/cart' && (
                    <Link to='/cart'>
                        <div className='button button--cart'>
                            <span>{totalOrder} ₽</span>
                            <div className='button__delimiter'></div>
                            <HeaderBtnSvg />
                            <span>{totalCount}</span>
                        </div>
                    </Link>
                )}

                <HeaderChangeTheme />
            </div>
        </>
    );
};

export default HeaderBtn;
