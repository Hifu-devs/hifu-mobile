// Action Exports
export const SET_INITIAL_LOCATION = 'SET_INITIAL_LOCATION';
export const SET_WAY_POINT = 'SET_WAY_POINT';

export const setInitialLocation = (wayPoint) => {
    return {
        type: 'SET_INITIAL_LOCATION',
        wayPoint
    }
}

export const setWayPoint = (wayPoint) => {
    return{
        type: 'SET_WAY_POINT',
        wayPoint
    }
}