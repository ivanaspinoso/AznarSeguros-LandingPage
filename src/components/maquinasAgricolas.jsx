import React from 'react';
import { Navigation } from '../components/navigation'; // Asegúrate de que tengas el componente Navigation disponible

const MaquinasAgricolas = () => {
  return (
    <>
      <Navigation />
      <div id="maquinas-agricolas" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#333" }}>
            Maquinarias Agrícolas
          </h1>

          <p style={{ marginBottom: "20px" }}>
            Esta cobertura es la que ampara a la maquinaria y/o equipos desarrollando su función específica sobre la superficie terrestre y en tierra firme, incluyendo su eventual tránsito y transporte terrestre desde o hacia los lugares de trabajo y dentro de los mismos (siempre que se efectúen por sus propios medios y/o unidades propias del asegurado) y/o depósito terrestre. Por consiguiente, en aquellos casos en que se requiera exclusivamente cobertura durante el tránsito terrestre, de transporte y/o Efectúa en depósito, el seguro deberá ser gestionado ante los departamentos respectivos, a saber:
          </p>
          
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Tránsito de maquinaria con tracción, en el Departamento Automóviles.</li>
            <li>Tránsito sobre un vehículo de carga, en el Departamento Transportes.</li>
            <li>Efectúa en depósitos en los Departamentos Incendio y/o Robo.</li>
          </ul>

          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Cobertura</h2>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Daños Parciales y/o totales por Incendio</li>
            <li>Daños Parciales y/o totales por Accidente</li>
            <li>Daños Parciales y/o totales por Robo y/o Hurto</li>
          </ul>

          <p style={{ marginBottom: "20px" }}>
            Se cubre la maquinaria y equipo, a partir del momento en que se encuentra efectuando su función específica sobre la superficie terrestre y en tierra firme, incluyendo su eventual tránsito terrestre y transporte terrestre así como también depósito terrestre.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Los bienes considerados en el Listado de Equipo de Contratista quedan cubiertos contra pérdidas y/o daños materiales externos, siempre que tales pérdidas y/o daños se produzcan en forma accidental, súbita e imprevista y que se haga necesaria una reparación y/o reposición como consecuencia directa de cualquier causa no excluida en la presente póliza.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Combinaciones de Cobertura:</h2>
          <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
            <li>Todo riesgo (Daños parciales y/o totales por Incendio, Accidente, Robo y/o Hurto).</li>
            <li>Daños totales únicamente (Daños totales por Incendio, Accidente, Robo y/o Hurto).</li>
            <li>Responsabilidad Civil hacia terceros.</li>
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

export default MaquinasAgricolas;
