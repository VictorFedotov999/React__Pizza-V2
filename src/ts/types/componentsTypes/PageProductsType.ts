import { ProductType } from '../productsType';
import { CartItemType } from '../basketType';
import { ProductInfoStateType } from '../productsType';
export interface PageProductsPropsType {
    products: ProductType[];
    categories: string[];
    ActiveCategoryIndex: number;
    productInfo: ProductInfoStateType;
    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;

    ActivePagination: (index: number) => void;
    UpdateProductInfo: (id: string, selectedType: number, selectedSize: number) => void;
    AddProductCart: (productDate: CartItemType) => void;
    activeSortPopup: (ActiveSortPopupIndex: number, OpenSortPopup: boolean) => void;
}
