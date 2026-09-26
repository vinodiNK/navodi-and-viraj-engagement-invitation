import "./Invitation.css";

import invitationImage from "../../assets/images/invitation.jpg";
import CoupleDetails from "../CoupleDetails/CoupleDetails";

function Invitation() {
  return (
    <div className="invitation-page">

      {/* Invitation Image */}
      <div className="invitation-container">
        <img
          src={invitationImage}
          alt="Navodi and Viraj Engagement Invitation"
          className="invitation-image"
        />
      </div>

      {/* Couple Details + Countdown */}
      <CoupleDetails />

    </div>
  );
}

export default Invitation;