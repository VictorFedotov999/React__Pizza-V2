import { CartItemType } from '../basketType';

export type MapStateToPropsType = {
    productsCart: CartItemType[];
    totalPizzasCount: number;
    totalPrice: number;
};

export type MapDispatchPropsType = {
    getProductCart: () => void;
    removeCartThunk: () => void;
    removeCartProductThunk: (key: string) => void;
    plusCountProductThunk: (key: string) => void;
    minusCountProductThunk: (key: string) => void;
};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
