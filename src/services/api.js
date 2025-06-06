const API_KEY = "ef406f64"; // User's OMDb API key
const API_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
    // OMDb does not have a 'popular' endpoint, so we'll use a default search (e.g., 'batman')
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=batman&type=movie`);
    const data = await response.json();
    // OMDb returns results in the 'Search' property
    return data.Search || [];
};

export const searchMovies = async (query) => {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
    const data = await response.json();
    return data.Search || [];
};