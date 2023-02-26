// cobining all the reducers

import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
    allproduct : ProductReducer,
    singleProduct : selectedProductReducer
})
