import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
    name: "movies",
    initialState:{
        nowplayingmovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
})
export const {addNowPlayingMovies,addTrailerVideo} =Movieslice.actions;
export default Movieslice.reducer;