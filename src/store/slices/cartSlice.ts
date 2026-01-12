import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsCart: [],
    totalCount: 0,
    totalOrder: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action) {
            const newProductCart = action.payload;

            const oneProduct = state.productsCart.find(
                (product) =>
                    product.id === newProductCart.id &&
                    product.types === newProductCart.types &&
                    product.sizes === newProductCart.sizes,
            );
            if (oneProduct) {
                oneProduct.count += 1;
                state.totalCount += 1;
                state.totalOrder += oneProduct.price;
            } else {
                state.productsCart.push({ ...newProductCart });
                state.totalCount += 1;
                state.totalOrder += newProductCart.price;
            }
        },

        clearCart(state) {
            state.productsCart = [];
        },

        plusCount(state, action) {
            const productCurrent = action.payload;

            const productPlus = state.productsCart.find(
                (product) =>
                    product.id === productCurrent.id &&
                    product.types === productCurrent.types &&
                    product.sizes === productCurrent.sizes,
            );
            productPlus.count += 1;
            state.totalCount += 1;
            state.totalOrder += productPlus.price;
        },
        minusCount(state, action) {
            const productCurrent = action.payload;
            const productMinusIndex = state.productsCart.findIndex(
                (product) =>
                    product.id === productCurrent.id &&
                    product.sizes === productCurrent.sizes &&
                    product.types === productCurrent.types,
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

        removeProduct(state, action) {
            const removeProduct = action.payload;
            const indexToRemove = state.productsCart.findIndex(
                (product) =>
                    product.id === removeProduct.id &&
                    product.types === removeProduct.types &&
                    product.sizes === removeProduct.sizes,
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

export const { addProductToCart, clearCart, plusCount, minusCount, removeProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
