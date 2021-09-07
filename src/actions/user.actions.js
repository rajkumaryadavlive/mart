import { userConstants } from '../constants/user.constants';

export const loginStart = () => ({
    type:userConstants.LOGIN_START,
  });
  
  export const loginSuccess = () => ({
    type:userConstants.LOGIN_SUCCESS
  });
  
  export const loginFail = payload => ({
    type:userConstants.LOGIN_FAIL,
    payload,
  });
  export const logoutStart = payload => ({
    type:userConstants.LOGOUT_START,
    payload,
  });
  export const logout = () => ({
    type:userConstants.LOGOUT_SUCCESS,
  });