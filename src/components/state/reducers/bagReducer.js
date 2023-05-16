const defaultState = {
    bag:[
        
    ]
}

export const bagReducer = (state = defaultState,action) => {
    switch(action.type){
        case('PUSH_ITEM'):
            return {...state,bag: [...state.bag,action.payload]}
        case('CLEAR_ITEM'):
            // return localStorage.removeItem('persist:root');
            return { ...state, bag: [] };
        default:
            return state;
    }
}