// Action Imports 
import { 
    SET_USER_INFO,  
} from './actions';
import { BaseRouter } from '@react-navigation/native';


export const userForm = (state = {} , action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                user: action.userData,
                contact: action.contactData,
                route: action.routeData

            }
        default:
        return state;
    }
}
