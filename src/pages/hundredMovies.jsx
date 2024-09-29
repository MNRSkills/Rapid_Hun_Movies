import { useState, useEffect } from "react";
import axios from "axios";
import MoviesCard from "../Components/MoviesCard";

const HundredMovies = () => {
  const [topHunMovies, setTopMovies] = useState([]);
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "53fd323a60msh0a9927ee29aa502p11763ajsnd24449e9c20b",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.request(options);
      return setTopMovies(response.data);
    } catch (error) {
      console.error(error, "there was an error in your fetch");
    }
  };

  useEffect(() => {
    // fetchMovies();
  }, []);
  return (
    <div div className="flex flex-wrap justify-center">
      {topHunMovies.map((movie, index) => {
        return <MoviesCard movie={movie} key={index} />;
      })}
    </div>
  );
};
export default HundredMovies;
