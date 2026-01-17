import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { filterSliceType } from '../../ts/filterSliceType';

const initialState: filterSliceType = {
    categoriesPagination: {
        paginationActiveIndex: 0,
        paginationTitle: ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    },

    categoriesSortirovka: {
        sortirovkaActiveIndex: 0,

        sortirovkaTitle: ['rating', 'price', 'name'],
    },
    searchProduct: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPaginationActiveIndex(state, action: PayloadAction<number>) {
            state.categoriesPagination.paginationActiveIndex = action.payload;
        },

        setSortirovkaActiveIndex(state, action: PayloadAction<number>) {
            state.categoriesSortirovka.sortirovkaActiveIndex = action.payload;
        },

        setSearchProduct(state, action: PayloadAction<string>) {
            state.searchProduct = action.payload;
        },
    },
});

export const categoriesPaginationSelector = (state: RootState) => state.filter.categoriesPagination;
export const categoriesSortirovkaSelector = (state: RootState) => state.filter.categoriesSortirovka;
export const searchProductSelector = (state: RootState) => state.filter;

export const { setPaginationActiveIndex, setSortirovkaActiveIndex, setSearchProduct } =
    filterSlice.actions;

export default filterSlice.reducer;
