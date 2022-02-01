import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const AdminRoute = ({ children }) => {
  const data = useSelector((store) => store.loginReducer);
  if(data.loggedIn === true && data.isStaff === true) { 
      return (children);
  }
  else {
    alert("Admin login required to access this area!")
    return(<Navigate to="/login" />);
  }
};

export default AdminRoute;
