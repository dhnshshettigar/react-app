import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

// Custom hook to use the MovieContext
export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    // Load favorites from localStorage on mount
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    }, [])

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    // Add a movie to favorites (avoid duplicates)
    const addToFavorites = (movie) => {
        setFavorites(prev => prev.some(m => m.imdbID === movie.imdbID) ? prev : [...prev, movie])
    }

    // Remove a movie from favorites by imdbID
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId))
    }

    // Check if a movie is in favorites by imdbID
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.imdbID === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}



