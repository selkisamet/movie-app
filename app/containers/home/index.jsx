import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import FeaturedMovie from "@/app/components/featured-movie"
import Categories from "@/app/components/categories"
import MoviesSection from "@/app/components/movies-section"

const HomeContainer = ({ selectedCategory }) => {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres} />

            {
                selectedCategory.movies.length > 0 && <MoviesSection title={Genres.genres.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies} />
            }

            <MoviesSection title="Populer Films" movies={Movies.results.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer