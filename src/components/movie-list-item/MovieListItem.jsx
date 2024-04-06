import {Button, ButtonGroup, Col, Form, ListGroup, Row} from "react-bootstrap";
import {Cookie, StarFill} from "react-bootstrap-icons";
import PropTypes from "prop-types";
import {Component} from "react";
import {ModalDelete} from "../modal-delete/ModalDelete.jsx";

export class MovieListItem extends Component {
    render() {
        const {name, viewers, favourite, liked, onDelete, onToggle} = this.props
        return (
            <ListGroup.Item as="li" className="">
                <Row className="align-items-center justify-content-between">
                    <Col md={7} style={{cursor: "pointer"}} onClick={onToggle} data-toggle="favourite">
                        <span className={`fs-5 ${favourite && 'text-warning'}`}>{name}</span>
                    </Col>
                    <Col md={4}>
                        <Row className="justify-content-between">
                            <Col md={7}>
                                <Form.Control type="number" defaultValue={viewers}
                                              className={`text-center fw-bold ${favourite && 'text-warning'}`}/>
                            </Col>
                            <Col md={5}>
                                <ButtonGroup>
                                    <Button variant="outline-warning" size="sm" onClick={onToggle} data-toggle="liked">
                                        <Cookie/>
                                    </Button>
                                    <ModalDelete onDelete={onDelete}/>
                                </ButtonGroup>
                                <StarFill className={`ms-2 ${liked ? 'd-inline' : 'd-none'}`} color="yellow"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}

MovieListItem.propTypes = {
    name: PropTypes.string,
    viewers: PropTypes.number,
    favourite: PropTypes.bool,
    liked: PropTypes.bool,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}