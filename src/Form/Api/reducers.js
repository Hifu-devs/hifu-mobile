// Action Imports 
import { 
    UPDATE_USER_FORM,  
} from './actions';

export const userInitialState = {
    
}

export const userInfo = (state = userInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_FORM':
            return state = [...action.inputs];
        default:
        return state;
    }
}

