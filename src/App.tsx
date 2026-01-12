import '../src/scss/app.scss';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import PageBasket from './components/PageBasket/PageBasket';
import PageProducts from './components/PageProducts/PageProducts';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setAllProducts, changeIsLoading } from './store/slices/productSlice';
import ProductEmpty from './components/ProductsEmpty/ProductEmpty';

const App = () => {
    const dispatch = useDispatch();
    const { allProducts, totalProductOnPage, currentPage, products } = useSelector(
        (state) => state.product,
    );

    const { paginationActiveIndex } = useSelector((state) => state.filter.categoriesPagination);
    const { sortirovkaActiveIndex, sortirovkaTitle } = useSelector(
        (state) => state.filter.categoriesSortirovka,
    );
    const { searchProduct } = useSelector((state) => state.filter);

    const start = (currentPage - 1) * totalProductOnPage;
    React.useEffect(() => {
        dispatch(changeIsLoading(true));
        const category = paginationActiveIndex === 0 ? '' : `&category=${paginationActiveIndex}`;
        axios
            .get(
                `http://localhost:3000/pizzas?_start=${start}&_limit=${totalProductOnPage}&_sort=${sortirovkaTitle[sortirovkaActiveIndex]}&${category}&name_like=${searchProduct}`,
            )
            .then((res) => {
                dispatch(setProducts(res.data));

                dispatch(changeIsLoading(false));
            });

        axios
            .get(`http://localhost:3000/pizzas?&${category}&name_like=${searchProduct}`)
            .then((res) => {
                dispatch(setAllProducts(res.data));
                dispatch(changeIsLoading(false));
            });
    }, [
        start,
        totalProductOnPage,
        sortirovkaTitle,
        sortirovkaActiveIndex,
        sortirovkaTitle,
        paginationActiveIndex,
        searchProduct,
    ]);

    return (
        <>
            <div className='wrapper'>
                <Header />
                <Routes>
                    <Route path='' element={<PageProducts />} />
                    <Route path='/cart' element={<PageBasket />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
