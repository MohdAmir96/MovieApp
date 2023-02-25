import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<MovieDetails />} /> */}
        <Route path="/movies/:imdbID" element={<MovieDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
