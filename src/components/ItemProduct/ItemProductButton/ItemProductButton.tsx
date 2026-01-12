import { useSelector } from 'react-redux';
import ItemProductButtonSvg from './ItemProductButtonSvg';

const ItemProductButton = ({ onAddProductToCart }) => {
    return (
        <>
            <div onClick={onAddProductToCart} className='button button--outline button--add'>
                <ItemProductButtonSvg />
                <span>Добавить</span>

                <i>1</i>
            </div>
        </>
    );
};

export default ItemProductButton;
