import { ReactComponent as StarFull } from 'assets/img/star.svg'
import { ReactComponent as StarHalf } from 'assets/img/star-metade.svg'
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg'
import './styles.css'
function ArtistStars(){
    return(
        <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
    );
}
export default ArtistStars;