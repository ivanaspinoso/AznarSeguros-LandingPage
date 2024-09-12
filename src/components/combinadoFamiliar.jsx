import React from "react";
import { Navigation } from "../components/navigation"; // Asegúrate de que tengas el componente Navigation disponible

const CombinadoFamiliar = () => {
  return (
    <>
      <Navigation />
      <div id="combinado-familiar" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        {/* <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <img
            src="path_to_image.jpg"
            alt="Coberturas de Seguro de Hogar"
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
                Coberturas de Seguro de Hogar
              </h2>

              {/* Coberturas principales */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Coberturas</h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                  <li>Incendio Edificio y Contenido General</li>
                  <li>Robo y/o Hurto Contenido General</li>
                  <li>Todo Riesgo Electrodomésticos: Robo, Incendio y Daños de su TV, PC, Audio, video, DVD y Microondas</li>
                  <li>Cristales</li>
                  <li>Daños por Agua al contenido de su vivienda</li>
                  <li>Responsabilidad Civil</li>
                  <li>Accidentes personales</li>
                  <li>Accidentes Personales - Personal Doméstico</li>
                </ul>
              </div>

              {/* Adicionales a la cobertura principal */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Adicionales a la Cobertura Principal</h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                  <li>Remoción de escombros</li>
                  <li>Huracán, vendaval, ciclón y tornado</li>
                  <li>Jugadores de golf</li>
                  <li>Gastos de Alojamiento</li>
                  <li>Robo de Tarjeta de Débito en Cajeros Automáticos</li>
                  <li>Robo en República Argentina y Países Limítrofes</li>
                  <li>Reemplazo de Documentos</li>
                  <li>Alimentos en Freezer</li>
                  <li>Daños estáticos a consecuencia de Robo e Incendio</li>
                  <li>Robo e Incendio en Bauleras</li>
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

export default CombinadoFamiliar;
