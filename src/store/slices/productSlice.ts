import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3000/pizzas';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    const { start, totalProductOnPage, sort, category, searchProductItem } = params;

    const url = `${baseUrl}?_start=${start}&_limit=${totalProductOnPage}&_sort=${sort}${category}${searchProductItem}`;
    const { data } = await axios.get(url);
    console.log(url);
    return data;
});

export const fetchAllPizzas = createAsyncThunk('pizza/fetchAllPizzasStatus', async (params) => {
    const { category, searchProductItem } = params;

    const url = `${baseUrl}?${category}${searchProductItem}`;
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

                if (action.payload.length === 0 && state.currentPage > 1) {
                    state.currentPage = 1;
                }
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'error';
                state.products = [];
                state.error = action.error.message;
                state.currentPage = 1;
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
