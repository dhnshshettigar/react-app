import '../css/MovieCard.css'
const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card flex flex-col justify-center content-center">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}></img>
                <div className="movie-overlay" >
                    <button className="favorite-btn" onClick={() => {
                        alert("clicked")
                    }}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard