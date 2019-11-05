var initialState = [
    {
        id : 1,
        name : 'Iphone 6',
        price : 400,
        status : true
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        // case value:
            
        //     break;
    
        default:
            return [...state];
    }
}

export default products;