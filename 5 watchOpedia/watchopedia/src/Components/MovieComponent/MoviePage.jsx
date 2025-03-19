import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return {
      movieList: ["die hard", "Harry Potter"],
    };
  });
  function handleAddMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        ...prevState,
        movieList: prevState.movieList.concat([newMovie]),
      };
    });
  }
  return (
    <div className="container col-12 cik-md-6 my-3 border">
      <MovieList movieList={movieState.movieList}></MovieList>
      <AddMovie handleAddMovie={handleAddMovie}></AddMovie>
    </div>
  );
};

export default MoviePage;
