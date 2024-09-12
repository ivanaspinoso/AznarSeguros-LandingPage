import React from "react";
import { Navigation } from "../components/navigation"; // Asegúrate de que tengas el componente Navigation disponible

const VidaService = () => {
  return (
    <>
      <Navigation />
      <div id="vida-service" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        {/* <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <img
            src="path_to_image.jpg"
            alt="Seguros de Vida Individual"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div> */}
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", textAlign: "center", color: "#333" }}>
                Seguros de Vida Individual
              </h2>

              {/* Seguro de vida con Ahorro */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Seguro de vida con Ahorro</h3>
                <p>
                  Esta opción permite formar un fondo a un tiempo determinado, el cual está disponible en forma parcial o total.
                </p>
              </div>

              {/* Seguro de vida puro */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Seguro de vida puro</h3>
                <p>
                  Estos seguros pagan la cuota pura del seguro sin ahorro.
                </p>
              </div>

              {/* Seguro de vida para dos personas */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Seguro de vida para dos personas</h3>
                <p>
                  Se logra contar con una póliza para dos personas con dos seguros de vida y una capitalización. Ideal para matrimonios y socios de empresas.
                </p>
              </div>

              {/* Seguro de vida para varias personas */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Seguro de vida para varias personas</h3>
                <p>
                  Seguro de vida a términos cortos, ideal para situaciones como garantías hipotecarias. Son seguros baratos que cumplen con una finalidad puntual.
                </p>
                <p>
                  Para mayor información, consulta la{" "}
                  <a
                    href="http://www.ssn.gov.ar/storage/Orientacion/Guias/GUIA_Vida.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#a94442", textDecoration: "underline" }}
                  >
                    Guía de la Superintendencia de Seguros de la Nación
                  </a>
                  .
                </p>
              </div>

              {/* Seguros de vida colectivos */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Seguros de vida Colectivos empresas</h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                  <li>Seguro de Vida Obligatorio</li>
                  <li>Seguro convenio Mercantil</li>
                  <li>Convenio Laborales</li>
                  <li>Ley contrato de trabajo</li>
                  <li>Convenios optativos</li>
                  <li>Accidentes Personales Colectivo</li>
                  <li>Vida Colectivo</li>
                  <li>Saldo Deudor</li>
                  <li>Sepelio</li>
                  <li>Continuidad de Estudios</li>
                  <li>Canasta Familiar</li>
                  <li>Complejidad Médica</li>
                  <li>Minigrupos</li>
                </ul>
              </div>
            </div>
          </div>
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

export default VidaService;
