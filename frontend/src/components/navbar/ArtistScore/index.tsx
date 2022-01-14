import ArtistStars from "components/navbar/ArtistStars";
import './styles.css'
function ArtistScore() {

    const score = 3.5;
    const count = 13;

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <ArtistStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}
export default ArtistScore;