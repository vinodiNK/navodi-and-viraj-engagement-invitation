import Countdown from "../Countdown/Countdown";
import CoupleGallery from "../CoupleGallery/CoupleGallery";
import Location from "../Location/Location";
import ThankYouVideo from "../ThankYouVideo/ThankYouVideo";
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

        {/* Engagement Date */}
        <div className="engagement-date">
          11 November 2026
        </div>

        {/* Engagement Time */}
        <div className="engagement-time">
          9:00 AM
        </div>

        {/* Countdown */}
        <Countdown />

      </section>

      <CoupleGallery />

      <Location />

      <ThankYouVideo />

    </>
  );
}

export default CoupleDetails;