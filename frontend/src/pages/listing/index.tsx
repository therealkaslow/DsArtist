import ArtistCard from "components/navbar/ArtistCard";
import Pagination from "components/navbar/Pagination";

function Listing() {
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
