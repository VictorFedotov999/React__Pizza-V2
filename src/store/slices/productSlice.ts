import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    totalProductOnPage: 5,
    products: [],
    allProducts: [],
    isLoading: false,
    searchProduct: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setAllProducts(state, action) {
            state.allProducts = action.payload;
        },
        changeCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        changeIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setSearchProduct(state, action) {
            state.searchProduct = action.payload;
        },
    },
});

export const { setProducts, changeCurrentPage, setAllProducts, changeIsLoading, setSearchProduct } =
    productSlice.actions;

export default productSlice.reducer;
