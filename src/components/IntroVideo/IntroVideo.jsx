import { useState } from "react";
import "./IntroVideo.css";

import introVideo from "../../assets/videos/intro.mp4";
import Invitation from "../Invitation/Invitation";

function IntroVideo() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <div className="intro-page">

      {!showInvitation ? (
        <section className="video-section">

          <video
            className="intro-video"
            autoPlay
            muted
            playsInline
          >
            <source src={introVideo} type="video/mp4" />
          </video>

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
                onClick={() => setShowInvitation(true)}
              >
                Open Invitation
              </button>

            </div>

          </div>

        </section>
      ) : (
        <Invitation />
      )}

    </div>
  );
}

export default IntroVideo;