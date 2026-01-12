import ReactPaginate from 'react-paginate';
import { changeCurrentPage } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({ totalProductOnPage, currentPage, allProducts }) => {
    const dispatch = useDispatch();
    const handlePageClick = (event) => {
        const newPage = event.selected + 1;
        dispatch(changeCurrentPage(newPage));
        window.scrollTo(0, 0);
    };

    const length = Math.ceil(allProducts.length / totalProductOnPage);

    return (
        <>
            <div className=''>
                <ReactPaginate
                    className='pagination'
                    breakLabel='...'
                    nextLabel=' >'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={length}
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
