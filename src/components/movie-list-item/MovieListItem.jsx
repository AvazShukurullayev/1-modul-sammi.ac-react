import {Button, ButtonGroup, Col, Form, ListGroup, Row} from "react-bootstrap";
import {Cookie, StarFill, Trash} from "react-bootstrap-icons";

export const MovieListItem = () => {
    return (
        <ListGroup.Item as="li" className="">
            <Row className="align-items-center justify-content-between">
                <Col md={7} style={{cursor: "pointer"}}>
                    <span>Umar</span>
                </Col>
                <Col md={4}>
                    <Row className="justify-content-between">
                        <Col md={7}>
                            <Form.Control type="number" defaultValue={989} className="text-center"/>
                        </Col>
                        <Col md={5}>
                            <ButtonGroup>
                                <Button variant="outline-warning" size="sm"><Cookie/></Button>
                                <Button variant="outline-danger" size="sm"><Trash/></Button>
                            </ButtonGroup>
                            <StarFill className="ms-2" color="yellow"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}