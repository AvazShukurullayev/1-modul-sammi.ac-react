import {Card} from "react-bootstrap";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {AppFilter} from "../app-filter/AppFilter.jsx";

export const Filters = () => {
    return (
        <Card className="my-4 shadow">
            <Card.Body>
                <SearchPanel />
                <AppFilter />
            </Card.Body>
        </Card>
    )
}