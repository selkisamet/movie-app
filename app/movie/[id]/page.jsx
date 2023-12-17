import MovieContainer from "@/app/containers/movie"
import React from 'react'
import Movies from "@/mocks/movies.json"
import { notFound } from "next/navigation";

const MoviePage = ({ params, searchParams }) => {
    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id);

    if (!movieDetail) {
        notFound()
    }

    if (searchParams.error === "true") {
        throw new Error("An error has occurred. Sorry for that!")
    }

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage