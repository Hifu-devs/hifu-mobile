// Action Exports
export const SET_LOCATION = 'SET_LOCATION';
export const SET_WAY_POINT = 'SET_WAY_POINT';
export const SET_REGION = 'SET_REGION';

export const setLocation = (lat, lon) => {
    return {
        type: 'SET_LOCATION',
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

export const setRegion = (region) => {
    return {
        type: 'SET_REGION',
        region
    }
}