import ReactPaginate from 'react-paginate';
import type { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector, changeCurrentPage } from '../../store/slices/productSlice';

const Pagination: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { totalProductOnPage, currentPage, allProducts, status } = useSelector(productSelector);

    const handlePageClick = (event: { selected: number }) => {
        const newPage = event.selected + 1;
        dispatch(changeCurrentPage(newPage));
        window.scrollTo(0, 0);
    };
    if (!allProducts) {
        return null;
    }
    const pageCount = Math.ceil(allProducts.length / totalProductOnPage);

    if (allProducts.length === 0 || status === 'loading' || status === 'error' || pageCount <= 1) {
        return null;
    }

    return (
        <>
            <div className={length < 0 ? 'none' : ''}>
                <ReactPaginate
                    className='pagination'
                    breakLabel='...'
                    nextLabel=' >'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel='< '
                    forcePage={currentPage - 1}
                    activeClassName={'activeLinkPage'}
                    pageLinkClassName={'LinkPage'}
                    nextClassName={'PaginationArrow'}
                    previousClassName={'PaginationArrow'}
                />
            </div>
        </>
    );
};

export default Pagination;
