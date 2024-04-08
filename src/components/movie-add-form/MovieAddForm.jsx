import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";

export const MovieAddForm = ({addForm}) => {
    const [item, setItem] = useState({name: "", viewers: ""})

    const onChangeHandler = (e) => setItem(prevState => ({...prevState, [e.target.name]: e.target.value}))
    const onSubmit = (e) => {
        e.preventDefault()
        if (item.name.trim() && item.viewers.trim()) {
            addForm({name: item.name, viewers: item.viewers})
            setItem({name: "", viewers: ""})
        }
    }

    return (
        <Card className="my-4 shadow">
            <Card.Header>
                <Card.Title>Yangi kino haqida ma`lumot</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>Yangi kino qo`shish</Card.Text>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col md={5}>
                            <Form.Control type="text"
                                          placeholder="Kino nomini kiriting"
                                          name="name"
                                          required
                                          onChange={onChangeHandler}
                                          value={item.name}
                            />
                        </Col>
                        <Col md={5}>
                            <Form.Control type="number"
                                          placeholder="Necha marotaba ko`rilgan"
                                          name="viewers"
                                          required
                                          onChange={onChangeHandler}
                                          value={item.viewers}
                            />
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

MovieAddForm.propTypes = {
    addForm: PropTypes.func
}