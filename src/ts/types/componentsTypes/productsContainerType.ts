import { CategoriesType, ProductType, SortPopupType, ProductInfoStateType } from '../productsType';
import { CartItemType } from '../basketType';

export type MapStateToPropsType = {
    products: ProductType[];
    categories: CategoriesType;
    sortPopup: SortPopupType;
    productInfo: ProductInfoStateType;
    productsCart: CartItemType[];
};

export type MapDispatchPropsType = {
    SetProducts: (products: ProductType[]) => void;
    ActivePagination: (index: number) => void;
    UpdateProductInfo: (id: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    getPizzas: () => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
