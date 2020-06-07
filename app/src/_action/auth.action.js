import {userConstants} from '../_constants';
import {authService} from '../services';
import history from '../_helpers/history';

export const authActions = {
    login,
    confirmLogin
}

function login(user) {
    return async dispatch => {
        dispatch(request());

        authService.login(user)
            .then(response => {
                if(response.auth) {
                    dispatch(success(response))
                    localStorage.setItem('user' , response.token)
                    history.push('/')
                } else {
                    dispatch(failure(response))
                }
            })
            .catch(err => {
                dispatch(failure(err))
            })
    }

    function request() { return { type: userConstants.USERLOGINREQUEST } }
    function success(user) { return { type: userConstants.USERLOGINSUCCESS , user }}
    function failure(err) { return { type: userConstants.USERLOGINFAILURE , err }}
}

function confirmLogin(token) {
    return async dispatch => {
        authService.verifyToken(token)
            .then(res => {
                history.push('/')
            })
            .catch(err => {
                history.push('/login')
            })
    }
}