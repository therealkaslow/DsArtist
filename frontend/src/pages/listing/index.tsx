import axios from "axios";
import ArtistCard from "components/navbar/ArtistCard";
import Pagination from "components/navbar/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

  // FORMA QUE N DEVO FAZER //
  axios.get(`${BASE_URL}/artistas`)
          .then(response  => {
            console.log(response.data);
          });

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ArtistCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ArtistCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ArtistCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ArtistCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ArtistCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
