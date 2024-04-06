import {ListGroup} from "react-bootstrap";

export const MovieListItem = () => {
    return (
        <ListGroup.Item as="li">
            <span>Umar</span>
            <input type="number" defaultValue={989} />
            <div>
                <button></button>
            </div>
        </ListGroup.Item>
    )
}