// ACTION FOR DIFFRENET ACTION-TYPES

import { ActionTypes } from "../Constant/Action-type"   // importing action for setting diff. types of actions


export const setProduct = (product) =>{
    return{
        type : ActionTypes.SET_PRODUCT,
        payload : product
    }
}

export const selectProduct = (product) =>{
    return{
        type : ActionTypes.SELECT_PRODUCT,
        payload : product
    }
}

export const removeProduct = () =>{
    return {
        type : ActionTypes.REMOVE_PRODUCT,
    }
}