import {AppInfo} from "../app-info/AppInfo.jsx";
import {MovieList} from "../movie-list/MovieList.jsx";
import {MovieAddForm} from "../movie-add-form/MovieAddForm.jsx";
import {Filters} from "../filters/Filters.jsx";
import {v4 as uuidv4} from 'uuid';

export const App = () => {
    const data = [
        {name: "Omar", viewers: 911, id: uuidv4()},
        {name: "Mr. and Mrs.Smith", viewers: 1400, id: uuidv4()},
        {name: "Empire of Ottoman", viewers: 385, id: uuidv4()}
    ]
    return (
        <div className="app font-monospace container">
            <AppInfo/>
            <Filters/>
            <MovieList data={data}/>
            <MovieAddForm/>
        </div>
    )
}