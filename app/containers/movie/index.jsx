import FeaturedMovie from "@/app/components/featured-movie"
import React from 'react'

const MovieContainer = ({ movie }) => {
    return (
        <FeaturedMovie movie={movie} isCompact={false} />
    )
}

export default MovieContainer