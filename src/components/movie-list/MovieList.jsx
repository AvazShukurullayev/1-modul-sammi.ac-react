import {Card, ListGroup} from "react-bootstrap";
import {MovieListItem} from "../movie-list-item/MovieListItem.jsx";
import PropTypes from "prop-types";

export const MovieList = ({data, onDelete, onToggle}) => {
    return (
        <Card className="my-4 shadow">
            <Card.Header>
                <Card.Title>Kinolar ro`yxati</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup as="ul">
                    {data.length ?
                        data.map(item => <MovieListItem
                            key={item.id}
                            {...item}
                            onDelete={() => onDelete(item.id)}
                            onToggle={(e) => onToggle(item.id, e.currentTarget.getAttribute("data-toggle"))}
                        />)
                        :
                        <p className="text-center text-secondary fs-4">No data...</p>}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

MovieList.propTypes = {
    data: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}