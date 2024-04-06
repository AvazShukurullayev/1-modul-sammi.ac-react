import {Button, ButtonGroup} from "react-bootstrap";

export const AppFilter = () => {
    return (
        <ButtonGroup size="sm">
            <Button variant="dark">Barcha kinolar</Button>
            <Button variant="outline-dark">Ko`p ko`rilgan kinolar</Button>
            <Button variant="outline-dark">Sevimli kinolar</Button>
        </ButtonGroup>
    )
}