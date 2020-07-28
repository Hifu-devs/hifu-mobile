// Action Imports 
import { 
    SET_USER_INFO, 
    SET_ROUTE_INFO,
    CLEAR_USER_INFO 
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
        case 'SET_ROUTE_INFO':
            return {
                ...state,
                route: {
                    ...state.route,
                    wayPoints: action.waypoints
                }
            }
        case 'CLEAR_USER_INFO':
            return {
                state: {}
            }
        default:
        return state;
    }
}

