import React from 'react';
import { Navigation } from '../components/navigation'; 

const Transporte = () => {
  return (
    <>
      <Navigation />
      <div id="transporte" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "2px",
              position: "relative",
              paddingBottom: "10px", }}>
            Transporte
            <span
              style={{
                content: "''",
                position: "absolute",
                width: "100px",
                height: "4px",
                backgroundColor: "#a94442",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "2px",
              }}
            ></span>
          </h1>

          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Cobertura Básica</h2>
          <p style={{ marginBottom: "20px" }}>
            Daños o pérdidas en las mercaderías aseguradas como consecuencia de:
          </p>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Choque.</li>
            <li>Vuelco.</li>
            <li>Desbarrancamiento o descarrilamiento del vehículo transportador.</li>
            <li>Derrumbe.</li>
            <li>Caída de árboles o postes.</li>
            <li>Incendio.</li>
            <li>Explosión.</li>
            <li>Rayo.</li>
            <li>Huracán, ciclón, tornado.</li>
            <li>Inundación, aluvión o alud.</li>
          </ul>

          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Cobertura Adicional</h2>
          <p style={{ marginBottom: "20px" }}>
            Se puede incluir las siguientes coberturas adicionales:
          </p>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Robo.</li>
            <li>Hurto *</li>
            <li>Falta de entrega *</li>
            <li>Desaparición *</li>
            <li>Rotura por caída durante operaciones de carga y descarga *</li>
            <li>Derrame, mojadura, contacto con otras cargas, abolladuras *</li>
            <li>Descompostura de máquina frigorífica.</li>
            <li>Eximición de responsabilidad al transportista *</li>
          </ul>
          <p style={{ fontStyle: "italic" }}>
            *Solamente para vehículos de terceros.
          </p>
          <div style={{ textAlign: "center",marginTop:"5rem"  }}>
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

export default Transporte;
