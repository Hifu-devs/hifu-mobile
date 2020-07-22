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


// export const contact = (state = userForm, action) => {
//     switch (action.type) {
//         case 'SET_CONTACT_INFO':
//             return {
//                 ...state,
//                 [action.key]: action.inputs
//             }
//         default:
//         return state;
//     }
// }
// export const route = (state = userForm, action) => {
//     switch (action.type) {
//         case 'SET_ROUTE_INFO':
//             return {
//                 ...state,
//                 [action.key]: action.inputs
//             }
//         default:
//         return state;
//     }
// }

