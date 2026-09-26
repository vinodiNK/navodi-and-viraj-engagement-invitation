```jsx
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-overlay">

          <p className="small-title">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <h1 className="couple-name">
            Navodi <span>&</span> Viraj
          </h1>

          <p className="engagement-text">
            Are Engaged
          </p>

          <div className="divider">
            <span>♥</span>
          </div>

          <p className="invitation-text">
            We would love to celebrate this special moment
            with you.
          </p>

          <div className="date">
            <span>20</span>
            <div>
              <strong>DECEMBER</strong>
              <small>2026</small>
            </div>
          </div>

        </div>

      </section>


      {/* Welcome Section */}
      <section className="welcome-section">

        <p className="section-small-title">
          OUR SPECIAL DAY
        </p>

        <h2>
          A New Chapter Begins
        </h2>

        <p className="welcome-text">
          Two hearts, two souls, and one beautiful journey.
          We are excited to begin this new chapter together
          and would be honored to have you with us on our
          special day.
        </p>

      </section>


      {/* Event Details */}
      <section className="details-section">

        <div className="detail-card">
          <div className="detail-icon">
            ♡
          </div>

          <h3>Date</h3>

          <p>
            Sunday
            <br />
            20 December 2026
          </p>
        </div>


        <div className="detail-card">
          <div className="detail-icon">
            ♧
          </div>

          <h3>Time</h3>

          <p>
            10:00 AM
            <br />
            onwards
          </p>
        </div>


        <div className="detail-card">
          <div className="detail-icon">
            ♧
          </div>

          <h3>Venue</h3>

          <p>
            Wedding Venue
            <br />
            Sri Lanka
          </p>
        </div>

      </section>


      {/* Footer */}
      <footer className="home-footer">

        <p>
          With Love
        </p>

        <h2>
          Navodi & Viraj
        </h2>

        <p className="footer-date">
          20 • 12 • 2026
        </p>

      </footer>

    </div>
  );
}

export default Home;
```
