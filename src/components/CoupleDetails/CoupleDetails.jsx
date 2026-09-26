import Countdown from "../Countdown/Countdown";
import CoupleGallery from "../CoupleGallery/CoupleGallery";
import "./CoupleDetails.css";

function CoupleDetails() {
  return (
    <>
      <section className="couple-details">

        <p className="details-intro">
          Together with their families
        </p>

        <h1 className="bride-name">
          Navodi Ambagahaduwa
        </h1>

        <p className="parent-name">
          Daughter of Mr. & Mrs. Ambagahaduwa
        </p>

        <div className="details-and">
          &
        </div>

        <h1 className="groom-name">
          Viraj Dissanayake
        </h1>

        <p className="parent-name">
          Son of Mr. & Mrs. Dissanayake
        </p>

        <Countdown />

      </section>

      <CoupleGallery />
    </>
  );
}

export default CoupleDetails;