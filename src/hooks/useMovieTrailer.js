import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addTrailerVideo } from '../utils/Movieslice';

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(state => state.movies.trailerVideo);

  const fetchMovieTrailer = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_Options);
    const json = await response.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieid) {
      fetchMovieTrailer();
    }
  }, [movieid]);

  return trailerVideo;
};

export default useMovieTrailer;
