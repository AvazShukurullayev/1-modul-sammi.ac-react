import {Button, ButtonGroup} from "react-bootstrap";
import {Component} from "react";
import PropTypes from "prop-types";

const btnArr = [
    {name: "all", label: "Barcha kinolar"},
    {name: "popular", label: "Sevimli kinolar"},
    {name: "mostViewers", label: "Ko`p ko`rilgan kinolar"},
]

export class AppFilter extends Component {
    render() {
        const {onFilter, filter} = this.props
        return (
            <ButtonGroup size="sm">
                {btnArr.length ? btnArr.map(btn => (<Button
                        variant={filter === btn.name ? 'dark' : 'outline-dark'}
                        key={btn.name}
                        onClick={() => onFilter(btn.name)}
                    >
                        {btn.label}
                    </Button>
                )) : "no idea"}
            </ButtonGroup>
        )
    }
}

AppFilter.propTypes = {
    onFilter: PropTypes.func,
    filter: PropTypes.string
}