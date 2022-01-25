import axios from "axios";
import ArtistCard from "components/navbar/ArtistCard";
import Pagination from "components/navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/artistas`)
    .then(response  => {
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
    <p>{pageNumber}</p>
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
