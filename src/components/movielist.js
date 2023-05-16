import React from "react";
import "../App.css"
const MovieList = (props)=>{
    return(
        <>
            {props.movies.map((movie, index)=> <div className="movies">
            <div>
        <img src={movie.posterURL} alt={movie.title} className="moviecard" />
        <p styles={"display:flex;"}>{movie.title}</p>
      </div> 
            </div>
                )}

        </>
    )
}
export default MovieList;