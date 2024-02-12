import { actionTypes } from "../constants/ActionTypes"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const removeSelectedProduct = (productId) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: productId
    }
}

export const addSelectedProduct = (productId) => {
    return {
        type: actionTypes.ADD_SELECTED_PRODUCT,
        payload: productId
    }
}

export const removeAllProducts = (product) => {
    return {
        type: actionTypes.REMOVE_ALL_PRODUCTS,
        payload: product
    }
}