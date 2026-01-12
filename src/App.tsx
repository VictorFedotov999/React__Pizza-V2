import '../src/scss/app.scss';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import PageBasket from './components/PageBasket/PageBasket';
import PageProducts from './components/PageProducts/PageProducts';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setAllProducts, changeIsLoading } from './store/slices/productSlice';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const { allProducts, totalProductOnPage, currentPage } = useSelector((state) => state.product);

    const { paginationActiveIndex } = useSelector((state) => state.filter.categoriesPagination);
    const { sortirovkaActiveIndex, sortirovkaTitle } = useSelector(
        (state) => state.filter.categoriesSortirovka,
    );
    const start = (currentPage - 1) * totalProductOnPage;
    React.useEffect(() => {
        dispatch(changeIsLoading(true));
        const category = paginationActiveIndex === 0 ? '' : `&category=${paginationActiveIndex}`;
        axios
            .get(
                `http://localhost:3000/pizzas?_start=${start}&_limit=${totalProductOnPage}&_sort=${sortirovkaTitle[sortirovkaActiveIndex]}&${category}&name_like=Пикантные колбаски`,
            )
            .then((res) => {
                dispatch(setProducts(res.data));

                dispatch(changeIsLoading(false));
            });

        axios.get(`http://localhost:3000/pizzas?&${category}`).then((res) => {
            dispatch(setAllProducts(res.data));
        });
    }, [
        start,
        totalProductOnPage,
        sortirovkaTitle,
        sortirovkaActiveIndex,
        sortirovkaTitle,
        paginationActiveIndex,
    ]);

    return (
        <>
            <div className='wrapper'>
                <Header />
                <Routes>
                    <Route
                        path=''
                        element={
                            <PageProducts
                                totalProductOnPage={totalProductOnPage}
                                currentPage={currentPage}
                                allProducts={allProducts}
                            />
                        }
                    />
                    <Route path='/cart' element={<PageBasket />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
