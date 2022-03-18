import React, { useState, useEffect, useReducer } from 'react';
import CategoryReducer from '../reducer/CategoryReducer';
import CategoryContext from '../context/CategoryContext';
import { CategoryAction } from '../actions/CategoryAction';

//import services
import CategoryService from '../services/CategoryService';

export default function CategoryState(props) {

    const initialState = {
        categories: []
    }

    const [state, dispatch] = useReducer(CategoryReducer, initialState);

    useEffect(() => {

        CategoryService.getAllCategories()
            .then(response => getCategories(response));

    }, []);

    const getCategories = (value) => {
        dispatch({
            type: CategoryAction.GET_CATEGORIES,
            payload: value
        })
    }

    return (
        <CategoryContext.Provider value={{
            categories: state.categories
        }}>
            {props.children}
        </CategoryContext.Provider>
    );
}