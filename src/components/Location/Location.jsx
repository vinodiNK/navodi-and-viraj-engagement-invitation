import "./Location.css";

function Location() {
  const mapLink =
    "https://maps.app.goo.gl/jn6B4S8cirQg5eBE7?g_st=aw";

  return (
    <section className="location-section">

      <p className="location-subtitle">
        JOIN US AT
      </p>

      <h2 className="location-title">
        Our Engagement
      </h2>

      <div className="location-line"></div>

      <div className="location-card">

        <div className="location-icon">
          ♡
        </div>

        <h3 className="venue-name">
          Hotel Sanola
        </h3>

        <p className="venue-address">
          Horagampita, Baddegama
        </p>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Open Google Maps
        </a>

      </div>

    </section>
  );
}

export default Location;