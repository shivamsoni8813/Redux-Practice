
// it takes action and intialState first

import { ActionTypes } from "../Constant/Action-type";

const init = {
    product : []
}

export const ProductReducer = (state = init, {type , payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
        return {...state, product : payload}            
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type , payload}) =>{
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return {...state, ...payload}            
        case ActionTypes.REMOVE_PRODUCT:
            return {}            
    
        default:
            return state;
    }
}

