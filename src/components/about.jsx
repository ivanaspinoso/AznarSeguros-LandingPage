import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{ backgroundColor: '#f6f6f6' }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/gallery/recortefrente.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nuestra empresa</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div style={{ marginTop: "10px", backgroundColor: "#fff", padding: "10px", borderRadius: "5px" }}>
                <p style={{ fontSize: "18px", color: "#DB4F4F", fontWeight: "bold", marginBottom: "5px" }}>
                  <strong>Productor:</strong>
                </p>
                <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Hector Edgardo Hernández</p>
                <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Productor Asesor de Seguros</p>
                <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Matrícula 89957</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
