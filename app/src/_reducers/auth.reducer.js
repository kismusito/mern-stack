import {userConstants} from '../_constants'

export function authReducer(state = {} , action) {
    switch(action.type) {
        case userConstants.USERLOGINREQUEST:
            return {
                loginRequest: true
            }
        case userConstants.USERLOGINSUCCESS:
            return action.user
        default: 
            return state;
    }
}