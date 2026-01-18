import React from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import ProductInfoId from './components/ProductInfoId/ProductInfoId';
import PageProducts from './components/PageProducts/PageProducts';
import NotFindPage from './components/NotFindPage/NotFindPage';
import PageBasket from './components/PageBasket/PageBasket';
import { fetchAllPizzas, fetchPizzas, productSelector } from './store/slices/productSlice';
import {
    categoriesPaginationSelector,
    categoriesSortirovkaSelector,
    searchProductSelector,
} from './store/slices/filterSlice';
import type { AppDispatch } from './store/store';

export const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { totalProductOnPage, currentPage } = useSelector(productSelector);
    const { paginationActiveIndex } = useSelector(categoriesPaginationSelector);
    const { sortirovkaActiveIndex, sortirovkaTitle } = useSelector(categoriesSortirovkaSelector);
    const { searchProduct } = useSelector(searchProductSelector);

    const start = (currentPage - 1) * totalProductOnPage;
    const sort = sortirovkaTitle[sortirovkaActiveIndex];

    const category = paginationActiveIndex === 0 ? '' : `&category=${paginationActiveIndex}`;
    const searchProductItem = searchProduct.length > 1 ? `&name_like=${searchProduct}` : '';

    React.useEffect(() => {
        dispatch(
            fetchPizzas({
                start,
                totalProductOnPage,
                sort,
                category,
                searchProductItem,
            }),
        );

        dispatch(
            fetchAllPizzas({
                category,
                searchProductItem,
            }),
        );
    }, [start, totalProductOnPage, sort, category, searchProductItem]);

    return (
        <>
            <div className='wrapper'>
                <Header />
                <Routes>
                    <Route path='/' element={<PageProducts />} />
                    <Route path='/cart' element={<PageBasket />} />
                    <Route path='/:id' element={<ProductInfoId />} />
                    <Route path='/*' element={<NotFindPage />} />
                </Routes>
            </div>
        </>
    );
};
