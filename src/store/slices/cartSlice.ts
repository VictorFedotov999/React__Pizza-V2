import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { isSameProduct } from '../utils/utils';
import type { RootState } from '../store';
import type { cartProductType, cartSliceType, IdTypesSizesType } from '../../ts/cartSliceType';

const initialState: cartSliceType = {
    productsCart: [],
    totalCount: 0,
    totalOrder: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<cartProductType>) {
            const newProductCart = action.payload;

            const oneProduct = state.productsCart.find((product) =>
                isSameProduct(product, newProductCart),
            );
            if (oneProduct) {
                oneProduct.count += 1;
                state.totalCount += 1;
                state.totalOrder += oneProduct.price;
            } else {
                state.productsCart.push({
                    ...newProductCart,
                });
                state.totalCount += 1;
                state.totalOrder += newProductCart.price;
            }
        },

        plusCount(state, action: PayloadAction<IdTypesSizesType>) {
            const productCurrent = action.payload;

            const productPlus = state.productsCart.find((product) =>
                isSameProduct(product, productCurrent),
            );

            if (productPlus) {
                productPlus.count += 1;
                state.totalCount += 1;
                state.totalOrder += productPlus.price;
            }
        },
        minusCount(state, action: PayloadAction<IdTypesSizesType>) {
            const productCurrent = action.payload;
            const productMinusIndex = state.productsCart.findIndex((product) =>
                isSameProduct(product, productCurrent),
            );

            if (productMinusIndex !== -1) {
                const productMinus = state.productsCart[productMinusIndex];
                if (productMinus.count > 1) {
                    productMinus.count -= 1;
                    state.totalCount -= 1;
                    state.totalOrder -= productMinus.price;
                } else {
                    state.totalCount -= 1;
                    state.totalOrder -= productMinus.price;
                    state.productsCart.splice(productMinusIndex, 1);
                }
            }
        },
        clearCart(state) {
            state.productsCart = [];
            state.totalCount = 0;
            state.totalOrder = 0;
        },
        removeProduct(state, action: PayloadAction<IdTypesSizesType>) {
            const removeProduct = action.payload;
            const indexToRemove = state.productsCart.findIndex((product: cartProductType) =>
                isSameProduct(product, removeProduct),
            );

            if (indexToRemove !== -1) {
                const removedProduct = state.productsCart[indexToRemove];
                state.totalCount -= removedProduct.count;
                state.totalOrder -= removedProduct.price * removedProduct.count;
                state.productsCart.splice(indexToRemove, 1);
            }
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;

export const { addProductToCart, clearCart, plusCount, minusCount, removeProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
