import {Card} from "react-bootstrap";
import {Component} from "react";
import PropTypes from "prop-types";

export class AppInfo extends Component {
    render() {
        const {allMoviesCount, favouriteMoviesCount, mostViewedMoviesCount} = this.props
        return (
            <Card className="my-4 shadow">
                <Card.Header>
                    <Card.Title>Kinolar haqida ma`lumotlar</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>Barcha kinolar soni: {allMoviesCount}</Card.Text>
                    <Card.Text>Ko`rilgan kinolar soni: {mostViewedMoviesCount}</Card.Text>
                    <Card.Text>Sevimli kinolar soni: {favouriteMoviesCount}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

AppInfo.propTypes = {
    allMoviesCount: PropTypes.number,
    favouriteMoviesCount: PropTypes.number,
    mostViewedMoviesCount: PropTypes.number
}