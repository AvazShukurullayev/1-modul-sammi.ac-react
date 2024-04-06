import {Card, ListGroup} from "react-bootstrap";
import {MovieListItem} from "../movie-list-item/MovieListItem.jsx";

export const MovieList = () => {
    return (
        <Card className="my-4 shadow">
            <Card.Body>
                <ListGroup as="ul">
                    <MovieListItem />
                    <MovieListItem />
                    <MovieListItem />
                </ListGroup>
            </Card.Body>
        </Card>
    )
}