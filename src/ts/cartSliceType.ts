export type cartProductType = {
    id: string;
    imageUrl: string;
    name: string;
    types: string;
    sizes: number;
    price: number;
    category: number;
    rating: number;
    count: number;
};

export interface cartSliceType {
    productsCart: cartProductType[];
    totalCount: number;
    totalOrder: number;
}

export type IdTypesSizesType = {
    id: string;
    types: string;
    sizes: number;
};
