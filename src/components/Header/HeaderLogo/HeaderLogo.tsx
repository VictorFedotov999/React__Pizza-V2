import ImgHeaderLogo from '../../../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';
const HeaderLogo = () => {
    return (
        <>
            <Link to='/'>
                <div className='header__logo'>
                    <img width='38' src={ImgHeaderLogo} alt='Pizza logo' />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HeaderLogo;
