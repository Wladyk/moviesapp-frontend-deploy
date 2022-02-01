import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../actions/actionsCreator";
import { Container} from 'react-bootstrap';
import './Logout.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Logout = () => {
    const datos = useSelector(state=>state.loginReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(logoutUserAction(datos.authToken));
        navigate('/home');
    }, []);
    return (
      <Container>

      </Container>
    );
}

export default Logout;
