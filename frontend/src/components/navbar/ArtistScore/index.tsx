import ArtistStars from "components/navbar/ArtistStars";
import './styles.css'

type Props = {
  score: number;
  count: number;
}

function ArtistScore({ score, count } : Props) {

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <ArtistStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}
export default ArtistScore;