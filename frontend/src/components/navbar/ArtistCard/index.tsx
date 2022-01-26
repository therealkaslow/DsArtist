import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import ArtistScore from "../ArtistScore";


type Props = {
  movie: Movie;
};

function ArtistCard({ movie }: Props) {
  return (
    <div>
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <ArtistScore count={movie.count} score={movie.score} />
        <Link to={`/form/${movie.id}`}>
            <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
    </div>
</div>
  );
}
export default ArtistCard;
