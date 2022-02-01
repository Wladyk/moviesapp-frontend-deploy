import { useSelector} from "react-redux";
import { Container} from 'react-bootstrap';
import './Home.css';
const Home = () => {
  const datos = useSelector(state => state.loginReducer);
  return (
    <Container className="mainContent">
      <h1>Welcome to myMovies app!</h1>
      <p>This is a skelleton - like, very simple app developed as a skills assesment test</p>
    </Container>
  );
}
export default Home;
