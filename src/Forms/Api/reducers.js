// Action Imports 
import { 
    UPDATE_USER_FORM,  
} from './actions';

// export const userInitialState = {
//     user: {
//         firstName: '',
//         lastName: '',
//         email: '',
//     }
// }

export const userInfo = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_USER_FORM':
            return state = [...action.inputs];
        default:
        return state;
    }
}

