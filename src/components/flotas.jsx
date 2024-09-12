import React from 'react';
import { Navigation } from '../components/navigation'; // Asegúrate de que tengas el componente Navigation disponible

const Flotas = () => {
  return (
    <>
      <Navigation />
      <div id="flotas" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh", 
 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#333" }}>
            Flotas
          </h1>
          <p style={{ fontSize: "1.75rem", marginBottom: "20px", color: "#666" }}>
            Esta modalidad permite asegurar varios vehículos incluyendo todas las coberturas necesarias en una sola póliza y obteniendo descuentos en la prima dependiendo de la cantidad de vehículos.
          </p>
          <div style={{ textAlign: "center", marginTop:"10rem" }}>
        <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll "
                >
                  Cotizar
                </a>{" "}
        </div>
        </div>
      </div>
    </>
  );
};

export default Flotas;
