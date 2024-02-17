const API_URL = "https://api.themoviedb.org/3/";

const fecthMovieApi = async (pathName, query = "") => {
    try {
        const res = await fetch(`${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`);
        return res.json();
    } catch (error) {
        throw new Error(error);
    }
}

// Get single category
const getSingleCategory = async (genreId) => {
    return fecthMovieApi("/discover/movie", `with_genres=${genreId}`);
}

// Get categories
const getCategories = async () => {
    return fecthMovieApi("/genre/movie/list", "&page=1");
}

// Get popular movies
const getPopularMovies = async () => {
    return fecthMovieApi("/movie/popular", "&page=1");
}

// Get top rated movies
const getTopRatedMovies = async () => {
    return fecthMovieApi("/movie/top_rated", "&page=1");
}

// Get movie
const getMovie = async (movieId) => {
    return fecthMovieApi(`/movie/${movieId}`);
}

export { fecthMovieApi, getSingleCategory, getCategories, getPopularMovies, getTopRatedMovies, getMovie };