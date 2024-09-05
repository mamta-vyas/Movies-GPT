import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import genAI from "../utils/googleGemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieresult } from "../utils/gptSlice";
import React from "react";

const GptSearchBar = () => {
const dispatch = useDispatch();
const langKey = useSelector((store) => store.config.lang)
const searchText = useRef(null);
  // Search Movie in TMDB
  const searchMovieTMDB = async(movie) => {
const data = await fetch(
  "https://api.themoviedb.org/3/search/movie?query=" +
   movie + 
  "&include_adult=false&language=en-US&page=1", API_OPTIONS)

  const json = await data.json();
  
return json.results;
//  so json.results will give array of promise which will take some time to resolve so it will not give me reults immediately

  }

  const handleGptSearchClick = async () => {
console.log(searchText.current.value);

const gptQuery = "Act As a movie recoomendation system and suggest some movies for query : " 
+ searchText.current.value + 
". only gives me name of 5 movies, comma separated like the example given ahead. Example Result: Gadar , sholay , Don , Golmaal, Koi Mil gaya";


// Make an API call to GPT API nd get movie results
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = gptQuery;

const result = await model.generateContent(prompt);

if (!result.response) {
  throw new Error("No response from GPT API");
}
// console.log(typeof(result.response.candidates[0]?.content?.parts[0]));
// "Andaz Apna Apna,  Hera Pheri,  Chupke Chupke,  Jaane Bhi Do Yaaro,  Golmaal (1979)"

const movies = result.response.candidates[0]?.content?.parts[0] || "";;
const gptMovies = (movies.text || "").split(",");
// console.log(gptMovies);

// for each movie I will search TMDB API

const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
// searchMovieTMDB is an async function and it will not give me results immediately so basically it will give me results in promise or i can say an array of 5 promise
// [promise, promise,promise,promise,promise]
// promise will take some time to resolve

const tmdbResults = await Promise.all(promiseArray);
console.log(tmdbResults);

dispatch(addGptMovieresult({ movieNames: gptMovies, movieResults: tmdbResults }));

};

  return (
    <div className=" pt-[65%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" 
      onSubmit={(e) => 
        {e.preventDefault();
      
      }}
      >
         <input
         ref = {searchText}
         type="text" 
         className="p-2 md:p-4 m-2 md:m-4 col-span-9 text-xs md:text-2xl" 
         placeholder={lang[langKey].gptSearchPlaceholder} />
         <button className=" col-span-3 m-2 md:m-4 py-2 px-4 bg-red-700 text-white rounded-lg text-sm md:text-2xl"
         onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
