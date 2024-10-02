import { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const handleMovieSearch = () => {
    console.log("this is working");
  };
  return (
    <form onSubmit={handleMovieSearch}>
      <input type="text" placeholder="Find your favorite" value={search} />
      <button>Submit</button>
    </form>
  );
};

export default Searchbar;
