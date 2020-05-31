export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_PROVIDERS':
            return action.payload;
            default:
                return state;
    }
};