import { useState, useEffect, useCallback } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getRequest, postRequest, deleteRequest } from '../../services';
import './MovieDetail.css';
const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [ratings, setRatings] = useState([]);

  const datos = useSelector(state => state.loginReducer);
  const { movieId } = useParams();
  const bringMovieDetails = () => {
    var requestUrl = 'movie/' + movieId;
    const response = getRequest(requestUrl);
    response.then(res => setMovie(res));
  };
  const bringRatingList = () => {
    const resp = getRequest('rating/'+movieId+'/getByMovie/');
    resp.then(res => setRatings(res));
  }
  useEffect(() => {
    bringMovieDetails();
    bringRatingList();
  }, []);
  return (
    <Container className="mainContent">
      <h1>Details of {movie.title}</h1>
      <h4>Plot:</h4>
      <p>{movie.plot}</p>
      <h4>Release date:</h4>
      <p>{movie.releaseDate}</p>
      <h4>Rating list for movie {}</h4>
      
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Rating given</th>
              <th>Author</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.rating}</td>
                <td>{item.author.username}</td>
                <td>{item.message}</td>
                <td>{item.date}</td>
                
              </tr>
            ))}
  
          </tbody>
        </Table>
  
    </Container>
  );
}
export default MovieDetail;
