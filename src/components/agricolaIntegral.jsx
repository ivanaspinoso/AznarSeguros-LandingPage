import React from 'react';
import { Navigation } from '../components/navigation';

const AgricolaIntegral = () => {
  return (
    <>
      <Navigation />
      <div
        id="agricola-integral"
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
            Integral Agrícola
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

          {/* Básica */}
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
            <p style={{ marginBottom: "20px" }}>
              <strong>Incendio del edificio y del contenido</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> casa principal del asegurado, casa del encargado, puestos, hangares, galpones, garajes, molino de la casa principal y silos.
            </p>
            <p style={{ marginBottom: "20px" }}>Esta cobertura ampara los daños causados por:</p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>La acción directa o indirecta del fuego, rayo y/o explosión</li>
              <li>Los medios empleados para extinguirlos</li>
              <li>El humo</li>
              <li>Los hechos de tumulto popular, huelga y vandalismo</li>
              <li>El impacto de aeronaves y vehículos terrestres</li>
              <li>Huracán, ciclón y/o tornado y granizo</li>
              <li>Incendio y daños materiales por terremoto (excepto en algunas provincias)</li>
            </ul>
            <p style={{ marginBottom: "20px" }}>Adicionalmente, esta cobertura incluye:</p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>La remoción de escombros hasta el 5% de la suma asegurada</li>
              <li>Gastos extras hasta el 10% de la suma asegurada</li>
            </ul>
          </section>

          {/* Robo del contenido general */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Robo del contenido general
            </h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Contenido de galpones</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> aquellos que se hallen en el interior de los galpones que pertenezcan al asegurado.
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Pérdidas por robo</li>
              <li>Limitaciones en algunos bienes específicos</li>
              <li>Daños causados con motivo del robo</li>
            </ul>
            <p style={{ marginBottom: "20px" }}>
              <strong>Robo/Hurto del contenido de la casa principal</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> el mobiliario particular que se halle exclusivamente en el interior de la casa principal y que pertenezca al asegurado, sus familiares y huéspedes.
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Pérdidas por robo y/o hurto</li>
              <li>Limitación hasta un 20% de la suma asegurada para ciertos bienes</li>
              <li>Daños causados con motivo del robo o su tentativa</li>
            </ul>
          </section>

          {/* Valores en Caja */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Valores en Caja
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Esta cobertura ampara la pérdida por desaparición, destrucción, deterioro del dinero, cheques u otros valores, por robo, incendio, rayo o explosión.
            </p>
            <p style={{ marginBottom: "20px" }}>Medidas de la prestación: a primer riesgo absoluto.</p>
          </section>

          {/* Objetos específicos */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Objetos específicos
            </h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> TV, audio, video y computadoras. Equipos electrónicos de oficina y de análisis.
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Coberturas:</strong> pérdidas o daños por incendio, robo y/o hurto, o accidente de los objetos asegurados que se encuentren en la casa principal y/o en la dependencia expresamente indicada.
            </p>
          </section>

          {/* Responsabilidad civil */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Responsabilidad civil
            </h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Daños a personas o cosas de terceros relacionados con la actividad agrícola</li>
              <li>Responsabilidad civil por operación de maquinaria</li>
              <li>Escape de animales sublimitado al 50% del límite de Responsabilidad civil comprensiva</li>
              <li>Suministro de alimentos a invitados</li>
              <li>Uso de armas de fuego, con modalidad en exceso de $100.000 para el caso donde el servicio de vigilancia lo realicen empresas contratadas para tal fin</li>
              <li>Guarda de vehículos a título no oneroso</li>
              <li>Transporte de bienes, sublimitado al 35% del límite asegurado. Excluye animales</li>
            </ul>
            <p style={{ marginBottom: "20px" }}>
              No se considerarán terceros a:
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Los contratistas y/o subcontratistas y sus dependientes</li>
              <li>El cónyuge y los parientes del asegurado hasta el tercer grado de consanguinidad o afinidad</li>
              <li>Las personas en relación de dependencia laboral con el asegurado en tanto el evento se produzca en oportunidad o con motivo del trabajo</li>
            </ul>
          </section>

          {/* Maquinarias Agrícolas */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Maquinarias Agrícolas
            </h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Coberturas:</strong> pérdidas o daños a maquinaria agrícola en la explotación.
            </p>
          </section>

          {/* Daños por agua al contenido */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Daños por agua al contenido
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Se cubren las pérdidas o daños causados a los bienes objeto del seguro por filtraciones, derrames, desbordes o escapes de agua a raíz de falla o deficiencia en la provisión de energía.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Para Silos y Galpones aplicará un deducible por acontecimiento.
            </p>
            <p style={{ marginBottom: "20px" }}>Modalidad de la prestación: a primer riesgo absoluto.</p>
          </section>

          {/* Cristales */}
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#a94442",
              }}
            >
              Cristales
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Se cubren los daños que afectaren cristales, vidrios, espejos y demás piezas vítreas o similares, instaladas en posición vertical, como consecuencia de su rotura o rajadura, incluyendo los gastos normales de colocación, por el valor que corresponda a cada pieza y hasta el límite asegurado para esta cobertura, siempre que estén instaladas en el lugar especificado para cada una.
            </p>
            <p style={{ marginBottom: "20px" }}>Modalidad de la prestación: a primer riesgo absoluto.</p>
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

export default AgricolaIntegral;
