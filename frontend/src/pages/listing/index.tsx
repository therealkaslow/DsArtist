import axios from "axios";
import ArtistCard from "components/navbar/ArtistCard";
import Pagination from "components/navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/artistas?size=8&page=${pageNumber}&sort=title`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          {page.content.map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <ArtistCard movie={movie} />
            </div>
          )
          )}
        </div>
      </div>
    </>
  );
}
export default Listing;
