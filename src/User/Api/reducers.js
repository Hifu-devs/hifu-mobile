// Action Imports 
import { 
    SET_USER_INFO, 
    SET_ROUTE_INFO, 
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
            console.log('action.waypoints', action.waypoints);
            return {
                ...state,
                route: {
                    ...state.route,
                    wayPoints: action.waypoints
                }
            }
        default:
        return state;
    }
}

