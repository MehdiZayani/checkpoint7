<ul>
{filteredMovies.map((movie, index) => (
  <div key={index} className="movies-top">
    {/* {movie.name} - {movie.genre} - {movie.rating} - {movie.desc} */}
    <div>
        <img src={movie.img} alt="Movie" className="moviecard"
        width={220}></img>

          <h3>{movie.name}</h3>
          <p>{movie.genre}</p>
          <p>{movie.desc}</p>
          <p>{movie.rating}</p>

    </div>
  </div>
))}
</ul>