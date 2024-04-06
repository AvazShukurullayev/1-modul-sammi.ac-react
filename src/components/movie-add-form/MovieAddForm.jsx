import {Button, Card, Col, Form, Row} from "react-bootstrap";

export const MovieAddForm = () => {
    return (
        <Card className="my-4 shadow">
            <Card.Body>
                <Card.Title className="my-3">Yangi kino qo`shish</Card.Title>
                <Form>
                    <Row>
                        <Col md={5}>
                            <Form.Control type="text" placeholder="Kino nomini kiriting"/>
                        </Col>
                        <Col md={5}>
                            <Form.Control type="number" placeholder="Necha marotaba ko`rilgan"/>
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-dark" type="submit">Qo`shish</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}