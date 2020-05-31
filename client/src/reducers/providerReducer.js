export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_PROVIDERS':
            return [...state,action.payload];
            default:
                return state;
    }
};