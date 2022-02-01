import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Table} from 'react-bootstrap';
import { getRequest } from "../../services";
import {  Link } from "react-router-dom";
import './Movies.css';
const Movies = () => {
  const datos = useSelector(state => state.loginReducer);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const result = getRequest('movie/');
    result.then(res => setMovies(res));
  }, []);
  return (
    <Container className="mainContent">
      <h2>Movie list - sorted by average rating</h2>

      <p>Click a title to see the movie's details</p>
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie name</th>
            <th>Genre</th>
            <th>Avg. Rating</th>
            <th>Rate it</th>
            <th>Watch later</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to={'/moviedetail/'+item.id}>{item.title}</Link></td>
              <td>{item.genre.name}</td>
              <td>{item.averageRating}</td>
              {datos.loggedIn
                ? <td><Link to={'/rating/'+item.id}>Rate it!</Link></td>
                : <td>Login to rate it</td>
              }
              {datos.loggedIn
                ? <td><Link to={'/watchlist/'+item.id}>Add to watchlist!</Link></td>
                : <td>Login to add</td>
              }
            </tr>
          ))}

        </tbody>
      </Table>

    </Container>
  );
}
export default Movies;
