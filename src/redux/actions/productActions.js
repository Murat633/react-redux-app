import * as actionTypes from "./actionTypes"

export const getProductSuccess = (products) => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
})

export const createProductSuccess = (product) => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product
})

export const updateProductSuccess = (product) => ({
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product
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

export const saveProductApi = (product) => {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product)
    }).then(handleResponse).catch(handleError)
}

export const saveProduct = (product) => {
    return dispatch => {
        return saveProductApi(product)
            .then(savedProduct => {
                product.id ? dispatch(updateProductSuccess(savedProduct)) : dispatch(createProductSuccess(saveProduct))
            }).catch(error => { throw error })
    }
}


export const handleResponse = async (response) => {
    if (response.ok) {
        return response.json()
    }

    const error = response.text()
    throw Error(error)
}

export const handleError = (error) => {
    console.error("Bir Hata Oluştu")
    throw error
}