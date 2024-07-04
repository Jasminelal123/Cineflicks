import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="movie-list">
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }
  
  console.log(movies);

  return (
    <div className="px-6 ">
      <h1 className='text-3xl py-2'>{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
      <div className='flex'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
