import React from 'react'
import { useRef } from 'react';
import languages from '../utils/languages';
import { useDispatch, useSelector } from 'react-redux';
import  client  from '../utils/OpenAI';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addGptSearchResults } from '../utils/gptSlice';

const Gptsearchbar = () => {
  const {language} = useSelector(store=>store.config);
  const searchQuery = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async(movie)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);

    const response = await data.json();

    return response;
}
  const handleGptSearch = async () => {


    console.log(searchQuery.current.value);

    const gptQuery = `act as a movie recommendation system and suggest some movies for the query ${searchQuery.current.value} only give me 10 movies comma seperated like following example Sholay, Andaz Apna Apna, Hera Pheri`;

    const gptResults = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-4o-mini'
    });
   
    const result = gptResults.choices[0].message.content.split(",");

    const promiseArray = result.map((movie)=>searchTMDB(movie));

    const searchResult = await Promise.all(promiseArray);

    dispatch(addGptSearchResults({movieNames:result ,GptMovies: searchResult}));
    
    console.log(searchResult);
  }

 
  return (
    <div className=' flex items-center justify-center absolute top-20 left-1/2 right-1/2'>
        <form action="" onSubmit={(e)=>e.preventDefault() }>
            <div className='flex items-center justify-between w-[40rem]'>
                <input ref={searchQuery} type="text" className='p-4 outline-none rounded-l-md w-full' placeholder={languages[language].placeholder} />
                <button className='bg-red-600 text-white rounded-r-md  p-4'  onClick={handleGptSearch}>{languages[language].search}</button>
            </div>
        </form>
    </div>
  )
}

export default Gptsearchbar