import "./ThankYouVideo.css";

import thankYouVideo from "../../assets/videos/thankyou.mp4";

function ThankYouVideo() {
  return (
    <section className="thank-you-section">

      <video
        className="thank-you-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={thankYouVideo} type="video/mp4" />
      </video>

      <div className="thank-you-overlay">

        <div className="thank-you-content">

          <p className="thank-you-small">
            THANK YOU
          </p>

          <h2 className="thank-you-title">
            Thank You
          </h2>

          <p className="thank-you-message">
            We look forward to celebrating
            <br />
            this special day with you.
          </p>

          <p className="thank-you-names">
            Navodi &amp; Viraj
          </p>

        </div>

      </div>

    </section>
  );
}

export default ThankYouVideo;