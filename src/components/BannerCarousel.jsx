import React from "react";
import boatBanner from "../assets/boat.webp";
import motorolaBanner from "../assets/motorola.webp";
import novaBanner from "../assets/nova.webp";

export default function BannerCarousel() {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-none d-md-flex justify-content-center">
            <img src={boatBanner} className="img-fluid mx-2" alt="boAt Banner" style={{ maxWidth: "32%" }} />
            <img src={motorolaBanner} className="img-fluid mx-2" alt="Motorola Banner" style={{ maxWidth: "32%" }} />
            <img src={novaBanner} className="img-fluid mx-2" alt="Nova Banner" style={{ maxWidth: "32%" }} />
          </div>
          <div className="d-block d-md-none">
            <img src={boatBanner} className="d-block w-100" alt="boAt Banner" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-none d-md-flex justify-content-center">
            <img src={motorolaBanner} className="img-fluid mx-2" alt="Motorola Banner" style={{ maxWidth: "32%" }} />
            <img src={novaBanner} className="img-fluid mx-2" alt="Nova Banner" style={{ maxWidth: "32%" }} />
            <img src={boatBanner} className="img-fluid mx-2" alt="boAt Banner" style={{ maxWidth: "32%" }} />
          </div>
          <div className="d-block d-md-none">
            <img src={motorolaBanner} className="d-block w-100" alt="Motorola Banner" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-none d-md-flex justify-content-center">
            <img src={novaBanner} className="img-fluid mx-2" alt="Nova Banner" style={{ maxWidth: "32%" }} />
            <img src={boatBanner} className="img-fluid mx-2" alt="boAt Banner" style={{ maxWidth: "32%" }} />
            <img src={motorolaBanner} className="img-fluid mx-2" alt="Motorola Banner" style={{ maxWidth: "32%" }} />
          </div>
          <div className="d-block d-md-none">
            <img src={novaBanner} className="d-block w-100" alt="Nova Banner" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}
