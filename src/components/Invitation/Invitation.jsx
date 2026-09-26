import "./Invitation.css";

import invitationImage from "../../assets/images/invitation.jpg";

function Invitation() {
  return (
    <section className="invitation-section">
      <img
        src={invitationImage}
        alt="Navodi and Viraj Engagement Invitation"
        className="invitation-image"
      />
    </section>
  );
}

export default Invitation;