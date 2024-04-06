import {Card} from "react-bootstrap";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {AppFilter} from "../app-filter/AppFilter.jsx";
import {Component} from "react";
import PropTypes from "prop-types";

export class Filters extends Component {
    render() {
        const {onChangeTerm, onFilter, filter} = this.props
        return (
            <Card className="my-4 shadow">
                <Card.Header>
                    <Card.Title>Kinolar qidirish va filtrlash paneli</Card.Title>
                </Card.Header>
                <Card.Body>
                    <SearchPanel
                        onChangeTerm={onChangeTerm}
                    />
                </Card.Body>
                <Card.Footer>
                    <AppFilter
                        onFilter={onFilter}
                        filter={filter}
                    />
                </Card.Footer>
            </Card>
        )
    }
}

Filters.propTypes = {
    onChangeTerm: PropTypes.func,
    onFilter: PropTypes.func,
    filter: PropTypes.string
}