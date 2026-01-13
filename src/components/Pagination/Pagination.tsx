import ReactPaginate from 'react-paginate';
import { changeCurrentPage } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector } from '../../store/slices/productSlice';
const Pagination = () => {
    const dispatch = useDispatch();

    const { totalProductOnPage, currentPage, allProducts, status } = useSelector(productSelector);

    const handlePageClick = (event) => {
        const newPage = event.selected + 1;
        dispatch(changeCurrentPage(newPage));
        window.scrollTo(0, 0);
    };

    const pageCount = Math.ceil(allProducts.length / totalProductOnPage);

    if (status === 'loading' || status === 'error' || pageCount <= 1 || allProducts.length === 0) {
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
                    previousLinkClassName={'PaginationArrow'}
                />
            </div>
        </>
    );
};

export default Pagination;
