import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="container text-center">
          <div className="d-flex justify-content-center m-3">
            <div className="row">
              <div className="col">
                <img src={movie.Poster} alt="name" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
