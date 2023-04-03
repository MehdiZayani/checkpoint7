import './App.css';
import React,{useState} from 'react';
import RatingStars from 'react-rating-stars-component';
import MovieList from './components/movielist';
function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ name: '', genre: '', rating: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [moviebase,setMoviebase]= useState([
    {
      "title":"Interstellar",
      "description":"Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale.",
      "posterURL":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "rating":"4"
    },
    {
      "title":"Inception",
      "description":"Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
      "posterURL":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      "rating":"4"
    },
    {
      "title":"Shutter Island",
      "description":"En 1954, une meurtrière, extrêmement dangereuse, placée en centre de détention psychiatrique disparaît sur l'île de Shutter Island. Deux officiers du corps fédéral des marshals, Teddy Daniels et Chuck Aule, sont envoyés sur place pour enquêter. Très vite, Teddy Daniels comprend que le personnel de l'établissement cache quelque chose. Seul indice dont il dispose : un bout de papier sur lequel est griffonnée une suite de chiffres entrecoupée de lettres.",
      "posterURL":"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "rating":"4"
    },
    {
      "title":"Le loup de Wall Street",
      "description":"Sa licence de courtier en poche, et les narines déjà pleines de cocaïne, Jordan Belfort est prêt à conquérir Wall Street. Ce jour d'octobre, un krach, le plus important depuis 1929, vient piétiner ses rêves de grandeur. C'est finalement à Long Island qu'il échoue et qu'il monte sa propre affaire de courtage. Son créneau : le hors-cote. Sa méthode : l'arnaque. Son équipe : des vendeurs ou des petits trafiquants.",
      "posterURL":"https://fr.web.img6.acsta.net/pictures/210/604/21060483_20131125114549726.jpg",
      "rating":"5"
    },
    {
      "title":"Star Wars, épisode IX : L'Ascension de Skywalker",
      "description":"L'univers de Star Wars se déroule dans une galaxie qui est le théâtre d'affrontements entre les Chevaliers Jedi et les Seigneurs noirs des Sith, personnes sensibles à la Force, un champ énergétique mystérieux leur procurant des pouvoirs psychiques. Les Jedi maîtrisent le Côté lumineux de la Force, pouvoir bénéfique et défensif, pour maintenir la paix dans la galaxie. Les Sith utilisent le Côté obscur, pouvoir nuisible et destructeur, pour leurs usages personnels et pour dominer la galaxie.",
      "posterURL":"https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png",
      "rating":"1"
    }])
    const handleAddMovie = () => {
      if (movie.name && movie.genre && movie.rating && movie.desc && movie.img) {
        setMovies([...movies, movie]);
        setMovie({ name: '', genre: '', rating: 0,desc:'',img:'' });
      } else {
        alert('Please fill all fields!');
      }
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleRatingChange = (value) => {
      setMovie({ ...movie, rating: value });
    };
  
    const filteredMovies = movies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  return (
    <div className='main'>
      <h1 className='center'>Film Project</h1>
      <MovieList movies={moviebase}/>
      <div>
      <h1>Your Movie List</h1>
      <form>
        <label>
          Search:
          <input type="text" value={searchQuery} onChange={handleSearchChange} />
        </label>
      </form>
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
      <form>
        <label>
          Movie Name:
          <input
            type="text"
            value={movie.name}
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Movie Description:
          <input
            type="text"
            value={movie.desc}
            onChange={(e) => setMovie({ ...movie, desc: e.target.value })}
          />
        </label>
        <br />
        <label>
          Movie Image:
          <input
            type="text"
            name='img'
            value={movie.img}
            onChange={(e) => setMovie({ ...movie, img: e.target.value })}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            value={movie.genre}
            onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          />
        </label>
        <br />
        <label>
          Rating:
          <RatingStars
            count={5}
            size={24}
            value={movie.rating}
            onChange={handleRatingChange}
            activeColor="#ffd700"
          />
        </label>
        <br />
        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
