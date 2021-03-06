import ArtistScore from "../ArtistScore";

const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};
type Props = {
  
}
function ArtistPhoto() {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <ArtistScore score={0} count={0} />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
      </div>
    </div>
  );
}
export default ArtistPhoto;
