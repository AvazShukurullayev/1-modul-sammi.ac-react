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
                favourite: true,
                liked: true,
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
    onDelete = (id) => this.setState({data: this.state.data.filter(x => x.id !== id)})

    // addForm item
    addForm = (item) => {
        const newItem = {name: item.name, viewers: Number(item.viewers), favourite: false, liked: false, id: uuidv4()}
        this.setState(({data}) => ({data: [...data, newItem]}))
    }

    render() {
        const {data} = this.state
        return (
            <div className="app font-monospace container">
                <AppInfo/>
                <Filters/>
                <MovieList data={data} onDelete={this.onDelete}/>
                <MovieAddForm addForm={this.addForm}/>
            </div>
        )
    }
}