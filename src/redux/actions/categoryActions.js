import * as actionTypes from './actionTypes';

export const changeCategory = (category) => ({ type: actionTypes.CHANGE_CATEGORY, payload: category })

export const getCategoriesSuccess = (categories) => ({ type: actionTypes.GET_CATEGORİES_SUCCESS, payload: categories })

export const getCategories = () => {
    return (dispatch) => {
        let uri = 'http://localhost:3000/categories/'
        return fetch(uri)
            .then(res => res.json())
            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}