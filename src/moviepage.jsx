import React from 'react';
import {useParams } from 'react-router-dom';
import "./App.css"
import Desc from "./components/description";
function MoviePage({ movies,img}) {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);
  return (
    <div>
      <Desc movieimg={movie.posterURL} name={movie.title} desc={movie.description}/>
      {/* <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movie.trailer}`}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      /> */}
    </div>
  );
}

export default MoviePage;
