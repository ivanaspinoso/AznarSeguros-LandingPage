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
  
  <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff", padding: "20px", borderRadius: "5px", marginTop: "10px" }}>
    <div style={{ flexBasis: "45%", textAlign: "left" }}>
      <p style={{ fontSize: "18px", color: "#DB4F4F", fontWeight: "bold", marginBottom: "5px" }}>
        <strong>Productores:</strong>
      </p>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Hector Edgardo Hernández</p>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Productor Asesor de Seguros</p>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Matrícula 89957</p>
    </div>
    
    <div style={{ flexBasis: "45%", textAlign: "left",marginTop:"26px" }}>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Andrés Vicente Aznar</p>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Productor Asesor de Seguros</p>
      <p style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "600" }}>Matrícula 54073</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};
