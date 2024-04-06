import {Card} from "react-bootstrap";
import {Component} from "react";

export class AppInfo extends Component {
    render() {
        return (
            <Card className="my-4 shadow">
                <Card.Body>
                    <Card.Title>Barcha kinolar soni: 0</Card.Title>
                    <Card.Text className="m-0">Ko`rilgan kinolar soni: 0</Card.Text>
                    <Card.Text>Sevimli kinolar soni: 0</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}