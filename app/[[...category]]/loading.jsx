import React from 'react'
import CategoriesLoading from "@/app/components/categories/loading"
import FeatureMovieLoading from "@/app/components/featured-movie/loading"
import MoviesSectionLoading from "@/app/components/movies-section/loading"

const Loading = () => {
    return (
        <div>
            <FeatureMovieLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
        </div>
    )
}

export default Loading