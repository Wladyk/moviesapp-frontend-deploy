import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const AuthRoute = ({ children }) => {
  const data = useSelector((store) => store.loginReducer);
  if(data.loggedIn === true) { 
      return (children);
  }
  else {
    alert("Login required to access this area!")
    return(<Navigate to="/login" />);
  }
};

  export default AuthRoute;
