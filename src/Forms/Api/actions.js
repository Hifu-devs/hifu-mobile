// Action Exports
export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (userData, contactData, routeData) => {
    return {
        type: 'SET_USER_INFO',
        userData,
        contactData,
        routeData,
    }
}