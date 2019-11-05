import * as Types from './../constants/ActionType';
import calAPI from './../utils/apicaller'

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCT,
        products : products
    }
}