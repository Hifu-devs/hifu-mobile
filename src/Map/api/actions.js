// Action Exports
export const SET_INITIAL_LOCATION = 'SET_INITIAL_LOCATION';

export const setInitialLocation = (lat, lon) => {
    
    return {
        type: 'SET_INITIAL_LOCATION',
        lat,
        lon,
    }
}