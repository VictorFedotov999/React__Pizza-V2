import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        setPaginationActiveIndex(state, action) {
            state.categoriesPagination.paginationActiveIndex = action.payload;
        },

        setSortirovkaActiveIndex(state, action) {
            state.categoriesSortirovka.sortirovkaActiveIndex = action.payload;
        },

        setSearchProduct(state, action) {
            state.searchProduct = action.payload;
        },
    },
});

export const categoriesPaginationSelector = (state) => state.filter.categoriesPagination;
export const categoriesSortirovkaSelector = (state) => state.filter.categoriesSortirovka;
export const searchProductSelector = (state) => state.filter;

export const { setPaginationActiveIndex, setSortirovkaActiveIndex, setSearchProduct } =
    filterSlice.actions;

export default filterSlice.reducer;
