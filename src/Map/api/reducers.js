import { 
    SET_LOCATION,  
    SET_WAY_POINT,
    SET_REGION
} from './actions';


// Initial States
const route = {
    wayPoint: [],
    region: {},
}



export const userRoute = (state = route, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                ...state,
               wayPoint: [{latitude: action.lat, longitude: action.lon}]
            }
            
        case 'SET_WAY_POINT':
            return {
                ...state,
                wayPoint: [...state.wayPoint, {latitude: action.lat, longitude: action.lon}]
             }

        case 'SET_REGION':
            return {
                ...state,
                region: action.region
            }    
        default:
        return state;
    }
}