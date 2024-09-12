import React from 'react';
import { Navigation } from '../components/navigation';

const AgricolaService = () => {
  return (
    <>
      <Navigation />
      <div
        id="agricola-service"
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
            Agrícola
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

          {/* Básica y Adicional sin costo */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Básica
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Daños por granizo</li>
            </ul>

            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
              Adicional sin costo
            </h3>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Incendio y Resiembra</li>
            </ul>

            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
              Cobertura adicional con costo
            </h3>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Inundación</li>
              <li>Falta de piso</li>
              <li>Sequía</li>
              <li>Helada</li>
              <li>Vientos fuertes</li>
            </ul>
          </section>

          {/* Áreas de cobertura */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Áreas de cobertura
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Buenos Aires</li>
              <li>Córdoba</li>
              <li>Corrientes</li>
              <li>Chaco</li>
              <li>Entre Ríos</li>
              <li>Formosa</li>
              <li>La Pampa</li>
              <li>Salta</li>
              <li>Santa Fe</li>
              <li>Santiago del Estero</li>
              <li>Tucumán</li>
            </ul>
          </section>

          {/* Otros beneficios */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Otros beneficios
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Opción de Pólizas en pesos, dólares o quintales.</li>
              <li>Opción de pago a cosecha, sin recargos adicionales.</li>
              <li>Descuento en el costo por aplicación de franquicias.</li>
            </ul>
          </section>

          {/* Cultivos asegurados */}
          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Cultivos asegurados
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
              <li>Algodón</li>
              <li>Arveja</li>
              <li>Arroz</li>
              <li>Avena</li>
              <li>Cebada</li>
              <li>Centeno</li>
              <li>Colza</li>
              <li>Girasol</li>
              <li>Lenteja</li>
              <li>Lino</li>
              <li>Maíz</li>
              <li>Papa</li>
              <li>Poroto</li>
              <li>Soja</li>
              <li>Sorgo</li>
              <li>Trigo</li>
            </ul>
          </section>

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

export default AgricolaService;
