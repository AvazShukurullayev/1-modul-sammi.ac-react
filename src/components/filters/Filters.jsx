import {Card} from "react-bootstrap";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {AppFilter} from "../app-filter/AppFilter.jsx";
import {Component} from "react";

export class Filters extends Component {
    render() {
        return (
            <Card className="my-4 shadow">
                <Card.Header>
                    <Card.Title>Kinolar qidirish va filtrlash paneli</Card.Title>
                </Card.Header>
                <Card.Body>
                    <SearchPanel/>
                </Card.Body>
                <Card.Footer>
                    <AppFilter/>
                </Card.Footer>
            </Card>
        )
    }
}