import { 
    SET_INITIAL_LOCATION,  
} from './actions';


// Initial State
export const route = {
    initialLocation: '',
    firstWaypoint: '',
    secondWaypoint: ''
}

export const userRoute = (state = route , action) => {
    switch (action.type) {
        case 'SET_INITIAL_LOCATION':
            return {
                initialLocation: [action.lat, action.lon]
            }
        default:
        return state;
    }
}