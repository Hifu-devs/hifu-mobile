// Action Exports
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_ROUTE_INFO = 'SET_ROUTE_INFO';

export const setUserInfo = (userData, contactData, routeData) => {
    return {
        type: 'SET_USER_INFO',
        userData,
        contactData,
        routeData,
    }
}

export const setRouteInfo = (waypoints) => {
    console.log('?', waypoints);
    return {
        type: 'SET_ROUTE_INFO',
        waypoints
    }
}