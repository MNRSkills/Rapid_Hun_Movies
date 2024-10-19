import { useState, useEffect } from "react";
import data from "../../data.json";
import axios from "axios";
// import SingleMovieData from "./SingleMovieData";
import MockAdapter from "axios-mock-adapter";

const useMovieFetch = (url) => {
  const [topHunMovies, setTopMovies] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const options = {
    method: "GET",
    url: url,
    headers: {
      "x-rapidapi-key": `${import.meta.env.VITE_RAPID_API_KEY}`,
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.request(options);
      // console.log(response.data);
      return setTopMovies(response.data);
    } catch (error) {
      console.error(error, "there was an error in your fetch");
    }
  };

  const handleWishList = async (topHunMovies) => {
    console.log("handleer was clicked and licked", topHunMovies);
    return setWishList((prevWishList) => [...prevWishList, topHunMovies]);
  };

  const searchHandler = async (topHunMovies) => {
    // CONSIDER THE ISSUE YOU MIGHT RUN INTO WITH THIS DESIGN
    // FOR EXAMPLE IS THERE AN ISSUE WITH HAVING TO MANY FUNC OR REUSING THEM FROM HOOK PERSPECTIVE
    console.log("THiSIS I SEARCHING");
  };

  useEffect(() => {
    fetchMovies();
    // const mock = new MockAdapter(axios);
    // mock.onGet("/movies").reply(200, data);

    // axios.get("/movies").then((response) => {
    //   return setTopMovies(response.data);
    // });
  }, []);

  const movieData = {
    topHunMovies,
    wishList,
    handleWishList,
    searchFilter,
  };

  return { topHunMovies, wishList, handleWishList, searchFilter };
};

export default useMovieFetch;
