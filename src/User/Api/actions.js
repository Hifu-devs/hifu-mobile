// Imports
import axios from 'axios';
import { mutation } from "gql-query-builder";

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

export function postUserForm(userForm) {  
    // const body = {
    //     query: `
    //       mutation ($userEmail: String!) {
    //         checkIn (
    //           userEmail: $userEmail
    //         ) {
    //           user{
    //           name
    //         }
    //         }
    //       }
    //     `,
    //     variables: {
    //         userEmail: "taco@taco.com"
    //     }
    // }
    const body = {
        query: `
          mutation ($user: UserInput!, $contact: ContactInput!, $route: RouteInput!) {
            createHifu(
            user: $user,
            contact: $contact,
            route: $route
        ){
          user{
            name
          }
        }
    }`,
        variables: {
          user: userForm.user,
          contact: userForm.contact,
          route: userForm.route
        }
      }
    console.log('hittin dat API', body);   
    return dispatch => {
      return axios.post('http://192.168.0.8/api/v1', 
      body)
      .then((response) => {
        if (response.status === 200) {
            console.log('response', response);
        } else {
            console.log("error");
        }
	});
  }
}

export function checkInUser(email) {
  const body = {
    query: `
    mutation ($userEmail:: String!) {
      checkIn (
        userEmail: $userEmail
      ) {
        user{
          name
        }
      }
    }
    `,
    variables: {
      userEmail: email
    }
  }

  return dispatch => {
    return axios.post('URL', 
    body)
    .then((response) => {
      if (response.status === 200) {
          console.log('response', response);
      } else {
          console.log("error");
      }
    });
  }
}
