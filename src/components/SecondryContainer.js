import React from 'react';
import MovieList from './MovieList';
import {useSelector} from "react-redux";
const SecondryContainer = () => {
  const movies = useSelector((store) =>store.movies)
  return <div className='bg-black'>
    <div className='-mt-52 relative z-20 text-white font-bold p-2 '>
   <MovieList title={"now playing"} movies={movies.nowplayingmovies}/>
   <MovieList title={"trending"} movies={movies.nowplayingmovies}/>
   <MovieList title={"popular movies"} movies={movies.nowplayingmovies}/>
   <MovieList title={"Upcoming movies"} movies={movies.nowplayingmovies}/>
   <MovieList title={"Horror movies"} movies={movies.nowplayingmovies}/></div>;
  </div>
}

export default SecondryContainer;
