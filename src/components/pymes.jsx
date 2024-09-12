import React from 'react';
import { Navigation } from '../components/navigation'; 

const PYMES = () => {
  return (
    <>
      <Navigation />
      <div id="pymes" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
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
            PYMES
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
            Ofrece una cobertura básica (a prorrata) contemplando:
          </p>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Daños materiales:
              <ul style={{ paddingLeft: "20px", listStyle: "disc", marginTop: "10px" }}>
                <li>Edificios y construcciones.</li>
                <li>Contenido General (maquinarias, instalaciones, mercaderías, suministros, demás efectos y mejoras).</li>
              </ul>
            </li>
            <li>
              Por medio de esta cobertura, se amparan los daños, pérdidas o destrucciones e imprevistos repentinos y accidentales sufridos por los bienes materiales.
            </li>
            <li>
              Interrupción de la explotación (pérdida de beneficios): Ante daños materiales incluidos dentro del seguro, esta cobertura restituye la pérdida de beneficios a causa de la interrupción de la explotación del negocio de su empresa.
            </li>
          </ul>

          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Bienes Asegurados</h2>
          <p style={{ marginBottom: "20px" }}>
            Este seguro le posibilita asegurar los siguientes bienes:
          </p>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Edificios y construcciones.</li>
            <li>Contenido general.</li>
            <li>Maquinarias.</li>
            <li>Instalaciones.</li>
            <li>Mercaderías.</li>
            <li>Suministros que forman parte del proceso de elaboración de los productos.</li>
            <li>Demás efectos (útiles, herramientas, repuestos y accesorios).</li>
            <li>Mejoras (modificaciones o agregados incorporados definitivamente al edificio o construcción).</li>
          </ul>

          <p style={{ marginBottom: "20px" }}>
            Además, se podrán otorgar como sub-límite a primera pérdida absoluta, los siguientes rubros:
          </p>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Para la cobertura de daños materiales:
              <ul style={{ paddingLeft: "20px", listStyle: "disc", marginTop: "10px" }}>
                <li>Responsabilidad civil a consecuencia de incendio y/o explosión.</li>
                <li>Granizo.</li>
                <li>Robo contenido general y mercaderías.</li>
                <li>Robo de objetos diversos.</li>
                <li>Rotura de maquinarias.</li>
                <li>Equipos electrónicos.</li>
                <li>Combustión espontánea.</li>
                <li>Gastos extraordinarios.</li>
                <li>Falta de frío/cámaras frigoríficas.</li>
                <li>Remoción de escombros.</li>
                <li>Honorarios profesionales.</li>
                <li>Gastos de extinción de incendio.</li>
                <li>No aplicación de infraseguro.</li>
                <li>Cristales.</li>
                <li>Caída de estibas y/o góndolas.</li>
                <li>Daño por agua e inundación.</li>
                <li>Refacciones y/o ampliaciones.</li>
                <li>Ubicaciones innominadas.</li>
                <li>Equipos de contratistas.</li>
                <li>Pérdida de alquileres y/o expensas.</li>
                <li>Nuevas propiedades adquiridas.</li>
              </ul>
            </li>
            <li>
              Este detalle es orientativo y no limitativo, y puede adaptarse a las necesidades de cada uno de los riesgos a cubrir.
            </li>
            <li>Para la cobertura de Interrupción de la explotación (pérdida de beneficios):
              <ul style={{ paddingLeft: "20px", listStyle: "disc", marginTop: "10px" }}>
                <li>Interrupción de accesos.</li>
                <li>Interdependencia.</li>
                <li>Extensión a clientes y proveedores.</li>
              </ul>
            </li>
          </ul>
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

export default PYMES;
