import invitationImage from "../../assets/images/invitation.jpg";
import "./Invitation.css";

function Invitation() {
  return (
    <div className="invitation-page">
      <div className="invitation-container">
        <img
          src={invitationImage}
          alt="Navodi and Viraj Engagement Invitation"
          className="invitation-image"
        />
      </div>
    </div>
  );
}

export default Invitation;