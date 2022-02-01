import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getRequest, postRequest } from '../../services';
import './Rating.css';
const Rating = () => {
    const datos = useSelector(state=>state.loginReducer);
    const [movie, setMovie] = useState({});
    const [rating, setRating] = useState("");
    const [message, setMessage] = useState("");
    const { movieId } = useParams();
    const navigate = useNavigate();
    let ruta = 'movie/' + movieId;
    useEffect(() => {
        const result = getRequest(ruta);
        result.then(res => setMovie(res));
    }, []);
    const insertRating = () => {
        const ratingCreation = postRequest('rating/', {rating, movieId, message }, datos.authToken);
        ratingCreation.then((response) => {
            const status = response.status;
            if (response.status == 200) {
                alert("Succesfully rated!")
            }
            }).catch(err=> {
            if(err.response){
                alert("Error during rating creation!")
            }
        });
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleRatingSubmit = () => {
        insertRating();
        alert("Rating sent!");
        navigate("/movies")
    }
    return (
        <Container className="mainContent">
            <h1>Rate movie "{movie.title}" </h1>
            <p>Average rating: {movie.averageRating}</p>

            <Form className="logiallInForm">
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select onChange={handleRatingChange} aria-label="Default select example">
                        <option>View options</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Add your thoughts" value={message} onChange={handleMessageChange} />
                </Form.Group>


            </Form>
            <Button variant="primary" type="submit" onClick={handleRatingSubmit}>
                Send rating
            </Button>


        </Container>
    );
}
export default Rating;
