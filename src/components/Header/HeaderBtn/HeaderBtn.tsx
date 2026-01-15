import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import HeaderBtnSvg from './HeaderBtnSvg';
import { cartSelector } from '../../../store/slices/cartSlice';

const HeaderBtn = () => {
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
            </div>
        </>
    );
};

export default HeaderBtn;
