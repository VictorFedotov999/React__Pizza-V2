import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderBtnSvg from './HeaderBtnSvg';
import { cartSelector } from '../../../store/slices/cartSlice';

const HeaderBtn = () => {
    const { totalCount, totalOrder } = useSelector(cartSelector);

    return (
        <Link to='/cart'>
            <div className='header__cart'>
                <div className='button button--cart'>
                    <span>{totalOrder} ₽</span>
                    <div className='button__delimiter'></div>
                    <HeaderBtnSvg />
                    <span>{totalCount}</span>
                </div>
            </div>
        </Link>
    );
};

export default HeaderBtn;
