import {AppInfo} from "../app-info/AppInfo.jsx";
import {MovieList} from "../movie-list/MovieList.jsx";
import {MovieAddForm} from "../movie-add-form/MovieAddForm.jsx";
import {Filters} from "../filters/Filters.jsx";
import {data} from "../../movies.js";

export const App = () => {
    return (
        <div className="app font-monospace container">
            <AppInfo/>
            <Filters/>
            <MovieList data={data}/>
            <MovieAddForm/>
        </div>
    )
}