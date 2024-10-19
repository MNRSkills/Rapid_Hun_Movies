import { useState } from "react";
import useMovieFetch from "../utils/fetcher";

const MoviesCard = ({ movie, handleWishList }) => {
  const [flipped, setFlip] = useState(false);
  // This component has all the movies in a card display
  // console.log("this is props movie", handleWishList);
  const { title, thumbnail, description, image, rank, id } = movie;
  // const handleWishList = useMovieFetch();
  return (
    // main card here ------------
    <>
      {flipped == false ? (
        <div className="border border-spacing-4 border-cyan-700 m-4 relative ease-linear hover:scale-95 hover:opacity-50">
          <img src={image} alt="" className="cover ease-linear" />
          {/* ------------ */}
          {/* Below is overlay */}
          <div className="flex items-center justify-center flex-col absolute text-4xl text-white top-0 bottom-0 w-full h-full opacity-0 hover:opacity-100 z-20">
            {/* top of overlay */}
            <h1 className="text-center font-bold lg:max-w-80">{title}</h1>
            <h2 className=" font-bold px-25">Rank:{rank}</h2>
            <button
              className="mt-10 px-4 py-2 bg-cyan-800 hover:bg-cyan-950 rounded shadow-lg hover:opacity-100"
              onClick={() => setFlip(!flipped)}
            >
              Read More
            </button>
          </div>
        </div>
      ) : (
        // flipped the card over ---------------
        <div className="border border-spacing-4 border-cyan-700 flex flex-col justify-center items-center max-w-90 shadow-lg mx-10">
          <h4 className="font-semibold px-32 line-clamp-6 my-10">{title}</h4>
          <p className="max-w-60">{description}</p>
          <div>
            <img src={thumbnail} alt="" className="px-10 w-36" />
          </div>
          <button
            className="mt-10 px-4 py-2 bg-cyan-800 rounded shadow-lg opacity-100"
            onClick={() => setFlip(!flipped)}
          >
            Return
          </button>
          <button
            className="mt-10 px-4 py-2 bg-cyan-800 rounded shadow-lg opacity-100"
            onClick={() => {
              handleWishList(movie);
            }}
          >
            Add to Wish List
          </button>
        </div>
      )}
    </>
  );
};

export default MoviesCard;
