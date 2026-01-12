import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
} from '../../Redux/actions/productsActions';

export type ProductType = {
    id: string;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

export type ProductInfoType = {
    selectedType: number;
    selectedSize: number;
};

export type ProductInfoStateType = {
    [id: string]: ProductInfoType;
};

export type CategoriesType = {
    categoriesPagination: string[];
    ActiveCategoryIndex: number;
};

export type SortPopupType = {
    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

export type SetProductsType = {
    type: typeof SET_PRODUCTS;
    payload: {
        products: ProductType[];
    };
};

export type ActivePaginationType = {
    type: typeof ACTIVE_PAGINATION;
    payload: {
        index: number;
    };
};

export type UpdateProductInfoType = {
    type: typeof UPDATE_PRODUCT_INFO;
    payload: {
        id: string;
        selectedType: number;
        selectedSize: number;
    };
};

export type ActiveSortPopupType = {
    type: typeof ACTIVE_SORT__POPUP;
    payload: {
        ActiveSortPopupIndex: number;
        OpenSortPopup: boolean;
    };
};

export type ProductsActionType =
    | SetProductsType
    | ActivePaginationType
    | UpdateProductInfoType
    | ActiveSortPopupType;
