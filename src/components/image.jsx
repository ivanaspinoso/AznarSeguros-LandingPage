import React from "react";

export const Image = ({ title, image }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg" style={{ position: "relative", overflow: "hidden" }}>
        <a href={image} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={image}
            className="img-responsive"
            alt={title}
            style={{
              width: "100%",
              height: "268.86px", 
              objectFit: "cover", 
            }}
          />
        </a>
      </div>
    </div>
  );
};
