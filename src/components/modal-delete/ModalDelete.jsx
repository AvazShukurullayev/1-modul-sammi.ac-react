import {Button, Modal, Spinner} from "react-bootstrap";
import {Component} from "react";
import {Trash} from "react-bootstrap-icons";
import PropTypes from "prop-types";

export class ModalDelete extends Component {
    state = {
        show: false,
        loading: false
    }

    handleShow = () => {
        this.setState({show: true})
    }

    handleClose = () => {
        this.setState({show: false})
    }

    onDeleteItem = () => {
        this.setState({loading: true})
        setTimeout(() => {
            this.props.onDelete()
            this.setState({loading: false})
        }, 200)

    }

    render() {
        const {show, loading} = this.state
        return (
            <>
                <Button variant="outline-danger" size="sm" onClick={this.handleShow}>
                    <Trash/>
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.onDeleteItem} disabled={loading}>
                            {loading && <Spinner animation="border" size="sm"/>}
                            Remove
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

ModalDelete.propTypes = {
    onDelete: PropTypes.func
}