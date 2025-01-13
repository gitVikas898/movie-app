import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showgptSearch : false,
        gptMovieResults : false,
        searchedMovies :false,
    },
    reducers:{
        toggleSearchView :(state,action)=>{
            state.showgptSearch = !state.showgptSearch
        },
        addGptSearchResults :(state,action)=>{
            const {movieNames , GptMovies} = action.payload
            state.gptMovieResults = GptMovies;
            state.searchedMovies = movieNames
        }
    }
})

export const {toggleSearchView,addGptSearchResults} = gptSlice.actions;
export default gptSlice.reducer;