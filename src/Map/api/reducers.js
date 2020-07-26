import { 
    SET_INITIAL_LOCATION,  
    SET_WAY_POINT,
} from './actions';


// Initial State
const route = {
    wayPoint: [],
}


export const userRoute = (state = route, action) => {
    switch (action.type) {
        case 'SET_INITIAL_LOCATION':
            return {
               wayPoint: [{latitude: action.lat, longitude: action.lon}]
            }
            
        case 'SET_WAY_POINT':
            return {
                ...state,
                wayPoint: [...state.wayPoint, {latitude: action.lat, longitude: action.lon}]
             }
        default:
        return state;
    }
}