import {AppInfo} from "../app-info/AppInfo.jsx";
import {MovieList} from "../movie-list/MovieList.jsx";
import {MovieAddForm} from "../movie-add-form/MovieAddForm.jsx";
import {Filters} from "../filters/Filters.jsx";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export const App = () => {
    const [data, setData] = useState([
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
        },
        {
            name: "Loving is everything",
            viewers: 2011,
            favourite: false,
            liked: false,
            id: uuidv4()
        },
        {
            name: "I had everything but love",
            viewers: 300,
            favourite: false,
            liked: false,
            id: uuidv4()
        },
        {
            name: "History of Brother Tate's",
            viewers: 1000,
            favourite: false,
            liked: false,
            id: uuidv4()
        }
    ])
    const [term, setTerm] = useState("")
    const [filter, setFilter] = useState("all")

    // onDelete id
    const onDelete = (id) => setData(data.filter(x => x.id !== id))

    // addForm item
    const addForm = (item) => {
        const newItem = {name: item.name, viewers: Number(item.viewers), favourite: false, liked: false, id: uuidv4()}
        setData([...data, newItem])
    }

    // onFavourite
    const onToggle = (id, prop) => {
        setData(data.map(x => {
            if (x.id === id) return {...x, [prop]: !x[prop]}
            return x
        }))
    }

    // onSearchHandler
    const onSearchHandler = (arr, term) => {
        if (!term.trim()) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    const onChangeTerm = (term) => setTerm(term)

    // onFilterHandler
    const onFilterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter(x => x.favourite)
            case "mostViewers":
                return arr.filter(x => x.viewers > 500)
            default:
                return arr
        }
    }

    const onFilter = (filter) => setFilter(filter)
    const allMoviesCount = data.length
    const favouriteMoviesCount = data.filter(x => x.favourite).length
    const mostViewedMoviesCount = data.filter(x => x.viewers > 500).length
    const visibleData = onFilterHandler(onSearchHandler(data, term), filter)
    return (
        <div className="app font-monospace container">
            <AppInfo
                allMoviesCount={allMoviesCount}
                favouriteMoviesCount={favouriteMoviesCount}
                mostViewedMoviesCount={mostViewedMoviesCount}
            />
            <Filters
                onChangeTerm={onChangeTerm}
                onFilter={onFilter}
                filter={filter}
            />
            <MovieList
                data={visibleData}
                onDelete={onDelete}
                onToggle={onToggle}
            />
            <MovieAddForm
                addForm={addForm}
            />
        </div>
    )
}