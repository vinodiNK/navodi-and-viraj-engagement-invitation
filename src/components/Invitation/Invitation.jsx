import "./Invitation.css";

import invitationImage from "../../assets/images/invitation.jpg";

function Invitation() {
  return (
    <main className="invitation-section">
      <img
        src={invitationImage}
        alt="Navodi and Viraj Engagement Invitation"
        className="invitation-image"
      />
    </main>
  );
}

export default Invitation;