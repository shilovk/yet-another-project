import {useEffect, useState} from "react";

function RandomMovie() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const URL = "https://api.nomoreparties.co/beatfilm-movies/";
    fetch(URL + Math.floor(Math.random() * 100 + 1))
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return movie ? (
    <section>
      <h1>{movie.nameRU}</h1>
      <p>Год: {movie.year}</p>
      <p>Страна: {movie.country}</p>
      <p>Режиссёр: {movie.director}</p>
      <p>{movie.description}</p>
    </section>
  ) : (
    <p>loading...</p>
  );
}

export default RandomMovie;