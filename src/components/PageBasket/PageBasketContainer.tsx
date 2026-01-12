import React from 'react';
import { connect } from 'react-redux';
import PageBasket from './PageBasket';
import { AppStateType } from '../Redux/reduxStore';
import {
    getProductsCart,
    getTotalPizzasCount,
    getTotalPrice,
} from '../Redux/selectors/basketSelectors';
import {
    getProductCart,
    removeCartThunk,
    removeCartProductThunk,
    plusCountProductThunk,
    minusCountProductThunk,
} from '../Redux/thunks/basketThunks';
import {
    MapStateToPropsType,
    MapDispatchPropsType,
    PropsType,
} from '../ts/types/componentsTypes/pageBasketContainerType';

class PageBasketContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getProductCart();
    }

    render() {
        return (
            <PageBasket
                productsCart={this.props.productsCart}
                totalPizzasCount={this.props.totalPizzasCount}
                totalPrice={this.props.totalPrice}
                removeCartThunk={this.props.removeCartThunk}
                removeCartProductThunk={this.props.removeCartProductThunk}
                plusCountProductThunk={this.props.plusCountProductThunk}
                minusCountProductThunk={this.props.minusCountProductThunk}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        productsCart: getProductsCart(state),
        totalPizzasCount: getTotalPizzasCount(state),
        totalPrice: getTotalPrice(state),
    };
};

export default connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        getProductCart,
        removeCartThunk,
        removeCartProductThunk,
        plusCountProductThunk,
        minusCountProductThunk,
    },
)(PageBasketContainer);
