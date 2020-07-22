// Action Exports
export const SET_USER_INFO = 'SET_USER_INFO';
// export const SET_CONTACT_INFO = 'SET_CONTACT_INFO';
// export const SET_ROUTE_INFO = 'SET_ROUTE_INFO';

export const setUserInfo = (userData, contactData, routeData) => {
    return {
        type: 'SET_USER_INFO',
        userData,
        contactData,
        routeData,
    }
}

// export const setContactInfo = (key, inputs) => {
//     return {
//         type: 'SET_CONTACT_INFO',
//         key,
//         inputs,
//     }
// }

// export const setRouteInfo = (key, inputs) => {
//     return {
//         type: 'SET_ROUTE_INFO',
//         key,
//         inputs,
//     }
// }