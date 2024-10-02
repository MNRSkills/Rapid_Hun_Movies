import { useState, useEffect } from "react";
import data from "../../data.json";
import axios from "axios";
import MoviesCard from "../Components/MoviesCard";
import MockAdapter from "axios-mock-adapter";

const HundredMovies = () => {
  const [topHunMovies, setTopMovies] = useState([]);
  // const options = {
  //   method: "GET",
  //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //   headers: {
  //     "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  //     "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  //   },
  // };

  const fetchMovies = async () => {
    try {
      const response = await axios.request(options);
      return setTopMovies(response.data);
    } catch (error) {
      console.error(error, "there was an error in your fetch");
    }
  };

  const handleWishList = (id) => {
    console.log("handleer was clicked and licked", id);
  };

  useEffect(() => {
    // fetchMovies();
    const mock = new MockAdapter(axios);
    mock.onGet("/movies").reply(200, data);

    axios.get("/movies").then((response) => {
      return setTopMovies(response.data);
    });
  }, []);
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
