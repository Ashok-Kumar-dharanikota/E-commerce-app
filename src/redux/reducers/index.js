import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

 export const reducers = combineReducers({
    allproducts: productReducer,
})

export default reducers;