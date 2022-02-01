import {LOGIN_USER, LOGOUT_USER, IS_STAFF} from "../actions/actionTypes";
const initialState = {
  username: "",
  loggedIn: false,
  isStaff: false,
  authToken: ""
};
 const loginReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case LOGIN_USER: {
      const pLoad = action.payload;
      return {
        ...state,
        username: pLoad.sent_username,
        loggedIn: true,
        authToken: pLoad.sent_token
      }

    }
    case LOGOUT_USER: {
      return {
        ...state,
        username: "",
        loggedIn: false,
        isStaff: false,
        authToken: ""
      }

    }
    case IS_STAFF : {
      return {
        ...state,
        isStaff: true
      }
    }
    default:
      return state;
  }
}
export default loginReducer;