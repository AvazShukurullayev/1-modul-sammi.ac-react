import {Button, Modal, Spinner} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import PropTypes from "prop-types";
import {useState} from "react";

export const ModalDelete = ({onDelete}) => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleShow = () => setShow(true)

    const handleClose = () => setShow(false)

    const onDeleteItem = () => {
        setLoading(true)
        setTimeout(() => {
            onDelete()
            setLoading(false)
        }, 200)

    }

    return (
        <>
            <Button variant="outline-danger" size="sm" onClick={handleShow}>
                <Trash/>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={onDeleteItem} disabled={loading}>
                        {loading && <Spinner animation="border" size="sm"/>}
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

ModalDelete.propTypes = {
    onDelete: PropTypes.func
}