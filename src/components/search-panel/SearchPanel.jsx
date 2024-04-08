import {Form} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

export const SearchPanel = ({onChangeTerm}) => {
    const [term] = useState("")
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Kinolarni qidirish</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Kinolarni qidirish..."
                    onChange={(e) => onChangeTerm(e.target.value.toLowerCase())}
                    defaultValue={term}
                />
            </Form.Group>
        </Form>
    )
}

SearchPanel.propTypes = {
    onChangeTerm: PropTypes.func
}
