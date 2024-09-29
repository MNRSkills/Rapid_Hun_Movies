const MoviesCard = ({ movie }) => {
  // This component has all the movies in a card display
  // console.log(movie, "this is props movie");
  const { title, thumbnail, description, image, rank } = movie;
  return (
    <div className="border border-spacing-4 border-cyan-700 m-4">
      <h1 className="text-center text-gray-600 font-bold text-3xl lg:max-w-80">
        {title}
      </h1>
      <div className="p-3">
        <img src={image} alt="" className=" cover" />
      </div>
      <h3 className="text-center max-w-64">{description}</h3>
    </div>
  );
};

export default MoviesCard;
