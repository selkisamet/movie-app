import React from 'react'
import MovieContainer from "@/app/containers/movie"
import { notFound } from "next/navigation";
import { getMovie } from "@/app/services/movie";

const MoviePage = async ({ params }) => {
    const movieDetail = await getMovie(params.id);

    if (!movieDetail) {
        notFound();
    }

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage