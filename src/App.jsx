import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HundredMovies from "./pages/hundredMovies";
import Navbar from "./Components/navbar";

function App() {


  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-red-900">Hello world</h1>
      <HundredMovies />
    </>
  );
}

export default App;
