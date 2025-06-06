import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

const MovieCard = ({ movie }) => {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

    // Use imdbID for OMDb movies
    const favorite = isFavorite(movie.imdbID)


    return (
       <div className="movie-card flex flex-col justify-center content-center">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title}></img>
                <div className="movie-overlay" >
                    <button className={`favorite-btn ${favorite ? "active" : "" }`} onClick={(e) => {
                        e.preventDefault()
                        if(favorite) removeFromFavorites(movie.imdbID)
                        else addToFavorites(movie)

                    }}>{favorite ? "❤️" : "🤍"}</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard