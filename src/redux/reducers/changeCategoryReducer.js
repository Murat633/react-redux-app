import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

const changeCategoryReducer = (state = initialState.currentCategory, action) => {

    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        default:
            return state
    }
}

export default changeCategoryReducer 