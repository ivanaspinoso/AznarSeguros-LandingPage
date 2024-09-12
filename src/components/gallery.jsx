import { Link } from "react-router-dom";
import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>
          Proveemos una gama completa de soluciones de seguros para proteger lo que más importa
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <Link to={`/services/${d.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                  </Link>
                ))
              : "Loading..."}
          </div>
          
        </div>
      </div>
    </div>
  );
};
