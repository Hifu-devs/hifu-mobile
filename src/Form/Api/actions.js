// Action Exports
export const UPDATE_USER_FORM = 'UPDATE_USER_FORM';

const updateUserForm = (inputs) => {
    return {
        type: 'UPDATE_USER_FORM',
        inputs
    }
}