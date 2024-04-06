import {AppInfo} from "../app-info/AppInfo.jsx";
import {MovieList} from "../movie-list/MovieList.jsx";
import {MovieAddForm} from "../movie-add-form/MovieAddForm.jsx";
import {Filters} from "../filters/Filters.jsx";
import {Component} from "react";
import {v4 as uuidv4} from "uuid";

export class App extends Component {
    state = {
        data: [
            {
                name: "Omar",
                viewers: 911,
                favourite: false,
                liked: false,
                id: uuidv4()
            },
            {
                name: "Mr. and Mrs.Smith",
                viewers: 1400,
                favourite: false,
                liked: false,
                id: uuidv4()
            },
            {
                name: "Empire of Ottoman",
                viewers: 385,
                favourite: false,
                liked: false,
                id: uuidv4()
            }
        ]
    }

    // onDelete id
    onDelete = (id) => this.setState(({data}) => ({data: data.filter(x => x.id !== id)}))

    // addForm item
    addForm = (item) => {
        const newItem = {name: item.name, viewers: Number(item.viewers), favourite: false, liked: false, id: uuidv4()}
        this.setState(({data}) => ({data: [...data, newItem]}))
    }

    // onFavourite
    onToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(x => {
                if (x.id === id) return {...x, [prop]: !x[prop]}
                return x
            })
        }))
    }

    render() {
        const {data} = this.state
        const allMoviesCount = data.length
        const favouriteMoviesCount = data.filter(x => x.favourite).length
        const mostViewedMoviesCount = data.filter(x => x.viewers > 500).length
        return (
            <div className="app font-monospace container">
                <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} mostViewedMoviesCount={mostViewedMoviesCount} />
                <Filters/>
                <MovieList data={data} onDelete={this.onDelete} onToggle={this.onToggle}/>
                <MovieAddForm addForm={this.addForm}/>
            </div>
        )
    }
}