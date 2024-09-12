import React from 'react';
import { Navigation } from '../components/navigation'; // Asegúrate de que tengas el componente Navigation disponible

const AgricolaIntegral = () => {
  return (
    <>
      <Navigation />
      <div id="agricola-integral" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#333" }}>
            Integral Agrícola
          </h1>

          {/* Básica */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Básica</h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Incendio del edificio y del contenido</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> casa principal del asegurado, casa del encargado, puestos, hangares, galpones, garajes, molino de la casa principal y silos.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Esta cobertura ampara los daños causados por:
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>La acción directa o indirecta del fuego, rayo y/o explosión</li>
              <li>Los medios empleados para extinguirlos</li>
              <li>El humo</li>
              <li>Los hechos de tumulto popular, huelga y vandalismo</li>
              <li>El impacto de aeronaves y vehículos terrestres</li>
              <li>Huracán, ciclón y/o tornado y granizo</li>
              <li>Incendio y daños materiales por terremoto (salvo Mendoza, San Juan, Neuquén, La Rioja, y Catamarca; provincias para las cuales deberán solicitar condiciones a la Cía)</li>
            </ul>
            <p style={{ marginBottom: "20px" }}>
              Adicionalmente, esta cobertura incluye:
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>La remoción de escombros hasta el 5% de la suma asegurada por incendio del edificio y del contenido</li>
              <li>Los gastos extras hasta el 10% de la suma asegurada por incendio del edificio y del contenido</li>
            </ul>
          </section>

          {/* Robo del contenido general */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Robo del contenido general</h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Contenido de galpones</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> aquellos que se hallen en el interior de los galpones que pertenezcan al asegurado, con un sublímite para semillas y agroquímicos equivalente al 50% de la suma asegurada para robo del contenido.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Cobertura: pérdidas por robo.
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Robo/Hurto del contenido de la casa principal</strong>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> el mobiliario particular que se halle exclusivamente en el interior de la casa principal y que pertenezca al asegurado, sus familiares y huéspedes.
            </p>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Pérdidas por robo y/o hurto</li>
              <li>La cobertura se limita hasta un 20% de la suma asegurada para relojes de pulsera, máquinas fotográficas, filmadoras, grabadores, objetos de arte, platería, pieles, alhajas, aparatos eléctricos en general, instrumentos científicos, de precisión o de óptica</li>
              <li>Daños causados con motivo del robo o su tentativa, hasta el 15% de la suma asegurada para este rubro</li>
            </ul>
          </section>

          {/* Valores en Caja */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Valores en Caja</h2>
            <p style={{ marginBottom: "20px" }}>
              Esta cobertura ampara la pérdida por desaparición, destrucción, deterioro del dinero, cheques u otros valores, por robo, incendio, rayo o explosión.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Medidas de la prestación: a primer riesgo absoluto.
            </p>
          </section>

          {/* Objetos específicos */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Objetos específicos</h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Bienes asegurados:</strong> TV, audio, video y computadoras. Equipos electrónicos de oficina (e.g., computadoras, impresoras) y de análisis y control (e.g., balanzas electrónicas, medidores de humedad).
            </p>
            <p style={{ marginBottom: "20px" }}>
              Coberturas: pérdidas o daños por incendio, robo y/o hurto, o accidente de los objetos asegurados que se encuentren en la casa principal y/o en la dependencia expresamente indicada, que pertenezcan al asegurado.
            </p>
          </section>

          {/* Responsabilidad civil */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Responsabilidad civil</h2>
            <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
              <li>Daños que se produzcan a personas o cosas de terceros, el titular del seguro, su cónyuge, hijos, dependientes, contratistas y sub-contratistas por el desarrollo de la actividad</li>
              <li>Responsabilidad civil emergente de la operación de maquinarias agrícolas propias o de terceros, durante las operaciones dentro del predio del asegurado o fuera en caminos vecinales, no rutas, hasta 70Km de la ubicación principal del riesgo. Actúa en exceso de cobertura más específica de maquinarias de terceros en caso de que hubiese. Si no hubiere, actuará por sí sola</li>
              <li>Escape de animales sublimitado al 50% del límite de Responsabilidad civil comprensiva</li>
              <li>Suministro de alimentos a invitados</li>
              <li>Uso de armas de fuego, con modalidad en exceso de $100.000 para el caso donde el servicio de vigilancia lo realicen empresas contratadas para tal fin, caso contrario no aplica dicho exceso</li>
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
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#a94442" }}>Maquinarias Agrícolas</h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Coberturas:</strong> las pérdidas o daños a maquinaria agrícola en la explotación, propiedad del asegurado y/o arrendada.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Cobertura para: robo, incendio, accidente, o cualquier otro daño, salvo los siguientes riesgos, excluidos de la cobertura: desgaste, descomposición, daños causados por intencionalidad, vandalismo, daños en el motor por falta de lubricación o del combustible, u otros perjuicios derivados de defectos del material y/o deficiente mantenimiento.
            </p>
            <p style={{ marginBottom: "20px" }}>
              La cobertura se extiende hasta $200.000 por cada evento y por cada uno de los equipos asegurados.
            </p>
          </section>

          <div style={{ textAlign: "center", marginTop:"5rem" }}>
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

export default AgricolaIntegral;
