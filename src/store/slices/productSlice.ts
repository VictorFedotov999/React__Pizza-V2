import axios from 'axios';
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import type {
    fetchProductType,
    fetchAllProductType,
    productSliceType,
    ProductType,
    fetchPizzaIdType,
} from '../../ts/productSliceType';

const baseUrl = 'http://localhost:3000/pizzas';

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: fetchProductType): Promise<ProductType[]> => {
        const { start, totalProductOnPage, sort, category, searchProductItem } = params;

        const url = `${baseUrl}?_start=${start}&_limit=${totalProductOnPage}&_sort=${sort}${category}${searchProductItem}`;
        const { data } = await axios.get<ProductType[]>(url);
        console.log(url);
        return data;
    },
);

export const fetchAllPizzas = createAsyncThunk(
    'pizza/fetchAllPizzasStatus',
    async (params: fetchAllProductType): Promise<ProductType[]> => {
        const { category, searchProductItem } = params;

        const url = `${baseUrl}?${category}${searchProductItem}`;
        const { data } = await axios.get<ProductType[]>(url);
        return data;
    },
);

export const fetchPizzaId = createAsyncThunk(
    'pizzaId/fetchPizzasStatus',
    async (params: fetchPizzaIdType): Promise<ProductType> => {
        const { id } = params;

        const url = `${baseUrl}/${id}`;
        const { data } = await axios.get<ProductType>(url);
        console.log(url);
        return data;
    },
);

const initialState: productSliceType = {
    currentPage: 1,
    totalProductOnPage: 8,
    products: [],
    allProducts: [],
    productType: ['Мясная', 'Традиционная'],
    productId: null,
    status: 'loading',
    error: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.products = [];
            state.error = '';
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.status = 'success';
            state.products = action.payload;
            state.error = '';
            if (action.payload.length === 0 && state.currentPage > 1) {
                state.currentPage = 1;
            }
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.products = [];
            state.error = action.error.message;
            state.currentPage = 1;
        });

        builder.addCase(fetchAllPizzas.pending, (state) => {
            state.status = 'loading';
            state.allProducts = [];
            state.error = '';
        });
        builder.addCase(fetchAllPizzas.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.status = 'success';
            state.allProducts = action.payload;
            state.error = 'null';
        });
        builder.addCase(fetchAllPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.allProducts = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchPizzaId.pending, (state) => {
            state.status = 'loading';
            state.productId = null;
            state.error = '';
        });
        builder.addCase(fetchPizzaId.fulfilled, (state, action: PayloadAction<ProductType>) => {
            state.status = 'success';
            state.productId = action.payload;
            state.error = '';
        });
        builder.addCase(fetchPizzaId.rejected, (state, action) => {
            state.status = 'error';
            state.productId = null;
            state.error = action.error.message;
        });
    },
});

export const productSelector = (state: RootState) => state.product;

export const { changeCurrentPage } = productSlice.actions;

export default productSlice.reducer;
