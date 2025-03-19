import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layouts/Header";
import Counter from "./Components/Counter";
import MoviePage from "./Components/MovieComponent/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <div className="p-2 m-2 row text-center">
      <Counter></Counter>
      <MoviePage></MoviePage>
    </div>
  </React.StrictMode>
);
