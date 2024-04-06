import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Component} from "react";
import PropTypes from "prop-types";

export class MovieAddForm extends Component {
    state = {
        name: "",
        viewers: ""
    }

    onChangeHandler = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault()
        const {name, viewers} = this.state
        if (name.trim() && viewers.trim()) {
            this.props.addForm({name, viewers})
            this.setState({name: "", viewers: ""})
        }
    }

    render() {
        const {name, viewers} = this.state
        return (
            <Card className="my-4 shadow">
                <Card.Body>
                    <Card.Title className="my-3">Yangi kino qo`shish</Card.Title>
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col md={5}>
                                <Form.Control type="text"
                                              placeholder="Kino nomini kiriting"
                                              name="name"
                                              required
                                              onChange={this.onChangeHandler}
                                              value={name}
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control type="number"
                                              placeholder="Necha marotaba ko`rilgan"
                                              name="viewers"
                                              required
                                              onChange={this.onChangeHandler}
                                              value={viewers}
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
}

MovieAddForm.propTypes = {
    addForm: PropTypes.func
}