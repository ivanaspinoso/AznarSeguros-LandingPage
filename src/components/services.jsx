import React from "react";
import { Link } from "react-router-dom";

export const Services = (props) => {
  return (
    <div id="services" className="text-center " style={{ backgroundColor: '#f6f6f6' }}>
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>
          Proveemos una gama completa de soluciones de seguros para proteger lo que más importa.

          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <Link to={`/services/${d.id}`} style={{ textDecoration: 'none' }}>
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  style={{ cursor: "pointer" }} 
                >
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                </div>
                  </Link>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
