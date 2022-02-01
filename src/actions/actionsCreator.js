import {postRequest, getRequest} from "../services";
import {LOGIN_USER, LOGOUT_USER, IS_STAFF} from "./actionTypes";
export const loginUserAction = (username, password) => (dispatch) => {
  const result = postRequest('auth/token/login',{username, password});
  result.then((res) => {
    if(res.auth_token!=undefined) {
      dispatch({
        type: LOGIN_USER,
        payload:  {sent_username: username, sent_token: res.auth_token},
      });
      dispatch(isStaffAction(res.auth_token));
    }
    else {
      alert("Invalid data provided");
    }
  })   
};
export const logoutUserAction = (token) => (dispatch) => {
  const result = postRequest('auth/token/logout', {}, token);
  result.then (
    dispatch({
      type: LOGOUT_USER
    }) 
  );
};
export const isStaffAction = (token) => (dispatch) => {
  const result = getRequest('auth/users/me/',token);
  result.then((res) => {
    if(res.is_staff === true) {
      dispatch({
        type: IS_STAFF
      })
    }


  });
}