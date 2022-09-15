import React from "react";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";

const movie = () => {
  const [movies, setMovies] = useState([]);

  const getMovieReq = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=87dab12b";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieReq();
  }, []);

  return (
    <div>
      <div className="container-fluid movie-app">
        <div className="row">
          <div className="col">
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default movie;
