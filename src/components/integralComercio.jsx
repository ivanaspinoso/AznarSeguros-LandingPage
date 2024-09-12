import React from 'react';
import { Navigation } from '../components/navigation'; // Asegúrate de que tengas el componente Navigation disponible

const IntegralComercio = () => {
  return (
    <>
      <Navigation />
      <div id="integral-comercio" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#333" }}>
            Integral de Comercio
          </h1>

          {/* Cobertura Básica Integral */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Cobertura Básica Integral</h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Incendio Edificio</li>
              <li>Incendio Contenido General y Mercaderías</li>
              <li>Robo Contenido General y Mercaderías</li>
              <li>Robo de Valores en Caja Fuerte y/o Caja Registradora</li>
              <li>Seguro Técnico</li>
              <li>Robo de valores en caja fuerte y/o en línea de cajas.</li>
              <li>R.C. Cobertura por suministro de alimentos a títulos oneroso o no oneroso</li>
              <li>Falta de Frío</li>
              <li>Cristales</li>
              <li>Responsabilidad Civil Comprensiva</li>
            </ul>
          </section>

          {/* Coberturas Opcionales */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Coberturas Opcionales</h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Accidentes Personales y Accidentes Personales para Instituciones Educativas</li>
              <li>Pérdida de Beneficio</li>
              <li>Responsabilidad Civil Adicional</li>
            </ul>
          </section>
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

export default IntegralComercio;
