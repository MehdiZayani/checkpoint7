import { Link } from 'react-router-dom';
import "../App.css"
export default function Desc({movieimg,name,desc}) {
    return(
        <>
              <Link to="/">Back to Home</Link>
            <h1>{name}</h1>
            <p>{desc}</p>
            <img alt={name} src={movieimg} className='moviecard'/>
            {/* <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movie.title}`}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allowFullScreen
            />         */}
      </>
    )
}