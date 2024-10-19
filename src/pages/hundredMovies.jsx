import { useState, useEffect } from "react";
import data from "../../data.json";
import MoviesCard from "../Components/MoviesCard";
import SingleMovieData from "./SingleMovieData";
import MockAdapter from "axios-mock-adapter";
import useMovieFetch from "../utils/fetcher";

const HundredMovies = () => {
  const { topHunMovies, handleWishList } = useMovieFetch(
    "https://imdb-top-100-movies.p.rapidapi.com/"
  );

  console.log("THIS IS THE HANDLER WISH", topHunMovies, handleWishList);
  return (
    <div div className="flex flex-wrap justify-center">
      {topHunMovies.map((movie, index) => {
        return (
          <MoviesCard
            movie={movie}
            key={index}
            handleWishList={handleWishList}
          />
        );
      })}
    </div>
  );
};
export default HundredMovies;
