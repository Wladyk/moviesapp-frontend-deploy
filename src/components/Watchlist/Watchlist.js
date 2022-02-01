import { useState, useEffect, useCallback } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getRequest, postRequest, deleteRequest } from '../../services';
import './Watchlist.css';
const removeMovie = (id, token=null) => {
    const url = 'watchlater/'+id+'/'
    const result = deleteRequest(url,{}, token);
    result.then((response) => {
        const status = response.status;
        if (response.status == 200) {
            //
        }
    }).catch(err => {
        if (err.response) {
            //
        }
    });
};
const addMovie = (movieId, token) => {
    const entryCreation = postRequest('watchlater/', {movieId}, token);
    entryCreation.then((response) => {
        const status = response.status;
        if (response.status == 200) {
            //
        }
    }).catch(err => {
        if (err.response) {
            //
        }
    });

};

const Watchlist = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const datos = useSelector(state => state.loginReducer);
    const { movieId } = useParams();
    const bringMovies = useCallback (() => {
        const result = getRequest('watchlater/getByUser', datos.authToken);
        result.then(res => setMovies(res));

    }, [movies]);
    const handleRemoveAction = (id) => {
        removeMovie(id, datos.authToken);
        alert("Movie removed from list!")
        bringMovies();
    }    
    useEffect(() => {
        if(movieId != undefined) {
            addMovie(movieId, datos.authToken);
            //navigate('/movies');
            alert("Added to watch later list!");
        }   
        bringMovies();

    }, []);
    return (
        <Container className="mainContent">
            <h2>My personal watchlist</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie name</th>
                        <th>Genre name</th>
                        <th>Date added</th>
                        <th>Watch</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    movies.map((item) => (
                        
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.movie.title}</td>
                            <td>{item.movie.genre.name}</td>
                            <td>{item.dateSet}</td>
                            <td>Watch now</td>
                            <td><Button onClick={() => {handleRemoveAction(item.id)}}>Remove</Button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </Container>
    );
}
export default Watchlist;
