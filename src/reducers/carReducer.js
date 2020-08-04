import { types } from "../types/types";

/* 
    carCustomer: {[
        ...product
    ]}
*/

const initialState = {
    carCustomer: []
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.carAddToCar:
            return {
                ...state,
                carCustomer: [...state.carCustomer, action.payload]
            }

        case types.carDeleteFromCar:
            return {
                ...state,
                carCustomer: state.carCustomer.filter((item) => item.id !== action.payload)
            }

        default:
            return state;
    }
}