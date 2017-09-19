export const CHANGE_AUTH = 'change_auth';

export const authenticate = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}