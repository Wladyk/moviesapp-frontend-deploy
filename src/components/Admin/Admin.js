import { useSelector} from "react-redux";
import { Container} from 'react-bootstrap';
import './Admin.css';
const Admin = () => {
  const datos = useSelector(state => state.loginReducer);
  return (
    <Container className="mainContent">
      <h1>Admin panel for staff member {datos.username}</h1>
      <p>Usually, you'd find here the admin panel. Due to time constrains, and to the fact that most of the skills
          involved in the construction of a rudimentary CRUD admin have already been thoroughly displayed in the making of other components, I decided
          to use Django admin panel instead.
      </p>
      <p>As a side comment, I always recomment its use, regardless of the front end system involved.</p>
      <h3><a href="https://movieapps-be.herokuapp.com/admin/">Go to Django Admin panel</a></h3>
    </Container>
  );
}
export default Admin;
