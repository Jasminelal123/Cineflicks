import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({ movieid }) => {
  const trailerVideo = useMovieTrailer(movieid);

  if (!trailerVideo) return null;

  return (
    <div className=''>
      <iframe
  className='w-screen aspect-video'
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Movie Trailer"
></iframe>

    </div>
  );
}

export default VideoBackGround;

