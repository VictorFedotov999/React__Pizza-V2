import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderFilter from './HeaderFilter/HeaderFilter';
import HeaderBtn from './HeaderBtn/HeaderBtn';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <HeaderLogo />
                <HeaderFilter />
                <HeaderBtn />
            </div>
        </div>
    );
};

export default Header;
