import {Card, ListGroup} from "react-bootstrap";
import {MovieListItem} from "../movie-list-item/MovieListItem.jsx";
import PropTypes from "prop-types";
import {Component} from "react";

export class MovieList extends Component {
    render() {
        const {data, onDelete} = this.props
        return (
            <Card className="my-4 shadow">
                <Card.Body>
                    <ListGroup as="ul">
                        {data.length ?
                            data.map(item => <MovieListItem
                                key={item.id}
                                {...item}
                                onDelete={() => onDelete(item.id)}
                            />)
                            :
                            "no data"}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}

MovieList.propTypes = {
    data: PropTypes.array,
    onDelete: PropTypes.func
}