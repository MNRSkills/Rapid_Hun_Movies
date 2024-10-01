import { useState } from "react";

const MoviesCard = ({ movie }) => {
  const [flipped, setFlip] = useState(false);
  // This component has all the movies in a card display
  // console.log(movie, "this is props movie");
  const { title, thumbnail, description, image, rank } = movie;
  return (
    // main card here ------------
    <div className="border border-spacing-4 border-cyan-700 m-4 relative ease-linear hover:scale-95 hover:opacity-50">
      <img src={image} alt="" className="cover ease-linear hover:opacity-50" />
      {/* ------------ */}
      {/* Below is overlay */}
      <div className="flex items-center justify-center flex-col absolute text-4xl text-white top-0 bottom-0 w-full h-full opacity-0 hover:opacity-100 ">
        {/* top of overlay */}
        <h1 className="text-center font-bold lg:max-w-80">{title}</h1>
        <h2 className=" font-bold px-25">Rank:{rank}</h2>
        <button
          className="mt-10 px-4 py-2 bg-cyan-800 rounded shadow-lg opacity-100"
          onClick={() => console.log("THIS WAS CLICKED")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
