import * as actionTypes from './actionTypes'

export const addToCart = (cartItem) => ({
    type: actionTypes.ADD_TO_CART,
    payload: cartItem
})

export const removeFromCart = (product) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: product
})

