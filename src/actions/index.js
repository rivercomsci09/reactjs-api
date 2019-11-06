import * as Types from './../constants/ActionType';
import calAPI from './../utils/apicaller'
import callAPI from './../utils/apicaller';


export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return calAPI('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products: products
    }
}


export const actDeleteProductsRequest = (id) => {
    return dispatch => {
        return calAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
    };
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callAPI('products','POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return calAPI(`products/${id}`,'GET',null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return calAPI(`products/${product.id}`,'PUT',product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}