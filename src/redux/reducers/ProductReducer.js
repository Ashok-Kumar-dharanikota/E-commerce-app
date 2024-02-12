import { actionTypes } from "../constants/ActionTypes";

const initialState = {
    cart: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS: {
            const existingProductIndex = state.cart.findIndex(product => product.id === payload.id);
            console.log(existingProductIndex);
            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity = updatedCart[existingProductIndex].quantity + 1;
                return { ...state, cart: updatedCart };
            }
            else {
                payload.quantity = payload.quantity + 1;
                return { ...state, cart: [...state.cart, payload] };
            }
        }
        case actionTypes.REMOVE_SELECTED_PRODUCT: {
            const existingProductIndex = state.cart.findIndex(product => product.id === payload);
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity = updatedCart[existingProductIndex].quantity - 1;

            return { ...state, cart: updatedCart };
        }
        case actionTypes.ADD_SELECTED_PRODUCT: {
            const existingProductIndex = state.cart.findIndex(product => product.id === payload);
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity = updatedCart[existingProductIndex].quantity + 1;

            return { ...state, cart: updatedCart };
        }
        case actionTypes.REMOVE_ALL_PRODUCTS: {
            return {...state, cart: payload}
        }

        default:
            return state;
    }
}
