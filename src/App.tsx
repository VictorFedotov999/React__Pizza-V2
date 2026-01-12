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
    const allProducts = useSelector((state) => state.product.allProducts);
    const totalProductOnPage = useSelector((store) => store.product.totalProductOnPage);
    const currentPage = useSelector((store) => store.product.currentPage);
    const sortirovkaActiveIndex = useSelector(
        (state) => state.filter.categoriesSortirovka.sortirovkaActiveIndex,
    );
    const sortirovkaTitle = useSelector(
        (state) => state.filter.categoriesSortirovka.sortirovkaTitle,
    );

    const start = (currentPage - 1) * totalProductOnPage;
    React.useEffect(() => {
        dispatch(changeIsLoading(true));
        axios
            .get(
                `http://localhost:3000/pizzas?_start=${start}&_limit=${totalProductOnPage}&_sort=${sortirovkaTitle[sortirovkaActiveIndex]}`,
            )
            .then((res) => {
                dispatch(setProducts(res.data));

                dispatch(changeIsLoading(false));
            });

        axios.get('http://localhost:3000/pizzas').then((res) => {
            dispatch(setAllProducts(res.data));
        });
    }, [currentPage, sortirovkaActiveIndex]);

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
