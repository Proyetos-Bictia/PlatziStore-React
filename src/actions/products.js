import Swal from "sweetalert2";

import { loadProducts, loadOneProduct, createProduct } from "../helpers/loadProducts";
import { types } from "../types/types";

export const startLoadingProducts = () => {
    return async (dispatch) => {
        const products = await loadProducts();
        dispatch(setProducts(products))
    }
}

export const setProducts = (products) => {
    return {
        type: types.getProducts,
        payload: products
    }
}

export const startLoadingOneProduct = (id) => {
    return async (dispatch) => {
        const product = await loadOneProduct(id)
        dispatch(setOneProduct(product))
    }
}

export const setOneProduct = (product) => {
    return {
        type: types.getOneProduct,
        payload: product
    }
}

export const clearOneProduct = () => {
    return {
        type: types.clearOnePorduct
    }
}

export const createNewProduct = (data) => {
    // console.log('esto viene del form ==>', data);
    return async (dispatch) => {
        const product = await createProduct(data)
        dispatch(setNewProduct(product));
        // console.log('esto responde api =>', product);
        Swal.fire('Saved', product.title , 'success');
    }
}

export const setNewProduct = (data) => {
    return {
        type: types.createNewProduct,
        payload: data
    }
}