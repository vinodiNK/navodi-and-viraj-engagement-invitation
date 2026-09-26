import introVideo from "../../assets/videos/intro.mp4";
import "./IntroVideo.css";

function IntroVideo() {
  const handleOpenInvitation = () => {
    console.log("Open Invitation clicked");
  };

  return (
    <main className="intro-page">

      {/* Intro Video */}
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="intro-overlay">

        <div className="intro-content">

          <p className="intro-small-text">
            OUR ENGAGEMENT
          </p>

          <h1 className="intro-names">
            Navodi <span>&</span> Viraj
          </h1>

          <p className="intro-subtitle">
            Together with their families
          </p>

          <button
            className="open-invitation-btn"
            onClick={handleOpenInvitation}
          >
            Open Invitation
          </button>

        </div>

      </div>

    </main>
  );
}

export default IntroVideo;