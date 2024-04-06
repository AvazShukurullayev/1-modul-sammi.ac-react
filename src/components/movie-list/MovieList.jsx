import {Card, ListGroup} from "react-bootstrap";
import {MovieListItem} from "../movie-list-item/MovieListItem.jsx";
import PropTypes from "prop-types";

export const MovieList = ({data}) => {
    return (
        <Card className="my-4 shadow">
            <Card.Body>
                <ListGroup as="ul">
                    {data.length ?
                        data.map(item => <MovieListItem
                            key={item.id}
                            {...item}
                        />)
                        :
                        "no data"}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

MovieList.propTypes = {
    data: PropTypes.array
}