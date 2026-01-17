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
export interface productSliceType {
    currentPage: number;
    totalProductOnPage: number;
    products: ProductType[];
    allProducts: ProductType[];
    productId: ProductType | null;
    productType: string[];
    status: 'loading' | 'success' | 'error';
    error: string | undefined;
}

export type fetchProductType = {
    start: number;
    totalProductOnPage: number;
    sort: string;
    category: string;
    searchProductItem: string;
};

export type fetchAllProductType = {
    category: string;
    searchProductItem: string;
};

export type fetchPizzaIdType = {
    id: string | undefined;
};
