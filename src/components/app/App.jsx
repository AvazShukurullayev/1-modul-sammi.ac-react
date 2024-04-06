import {AppInfo} from "../app-info/AppInfo.jsx";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {AppFilter} from "../app-filter/AppFilter.jsx";
import {Card} from "react-bootstrap";

export const App = () => {
    return (
        <div className="app font-monospace">
            <div className="content container">
                <AppInfo />
                <Card>
                    <Card.Body>
                        <SearchPanel />
                        <AppFilter />
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}