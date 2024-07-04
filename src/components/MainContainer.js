import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowplayingmovies);
 
  if (!movies) return null;

  const mainMovie = movies[0];
  console.log(mainMovie);
  const {original_title,overview,id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackGround movieid={id}/>
    </div>
  )
}

export default MainContainer
