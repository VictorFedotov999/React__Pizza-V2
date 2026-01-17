import type { ProductType } from '../../ts/productSliceType';

type isSameProductType = {
    id: string;
    types: string;
    sizes: number;
};

export const isSameProduct = (productOne: isSameProductType, productTwo: isSameProductType) => {
    return (
        productOne.id === productTwo.id &&
        productOne.types === productTwo.types &&
        productOne.sizes === productTwo.sizes
    );
};

export const createItemProduct = (
    product: ProductType,
    productType: string[],
    typeName: number,
    sizeType: number,
) => {
    return {
        id: product.id,
        imageUrl: product.imageUrl,
        name: product.name,
        types: productType[typeName],
        sizes: product.sizes[sizeType],
        price: product.price,
        category: product.category,
        rating: product.rating,
        count: 1,
    };
};

export const createUpdateItem = (product: isSameProductType) => {
    return {
        id: product.id,
        types: product.types,
        sizes: product.sizes,
    };
};
