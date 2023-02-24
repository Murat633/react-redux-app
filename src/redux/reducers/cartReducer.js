import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

const cartReducer = (state = initialState.cart, action) => {
    let newState;

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedItem = state.find(c => c.id == action.payload.id)
            if (addedItem) {
                newState = state.map(cartItem => {
                    if (cartItem.id === action.payload.id) { cartItem.quantity += 1 }

                    return cartItem
                })
                return newState
            }
            return [...state, action.payload]

        case actionTypes.REMOVE_FROM_CART:
            return newState = state.filter(product => product !== action.payload)
        default:
            return state
    }
}

export default cartReducer