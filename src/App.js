import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home, Navbar, SignUp, Login, Logout, Movies, Rating, Watchlist, MovieDetail, Admin} from "./components"
import {AuthRoute, AdminRoute} from './components/custom'
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  const datos = useSelector(state => state.loginReducer);
  return (
    <Container className="App" fluid>
      <Container>
        <Row>
          <Col><header>myMovies</header></Col>
          {datos.loggedIn
          ? <p>Welcome back, {datos.username}</p>
          : <p></p>
        }
        </Row>
        <Row><Navbar /></Row>
        <Row>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
            <Route path="/rating/:movieId" element={<AuthRoute><Rating /></AuthRoute>} />
            <Route path="/watchlist/:movieId" element={<AuthRoute><Watchlist /></AuthRoute>} />
            <Route path="/watchlist" element={<AuthRoute><Watchlist /></AuthRoute>} />
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
            
          </Routes>

        </Row>
      </Container>
    </Container>
  );
}

export default App;
