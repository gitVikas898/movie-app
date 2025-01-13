import React from 'react'
import { useSelector } from 'react-redux'
import Gptmovielist from './Gptmovielist';

const Gptsuggestions = () => {


  const gpt = useSelector((store)=>store.gpt);
  
  const{gptMovieResults,searchedMovies} = gpt;

  

  if(!searchedMovies) return null;
  let myMovies = [];
  for(let i = 1;i<gptMovieResults.length;i++){
    myMovies.push(gptMovieResults[i].results[0]);
  }

  console.log(myMovies);

  console.log(searchedMovies)

  
  return (
    <div className='p-8'>
        <Gptmovielist  movies={myMovies}></Gptmovielist>
    </div>
  )
}

export default Gptsuggestions