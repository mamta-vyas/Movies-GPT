import React from "react";
import {useSelector}  from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //  if(movies === null) return;
  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview , id } = mainMovie;

  return (
  <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};

export default MainContainer;
