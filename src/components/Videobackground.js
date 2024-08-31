import React from 'react'
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const Videobackground = ({movieId}) => {
  // fetching trailer video
  // for that i need movie id
  // const [trailerId , setTrailerId] = useState(null);
const trailerVideo =  useSelector(store => store.movies?.trailerVideo);
       
// fetching trailer video && updating the store with trailer video
    useMovieTrailer(movieId);

return (
  <div className=" w-screen">
  <iframe
    className="w-screen aspect-video"
    src={
      "https://www.youtube.com/embed/" +
      trailerVideo?.key +
      "?&autoplay=1&mute=1"
    }
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>
  )
}

export default Videobackground
