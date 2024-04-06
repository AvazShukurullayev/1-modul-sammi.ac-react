import {Button, Col, Form, ListGroup, Row} from "react-bootstrap";

export const MovieListItem = () => {
    return (
        <ListGroup.Item as="li" className="">
            <Row>
                <Col md={8}>
                    <span>Umar</span>
                </Col>
                <Col md={4}>
                    <Row className="justify-content-between">
                        <Col md={9}>
                            <Form.Control type="number" defaultValue={989} className="w-100"/>
                        </Col>
                        <Col md={3}>
                            <div>
                                <Button size="sm"></Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}