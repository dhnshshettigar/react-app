import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import '../css/Home.css'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                console.log(error)
                setError("Failed to load movies")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    },[])

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