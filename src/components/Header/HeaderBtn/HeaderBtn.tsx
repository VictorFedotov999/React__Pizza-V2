import { useSelector } from 'react-redux';
import HeaderBtnSvg from './HeaderBtnSvg';
import { Link } from 'react-router-dom';
const HeaderBtn = () => {
    const { totalCount, totalOrder } = useSelector((state) => state.cart);

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
