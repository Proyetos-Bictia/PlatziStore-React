import { types } from "../types/types";
/* 
    products: [
        {
            "id": "1",
"image": "assets/images/camiseta.png",
"title": "Producto Edited",
"price": 80000,
"description": "im a edit  peoduct"
        }
    ]
*/


export const productsReducer = (state = { products: [], productSelected: null }, action) => {
    switch (action.type) {
        case types.getProducts:
            return {
                ...state,
                products: action.payload
            }

        case types.getOneProduct:
            return {
                ...state,
                productSelected: action.payload
            }

        case types.clearOnePorduct:
            return {
                ...state,
                productSelected: null
            }

        case types.createNewProduct:
            console.log(action.payload);
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        default:
            return state;
    }
}