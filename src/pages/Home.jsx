import MovieCard from "../components/MovieCard"
import { use, useState } from "react"
import '../css/Home.css'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The matrix", release_date: "1998" },
    ]
    return (
        <div className="home">
            <form onSubmit={(e) =>{
                    e.preventDefault() 
                    alert(searchQuery)
                }} 
                    className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Seacrh for movies..."
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-gird">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                        <MovieCard movie={movie} key={movie.id} /> 
                ))}
            </div>
        </div>

    )
}

export default Home