export type MapStateToPropsType = {
    totalPizzasCount: number;
    totalPrice: number;
};

export type MapDispatchPropsType = {};

export type PropsType = MapStateToPropsType & MapDispatchPropsType;
