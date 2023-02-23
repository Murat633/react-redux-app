import * as actionTypes from "./actionTypes"

export const getProductSuccess = (products) => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getProducts = (categoryId) => {
    return (dispatch) => {
        let uri = "http://localhost:3000/products";
        if (categoryId) {
            uri = uri + "?categoryId=" + categoryId
        }
        return fetch(uri)
            .then(response => response.json())
            .then(result => dispatch(getProductSuccess(result)))
    }
}