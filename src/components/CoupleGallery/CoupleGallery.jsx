import couple3 from "../../assets/images/couple/couple3.jpg";
import couple4 from "../../assets/images/couple/couple4.jpg";
import couple5 from "../../assets/images/couple/couple5.jpg";
import "./CoupleGallery.css";

import couple6 from "../../assets/images/couple/couple6.jpg";

function CoupleGallery() {
    const images = [
        couple5,
        couple3,
        couple4,
        couple6,
    ];

    return (
        <section className="couple-gallery">

            <p className="gallery-subtitle">
                OUR STORY
            </p>

            <h2 className="gallery-title">
                Moments Together
            </h2>

            <div className="gallery-line"></div>

            <div className="gallery-grid">

                {images.map((image, index) => (
                    <div
                        className={`gallery-item gallery-item-${index + 1}`}
                        key={index}
                    >
                        <img
                            src={image}
                            alt={`Navodi and Viraj moment ${index + 1}`}
                        />
                    </div>
                ))}

            </div>

        </section>
    );
}

export default CoupleGallery;