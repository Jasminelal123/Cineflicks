import React from 'react'
import {IMG_CON} from "../utils/constants";
const MovieCard = ({poster_path}) => {
  return (
    <div className='w-44 p-1 rounded-sm '>  
      <img className='' src={IMG_CON + poster_path} alt='movie'/>
    </div>
  )
}

export default MovieCard;