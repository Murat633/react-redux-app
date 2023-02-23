import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


const productListReducer = (state = initialState.productList, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default productListReducer