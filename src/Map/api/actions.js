// Action Exports
export const SET_INITIAL_LOCATION = 'SET_INITIAL_LOCATION';
export const SET_WAY_POINT = 'SET_WAY_POINT';

export const setInitialLocation = (lat, lon) => {
    return {
        type: 'SET_INITIAL_LOCATION',
        lat, 
        lon
    }
}

export const setWayPoint = (lat, lon) => {
    return{
        type: 'SET_WAY_POINT',
        lat, 
        lon
    }
}