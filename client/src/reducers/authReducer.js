import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload), // payload we passed is our decoded user, if its not empty it is true.
                user: action.payload 
            }
        default:
            return state;
    }
}