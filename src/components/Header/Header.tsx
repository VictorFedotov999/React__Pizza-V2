import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderFilter from './HeaderFilter/HeaderFilter';
import HeaderBtn from './HeaderBtn/HeaderBtn';
import HeaderChangeTheme from './HeaderChangeTheme/HeaderChangeTheme';
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <HeaderLogo />
                <HeaderFilter />
                <HeaderBtn />
                <HeaderChangeTheme />
            </div>
        </div>
    );
};

export default Header;
