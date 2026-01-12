const TitleProducts = ({ paginationActiveIndex, paginationTitle }) => {
    return <h2 className='content__title'>{paginationTitle[paginationActiveIndex]}</h2>;
};

export default TitleProducts;
