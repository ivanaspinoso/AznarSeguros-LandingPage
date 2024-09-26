import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{ backgroundColor: '#f6f6f6' }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/inmobiliarianoche.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nuestra empresa</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: "2px", fontWeight: "bold" }}><strong>Productor:</strong></p>
                <p style={{ marginBottom: "2px" }}>Hector Edgardo Hernández</p>
                <p style={{ marginBottom: "2px" }}>Productor Asesor de Seguros</p>
                <p style={{ marginBottom: "2px" }}>Matrícula 89957</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
