import React from "react";
import "../App.css"
const MovieList = (props)=>{
    return(
        <>
            {props.movies.map((movie, index)=> <div className="movies">
                <img src={movie.posterURL} alt="Movie" className="moviecard"></img>
                </div>)}

        </>
    )
}
export default MovieList;