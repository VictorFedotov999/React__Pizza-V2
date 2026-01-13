import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    const {
        start,
        totalProductOnPage,
        sortirovkaTitle,
        sortirovkaActiveIndex,
        category,
        searchProduct,
    } = params;

    const url = `http://localhost:3000/pizzas?_start=${start}&_limit=${totalProductOnPage}&_sort=${sortirovkaTitle[sortirovkaActiveIndex]}&${category}&name_like=${searchProduct}`;
    const { data } = await axios.get(url);

    return data;
});

export const fetchAllPizzas = createAsyncThunk('pizza/fetchAllPizzasStatus', async (params) => {
    const { category, searchProduct } = params;

    const url = `http://localhost:3000/pizzas?&${category}&name_like=${searchProduct}`;
    const { data } = await axios.get(url);
    return data;
});

const initialState = {
    currentPage: 1,
    totalProductOnPage: 8,
    products: [],
    allProducts: [],
    productType: ['Мясная', 'Традиционная'],
    status: 'loading',
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.products = [];
                state.error = null;
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'success';
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'error';
                state.products = [];
                state.error = action.error.message;
            })

            .addCase(fetchAllPizzas.pending, (state) => {
                state.status = 'loading';
                state.allProducts = [];
                state.error = null;
            })
            .addCase(fetchAllPizzas.fulfilled, (state, action) => {
                state.status = 'success';
                state.allProducts = action.payload;
                state.error = null;
            })
            .addCase(fetchAllPizzas.rejected, (state, action) => {
                state.status = 'error';
                state.allProducts = [];
                state.error = action.error.message;
            });
    },
});

export const productSelector = (state) => state.product;

export const { changeCurrentPage } = productSlice.actions;

export default productSlice.reducer;
