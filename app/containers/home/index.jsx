import React from 'react'
import FeaturedMovie from "@/app/components/featured-movie"
import Categories from "@/app/components/categories"
import MoviesSection from "@/app/components/movies-section"

const HomeContainer = ({ topRatedMovies = [], popularMovies = [], categories = [], selectedCategory }) => {
    return (
        <div>
            <FeaturedMovie movie={topRatedMovies?.[0]} />
            <Categories categories={categories} />

            {
                selectedCategory.movies.length > 0 && <MoviesSection title={categories.find(genre => `${genre.id}` === selectedCategory.id)?.name} movies={selectedCategory.movies} />
            }

            <MoviesSection title="Populer Films" movies={topRatedMovies.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={popularMovies.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer;