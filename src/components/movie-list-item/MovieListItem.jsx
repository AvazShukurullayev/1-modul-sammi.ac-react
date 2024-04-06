import {Button, ButtonGroup, Col, Form, ListGroup, Row} from "react-bootstrap";
import {Cookie, StarFill, Trash} from "react-bootstrap-icons";
import PropTypes from "prop-types";

export const MovieListItem = ({name, viewers, favourite, liked}) => {
    return (
        <ListGroup.Item as="li" className="">
            <Row className="align-items-center justify-content-between">
                <Col md={7} style={{cursor: "pointer"}}>
                    <span className={`fs-5 ${favourite && 'text-warning'}`}>{name}</span>
                </Col>
                <Col md={4}>
                    <Row className="justify-content-between">
                        <Col md={7}>
                            <Form.Control type="number" defaultValue={viewers} className="text-center"/>
                        </Col>
                        <Col md={5}>
                            <ButtonGroup>
                                <Button variant="outline-warning" size="sm"><Cookie/></Button>
                                <Button variant="outline-danger" size="sm"><Trash/></Button>
                            </ButtonGroup>
                            <StarFill className={`ms-2 ${liked ? 'd-inline' : 'd-none'}`} color="yellow"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

MovieListItem.propTypes = {
    name: PropTypes.string,
    viewers: PropTypes.number,
    favourite: PropTypes.bool,
    liked: PropTypes.bool
}