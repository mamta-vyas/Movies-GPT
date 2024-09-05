import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import React from "react";


const Browse = () => {

const showGptSearch = useSelector((Store)=> Store.gpt.showGptSearch);

// Fetch Data From TMDB API update the store
useNowPlayingMovies();
usePopularMovies();
 return (
    <div>
      <Header/>
     { showGptSearch ?  (
      <GptSearch/> 
    ) : (
    <>
     <MainContainer/>
    <SecondaryContainer/>
      </>
      )}
     
      {/* 
           MainContainer
           - VideoBackground
           - VideoTitle
           SecondaryContainer
            - MovieList * n
            - cards * n
      
      
      
      */}
    </div>
  )
}
export default Browse;