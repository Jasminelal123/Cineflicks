import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Movieslice";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const json = await response.json();
            dispatch(addNowPlayingMovies(json.results)); 
        } catch (error) {
            console.error('Error fetching now playing movies:', error);
        }
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [dispatch]); 
}

export default useNowPlayingMovies;
