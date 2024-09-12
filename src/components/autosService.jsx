import React from "react";
import { Navigation } from "../components/navigation";

const AutosService = () => {
  return (
    <>
<Navigation/>
    <div id="autos" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop:"80px", minHeight: "100vh" }}>
       
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", textAlign: "center", color: "#333" }}>
              Coberturas de Seguro de Autos
            </h2>
            
            {/* Todo Riesgo */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Todo Riesgo</h3>
              <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                <li>Daños parciales por accidente con franquicia fija o variable (1% al 10%) para vehículos nacionales o importados.</li>
                <li>Robo y/o hurto total y parcial sin franquicia.</li>
                <li>Destrucción total y parcial por incendio sin franquicia.</li>
                <li>Destrucción total por accidente.</li>
                <li>Daños por intento de robo: cobertura a consolas y cerraduras.</li>
                <li>Cristales: Cobertura sin tope y sin límite para luneta, parabrisa y vidrios laterales.</li>
                <li>Responsabilidad Civil limitada.</li>
              </ul>
            </div>

            {/* Todo Riesgo Franquicia Variable */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>
                Todo Riesgo Franquicia Variable
              </h3>
              <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                <li>Daños parciales con franquicia variable del 4% y 6% de la suma asegurada del 0 Km.</li>
                <li>Cobertura de cristales sin tope y sin límite.</li>
                <li>Daños parciales por granizo sin límite con franquicia para autos nacionales e importados.</li>
                <li>Robo y/o hurto total y parcial sin franquicia.</li>
                <li>Destrucción total y parcial por incendio sin franquicia.</li>
                <li>Destrucción total por accidente.</li>
              </ul>
            </div>

            {/* Cobertura contra Terceros */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>
                Cobertura contra Terceros
              </h3>
              <p style={{ marginBottom: "10px" }}>Terceros Completo:</p>
              <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                <li>Cobertura de daños parciales sin franquicia en caso de robo total y recupero del vehículo.</li>
                <li>Cobertura de cristales de cualquier tipo sin tope ni límite.</li>
                <li>Destrucción total al 80% para vehículos de hasta 10 años de antigüedad.</li>
              </ul>
            </div>

            {/* Servicios y Beneficios */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Servicios y Beneficios</h3>
              <p style={{ marginBottom: "10px" }}>Ofrecemos una gama de servicios y beneficios como:</p>
              <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                <li>Atención 24 horas en Argentina y países limítrofes.</li>
                <li>Asistencia mecánica y remolque.</li>
                <li>Auto sustituto en caso de robo o destrucción total.</li>
                <li>Asesoramiento legal.</li>
              </ul>
            </div>

            {/* Prevención */}
            <div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "10px", color: "#a94442" }}>Consejos de Prevención</h3>
              <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                <li>Conduzca con las luces bajas encendidas durante el día.</li>
                <li>Utilice siempre el cinturón de seguridad.</li>
                <li>Evite el uso del celular mientras conduce.</li>
                <li>Los niños menores de 10 años deben ir sentados en el asiento trasero.</li>
                <li>Respete los límites de velocidad.</li>
                <li>Evite conducir bajo los efectos del alcohol.</li>
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

export default AutosService;
