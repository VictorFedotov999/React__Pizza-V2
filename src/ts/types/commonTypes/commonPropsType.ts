import { ProductType, ProductInfoStateType } from '../productsType';
import { CartItemType } from '../basketType';

export type CountLogicPropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

export type ProductActionsPropsType = {
    UpdateProductInfo: (id: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
};

export type ProductLogicBasePropsType = {
    productInfo: ProductInfoStateType;
    productsCart: CartItemType[];
} & ProductActionsPropsType;

export type ItemsProductsPropsType = ProductLogicBasePropsType & {
    products: ProductType[];
};

export type ItemProductPropsType = ProductLogicBasePropsType & {
    product: ProductType;
};

export type CartActionsPropsType = {
    removeCartProductThunk: (key: string) => void;
    plusCountProductThunk: (key: string) => void;
    minusCountProductThunk: (key: string) => void;
};

export type CartLogicBasePropsType = {
    productsCart: CartItemType[];
} & CartActionsPropsType;

export type CartsItemsPropsType = CartLogicBasePropsType;

export type CartItemPropsType = {
    cartItem: CartItemType;
    onDelete: () => void;
    onPlus: () => void;
    onMinus: () => void;
};

export type CartItemLogicPropsType = {
    cartItem: CartItemType;
};
