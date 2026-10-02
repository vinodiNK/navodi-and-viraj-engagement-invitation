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

          

          

          


        </div>

      </div>

    </section>
  );
}

export default ThankYouVideo;