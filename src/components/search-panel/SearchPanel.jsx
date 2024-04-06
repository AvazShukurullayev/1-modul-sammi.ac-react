import {Form} from "react-bootstrap";
import {Component} from "react";
import PropTypes from "prop-types";

export class SearchPanel extends Component {
    state = {term: ""}
    render() {
        const {term} = this.state
        const {onChangeTerm} = this.props
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

}

SearchPanel.propTypes = {
    onChangeTerm: PropTypes.func
}
