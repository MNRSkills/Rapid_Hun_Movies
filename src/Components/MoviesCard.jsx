import { useState } from "react";

const MoviesCard = ({ movie }) => {
  const [flipped, setFlip] = useState(false);
  // This component has all the movies in a card display
  // console.log(movie, "this is props movie");
  const { title, thumbnail, description, image, rank } = movie;
  return (
    <div className="border border-spacing-4 border-cyan-700 m-4 relative ease-out ">
      <div className="hover:scale-125">
        <img src={image} alt="" className=" cover " />
      </div>

      <div className="absolute top-0 bottom-0 mt-52 ml-10 w-full h-full bg-slate-500 hover:opacity-5 z-10">
        <h1 className="text-center text-gray-600 font-bold text-3xl lg:max-w-80 z-10">
          {title}
        </h1>
        <h2 className="text-4xl text-gray-700 font-bold px-25">{rank}</h2>
        <button onClick={() => setFlip(true)}>Read More</button>
      </div>
    </div>
  );
};

export default MoviesCard;
