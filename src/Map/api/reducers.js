import { 
    SET_INITIAL_LOCATION,  
    SET_WAY_POINT,
} from './actions';


// Initial State
// export const UserRoute = []


export const userRoute = (state = [] , action) => {
    switch (action.type) {
        case 'SET_INITIAL_LOCATION':
            return { 
                route: [action.wayPoint]
            }

        case 'SET_WAY_POINT':
            return { 
                ...state,
                route: [action.wayPoint]
            }
        default:
        return state;
    }
}