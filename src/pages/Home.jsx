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
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    if (!searchQuery.trim()) return
                    if(loading) return
                    setLoading(true)
                    try {
                        const searchResults = await searchMovies(searchQuery)
                        setMovies(searchResults)
                        setError(null)
                    } catch (error) {
                        console.log(error)
                        setError("Failed to search movies...")
                    } finally{
                        setLoading(false)
                    }
                }}

                className="search-form"
            >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            
            <div className="movies-grid">
                {error && <div className="error-message">{error}</div>}
                {loading && <div className="loading">Loading...</div>}
                
                {Array.isArray(movies) && movies.map((movie) => (
                    movie.Title && (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    )
                ))}
            </div>
        </div>

    )
}

export default Home