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
    },
});

export const { setPaginationActiveIndex, setSortirovkaActiveIndex } = filterSlice.actions;

export default filterSlice.reducer;
