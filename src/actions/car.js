import { types } from "../types/types"

export const addToCar = (product) => {
    return {
        type: types.carAddToCar,
        payload: product
    }
}

export const deleteToCar = (id) => {
    return {
        type: types.carDeleteFromCar,
        payload: id
    }
}