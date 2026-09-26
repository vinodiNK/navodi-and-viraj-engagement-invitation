.couple-gallery {
  width: 100%;
  padding: 70px 20px 100px;

  background: #fffaf8;

  text-align: center;

  overflow: hidden;
}

/* =========================
   TITLE
========================= */

.gallery-subtitle {
  margin: 0 0 8px;

  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 400;

  letter-spacing: 3px;

  color: #800000;
}

.gallery-title {
  margin: 0;

  font-family: "Playfair Display", serif;
  font-size: 34px;
  font-weight: 400;

  color: #800000;
}

.gallery-line {
  width: 50px;
  height: 1px;

  margin: 18px auto 40px;

  background: #800000;
}


/* =========================
   GALLERY GRID
========================= */

.gallery-grid {
  width: 100%;
  max-width: 1050px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}


/* =========================
   IMAGE BOX
========================= */

.gallery-item {
  position: relative;

  overflow: hidden;

  border-radius: 14px;

  background: #ffffff;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.10);

  animation: galleryFade 1s ease both;
}


/* =========================
   ALL IMAGES
========================= */

.gallery-item img {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

  transition:
    transform 0.8s ease,
    filter 0.8s ease;
}


/* =========================
   FIRST / MAIN PHOTO
========================= */

.gallery-item-1 {
  grid-column: span 2;

  width: 100%;

  /* Keeps the complete wedding photo visible */
  aspect-ratio: 16 / 10;

  display: flex;

  justify-content: center;
  align-items: center;

  background: #f8f3f0;

  animation-delay: 0.1s;
}

.gallery-item-1 img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}


/* =========================
   OTHER PHOTOS
========================= */

.gallery-item-2,
.gallery-item-3,
.gallery-item-4,
.gallery-item-5 {
  aspect-ratio: 4 / 5;

  display: flex;

  justify-content: center;
  align-items: center;

  background: #f8f3f0;
}

.gallery-item-2 img,
.gallery-item-3 img,
.gallery-item-4 img,
.gallery-item-5 img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}


/* =========================
   HOVER EFFECT
========================= */

.gallery-item:hover img {
  transform: scale(1.04);

  filter: brightness(0.97);
}


/* =========================
   ANIMATION
========================= */

.gallery-item-2 {
  animation-delay: 0.2s;
}

.gallery-item-3 {
  animation-delay: 0.3s;
}

.gallery-item-4 {
  animation-delay: 0.4s;
}

.gallery-item-5 {
  animation-delay: 0.5s;
}

@keyframes galleryFade {

  from {
    opacity: 0;

    transform:
      translateY(40px)
      scale(0.97);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}


/* =========================
   TABLET
========================= */

@media screen and (min-width: 601px) and (max-width: 1024px) {

  .couple-gallery {
    padding: 60px 25px 80px;
  }

  .gallery-grid {
    max-width: 850px;

    gap: 16px;
  }

  .gallery-item-1 {
    aspect-ratio: 16 / 10;
  }

  .gallery-item-2,
  .gallery-item-3,
  .gallery-item-4,
  .gallery-item-5 {
    aspect-ratio: 4 / 5;
  }
}


/* =========================
   MOBILE
========================= */

@media screen and (max-width: 600px) {

  .couple-gallery {
    padding: 50px 15px 70px;
  }

  .gallery-subtitle {
    font-size: 9px;

    letter-spacing: 2px;
  }

  .gallery-title {
    font-size: 27px;
  }

  .gallery-line {
    margin-top: 15px;
    margin-bottom: 30px;
  }


  /* One photo per row */

  .gallery-grid {
    grid-template-columns: 1fr;

    gap: 16px;
  }


  /* =========================
     MAIN PHOTO MOBILE
  ========================= */

  .gallery-item-1 {
    grid-column: span 1;

    /*
      Wider ratio for mobile wedding photos.
      Prevents faces from being cropped.
    */
    aspect-ratio: 4 / 3;
  }

  .gallery-item-1 img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }


  /* =========================
     OTHER PHOTOS MOBILE
  ========================= */

  .gallery-item-2,
  .gallery-item-3,
  .gallery-item-4,
  .gallery-item-5 {

    aspect-ratio: 4 / 5;
  }

  .gallery-item-2 img,
  .gallery-item-3 img,
  .gallery-item-4 img,
  .gallery-item-5 img {

    width: 100%;
    height: 100%;

    object-fit: contain;
  }


  /* Smaller hover effect on mobile */

  .gallery-item:hover img {
    transform: scale(1.02);
  }
}