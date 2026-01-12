import React from 'react';
import { connect } from 'react-redux';
import PageProducts from './PageProducts';
import { AppStateType } from '../../Redux/reduxStore';
import {
    PropsType,
    MapStateToPropsType,
    MapDispatchPropsType,
} from '../../ts/types/componentsTypes/productsContainerType';

import {
    SetProducts,
    ActivePagination,
    UpdateProductInfo,
    activeSortPopup,
} from '../../Redux/actions/productsActions';
import { getPizzas } from '../../Redux/thunks/productsThunks';
import { addToCart } from '../../Redux/thunks/basketThunks';
import {
    getProductInfo,
    getFilteredSortedProducts,
    getSortPopup,
    getCategories,
} from '../../Redux/selectors/productsSelector';
import { getProductsCart } from '../../Redux/selectors/basketSelectors';

class PageProductsContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getPizzas();
    }

    render() {
        return (
            <PageProducts
                products={this.props.products}
                categories={this.props.categories}
                productInfo={this.props.productInfo}
                sortPopup={this.props.sortPopup}
                productsCart={this.props.productsCart}
                ActivePagination={this.props.ActivePagination}
                UpdateProductInfo={this.props.UpdateProductInfo}
                AddProductCart={this.props.AddProductCart}
                activeSortPopup={this.props.activeSortPopup}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        products: getFilteredSortedProducts(state),
        categories: getCategories(state),
        productInfo: getProductInfo(state),
        sortPopup: getSortPopup(state),
        productsCart: getProductsCart(state),
    };
};

export default connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        SetProducts,
        ActivePagination,
        UpdateProductInfo,
        AddProductCart: addToCart,
        getPizzas,
        activeSortPopup,
    },
)(PageProductsContainer);
