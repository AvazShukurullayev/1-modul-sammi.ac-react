import {Form} from "react-bootstrap";

export const SearchPanel = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Kinolarni qidirish</Form.Label>
                <Form.Control type="text" placeholder="Kinolarni qidirish..." />
            </Form.Group>
        </Form>
    )
}


