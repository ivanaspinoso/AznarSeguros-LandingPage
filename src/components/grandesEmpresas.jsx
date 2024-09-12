import React from 'react';
import { Navigation } from '../components/navigation'; 

const GrandesEmpresas = () => {
  return (
    <>
      <Navigation />
      <div id="grandes-empresas" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
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
            Grandes Empresas
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

          {/* Identificación y Evaluación de Riesgos */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Identificación y Evaluación de Riesgos
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Inspecciones de riesgos</li>
              <li>Consultoría en administración de riesgos y protección contra incendios</li>
              <li>Informes de suscripción</li>
            </ul>
          </section>

          {/* Diseño del Programa de Seguros */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Diseño del Programa de Seguros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Revisión del programa de seguros vigente y preparación de recomendaciones asociadas</li>
              <li>Diseño de programa de seguros</li>
              <li>Preparación de bases de cotización (Underwriting submission)</li>
            </ul>
          </section>

          {/* Marketing del Programa de Seguros */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Marketing del Programa de Seguros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Preparación de una estrategia de marketing</li>
              <li>Selección de aseguradores relevantes</li>
              <li>Desarrollo de procesos de licitación de seguros</li>
              <li>Negociación de términos y condiciones de las pólizas</li>
            </ul>
          </section>

          {/* Implementación del Programa de Seguros */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Implementación del Programa de Seguros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Colocación del programa de seguros</li>
              <li>Revisión y aprobación de las pólizas de seguros</li>
              <li>Preparación de manuales y resúmenes de seguros</li>
              <li>Capacitación</li>
            </ul>
          </section>

          {/* Administración del Programa de Seguros */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Administración del Programa de Seguros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Revisiones periódicas del programa de seguros para adaptarlo constantemente a las características del riesgo</li>
              <li>Servicio continuo de modificaciones y tramitación de endosos</li>
              <li>Renovación del programa de seguros</li>
              <li>Implementación y coordinación de programas regionales y/o globales</li>
            </ul>
          </section>

          {/* Opciones de Financiamiento Alternativo de Riesgos */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Opciones de Financiamiento Alternativo de Riesgos
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Análisis de retención de riesgos</li>
              <li>Estudios de factibilidad, implementación y administración de cautivas</li>
              <li>Soluciones de mercados de capitales</li>
            </ul>
          </section>

          {/* Atención de Siniestros */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Atención de Siniestros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Participación en la designación de liquidadores profesionales</li>
              <li>Asesoría en la preparación y presentación de los reclamos y la documentación asociada a los aseguradores</li>
              <li>Revisión e interpretación de coberturas y condiciones</li>
              <li>Asesoría en la evaluación de pérdidas y responsabilidades</li>
              <li>Estadísticas de siniestralidad por póliza y tipo de siniestro</li>
            </ul>
          </section>

          {/* Otros */}
          <section>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>
              Otros
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Auditorías de seguros (insurance due diligence)</li>
              <li>Información de seguros y riesgos, incluyendo temas legales y regulatorios, riesgos emergentes y tendencias del mercado</li>
              <li>Asesoría y consejos de seguros al Cliente en una base regular</li>
            </ul>
          </section>

          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <a href="#contact" className="btn btn-custom btn-lg page-scroll">
              Cotizar
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default GrandesEmpresas;
