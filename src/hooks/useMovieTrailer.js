import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
        // fetching trailer video && updating the store with trailer video
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US", API_OPTIONS);
 
      const json = await data.json(); 
    //   console.log(json);
      
      const filterData = json.results.filter(video => video.type === "Trailer");
      const trailer = filterData.length ?  filterData[0] : json.results[0];
    //   console.log(trailer)
     //  setTrailerId(trailer.key)
     dispatch(addTrailerVideo(trailer));
     };
     useEffect(() => {
      if(!trailerVideo)
           getMovieVideo();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
