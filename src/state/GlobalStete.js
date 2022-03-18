import React, { Component } from "react";

//import state context
import AuthState from "./AuthState";
import UserState from "./UserState";
import CartState from "./CartState";
import StoreState from "./StoreState";
import ProductState from "./ProductState";
import CategoryState from "./CategoryState";

export default class GlobalState extends Component {
    render() {
        return (
            <AuthState>
                <UserState>
                    <CartState>
                        <StoreState>
                            <ProductState>
                                <CategoryState>
                                    {this.props.children}
                                </CategoryState>
                            </ProductState>
                        </StoreState>
                    </CartState>
                </UserState>
            </AuthState>
        );
    }
}