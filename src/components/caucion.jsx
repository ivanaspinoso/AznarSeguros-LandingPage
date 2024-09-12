import React from 'react';
import { Navigation } from '../components/navigation';

const Caucion = () => {
  return (
    <>
      <Navigation />
      <div
        id="caucion"
        style={{
          backgroundColor: "#f6f6f6",
          padding: "50px 0",
          marginTop: "80px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "5rem",
            paddingRight: "5rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "2px",
              position: "relative",
              paddingBottom: "10px",
            }}
          >
            Seguros de Caución
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

          <p
            style={{
              fontSize: "1.45rem",
              marginBottom: "20px",
              color: "#666",
            }}
          >
            El seguro de caución es un contrato de garantía que otorga la Compañía de Seguros para cubrir las pérdidas producidas por el incumplimiento de obligaciones del Proponente o Tomador del seguro, frente al acreedor de esas obligaciones, quien es el Asegurado.
          </p>
          <p
            style={{
              fontSize: "1.45rem",
              marginBottom: "20px",
              color: "#666",
            }}
          >
            Es decir que, los seguros de caución sirven para el resarcimiento al Asegurado en caso que el Tomador no cumpla el compromiso asumido en el contrato. Ello implica la existencia de un contrato o una obligación legal de donde surgen las obligaciones a cargo del Tomador que deban ser garantizadas y los derechos del acreedor interesado en que se le garanticen.
          </p>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#a94442",
            }}
          >
            Obras, Suministros Privados y/o Públicos
          </h2>
          <ul
            style={{
              paddingLeft: "20px",
              listStyle: "disc",
              marginBottom: "20px",
            }}
          >
            <li>Mantenimiento de oferta</li>
            <li>Cumplimiento de contrato</li>
            <li>Ejecución de contrato o garantía de ejecución</li>
            <li>Anticipo financiero o por acopio</li>
            <li>Sustitución de fondo de reparo</li>
            <li>Tenencia de bienes para su uso, reparación, manutención y/o reacondicionamiento</li>
            <li>Tenencia de materiales para fabricación y/o montaje</li>
            <li>Certificados de avance de fabricación</li>
          </ul>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#a94442",
            }}
          >
            Garantías Aduaneras
          </h2>
          <ul
            style={{
              paddingLeft: "20px",
              listStyle: "disc",
              marginBottom: "20px",
            }}
          >
            <li>Mercaderías en tránsito terrestre</li>
            <li>Falta de documentación</li>
            <li>Importación temporaria</li>
            <li>Diferencia de derechos</li>
            <li>Depósito fiscal</li>
          </ul>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#a94442",
            }}
          >
            Garantías de Actividad
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "20px",
              color: "#666",
            }}
          >
            (Información específica a agregar según necesidad)
          </p>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#a94442",
            }}
          >
            Otras Garantías
          </h2>
          <ul
            style={{
              paddingLeft: "20px",
              listStyle: "disc",
            }}
          >
            <li>Administradores de sociedades (Inspección General de Justicia - IGJ)</li>
            <li>Garantías judiciales</li>
          </ul>

          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <a href="#contact" className="btn btn-custom btn-lg page-scroll ">
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caucion;
