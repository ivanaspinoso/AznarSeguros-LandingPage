import React from "react";
import { Navigation } from "../components/navigation";

const AutosService = () => {
  return (
    <>
      <Navigation />
      <div
        id="autos"
        style={{
          backgroundColor: "#f6f6f6",
          padding: "50px 0",
          marginTop: "80px",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  textAlign: "center",
                  color: "#333",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  position: "relative",
                  paddingBottom: "10px",
                }}
              >
                Coberturas de Seguro de Autos
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
              </h2>

              {/* Todo Riesgo */}
              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Todo Riesgo
                </h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>
                    Daños parciales por accidente con franquicia fija o variable (desde 1% al 10%) (tienen diferencias para vehículos nacionales o para vehículos importados).
                  </li>
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
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Todo Riesgo Franquicia Variable
                </h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>
                    Daños parciales por accidente con franquicia variable del 4% y del 6% de la suma asegurada del 0 Km.
                  </li>
                  <li>Cobertura de cristales, incluyendo luneta y parabrisas por cualquier motivo, sin tope y sin límite.</li>
                  <li>Daños parciales por granizo sin límite con franquicia para autos nacionales y para autos importados.</li>
                  <li>Robo y/o hurto total y parcial sin franquicia.</li>
                  <li>Destrucción total y parcial por incendio sin franquicia.</li>
                  <li>Destrucción total por accidente.</li>
                  <li>Daños por intento de robo: cobertura a consolas, vidrios y cerraduras con limite.</li>
                  <li>Responsabilidad Civil limitada.</li>
                </ul>
                <p style={{ marginBottom: "10px" }}>
                  Los vehículos 0 Km cuentan con las siguientes coberturas y beneficios especiales:
                </p>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>Reposición del vehículo a valor de un 0 Km, durante dos años.</li>
                  <li>Cobertura de daños parciales sin franquicia en caso de robo total y posterior recupero del vehículo.</li>
                  <li>Cobertura de cristales de cualquier tipo, sin tope y sin límite.</li>
                  <li>Reposición a nuevo de neumáticos por 1 año prorrogable automáticamente por 12 meses más al renovarse la póliza.</li>
                </ul>
              </div>

              {/* Cobertura contra Terceros */}
              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Cobertura contra Terceros
                </h3>
                <div style={{ marginBottom: "10px" }}>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#a94442",
                    }}
                  >
                    Terceros Completo
                  </h4>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                    <li>Cobertura de daños parciales sin franquicia en caso de robo total y posterior recupero del vehículo.</li>
                    <li>Cobertura de cristales de cualquier tipo, sin tope y sin límite (incluye luneta y parabrisas).</li>
                    <li>Destrucción total al 80% en función del costo de la reparación del vehículo considerando una antiguedad del vehículo de hasta 10 años.</li>
                    <li>Y además mantenemos todas las coberturas y beneficios adicionales vigentes en el plan Terceros completos.</li>
                  </ul>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#a94442",
                    }}
                  >
                    Cobertura Terceros Completo
                  </h4>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                    <li>Robo y/o hurto total y parcial.</li>
                    <li>Destrucción total y parcial por incendio.</li>
                    <li>Daños por intento de robo: cobertura a consolas, vidrios y cerraduras.</li>
                    <li>Destrucción total por accidentes.</li>
                    <li>Responsabilidad Civil limitada.</li>
                  </ul>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#a94442",
                    }}
                  >
                    Cobertura Terceros Completo Clásico
                  </h4>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                    <li>Robo y/o hurto total.</li>
                    <li>Robo y/o hurto parcial al amparo del robo total.</li>
                    <li>Destrucción total y parcial por incendio.</li>
                    <li>Destrucción total por accidentes.</li>
                    <li>Responsabilidad Civil limitada.</li>
                  </ul>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#a94442",
                    }}
                  >
                    Cobertura Terceros C 1
                  </h4>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                    <li>Robo y/o hurto total y parcial.</li>
                    <li>Destrucción total y parcial por incendio.</li>
                    <li>Daños por intento de robo: cobertura a consolas, vidrios y cerraduras.</li>
                    <li>Responsabilidad Civil limitada.</li>
                  </ul>
                </div>
              </div>

              {/* Servicios y Beneficios */}
              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Servicios y Beneficios
                </h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>Servicios 24 horas: Atención integral en Argentina y países limítrofes cuando más lo necesita, durante las 24 horas mediante un simple llamado telefónico.</li>
                  <li>Límites y condiciones del servicio de asistencia Autos.</li>
                  <li>Límites y condiciones del servicio de asistencia Vehículos Pesados.</li>
                  <li>Asistencia mecánica y remolque: Lo asiste en reparaciones de mecánica ligera y/o remolque.</li>
                  <li>Honorarios por gestoría: Le brinda respuesta y ahorro de tiempo en los trámites ante la compañía del tercero.</li>
                  <li>Asesoramiento legal: Lo asesora telefónicamente respondiéndole consultas de índole legal.</li>
                  <li>Asistencia módica y en viajes: Ante una emergencia, dispondrá de servicio de ambulancia y, si estando de viaje su auto se avería, reintegrará sus gastos de hospedaje, entre otros servicios.</li>
                  <li>Auto sustituto: En caso de robo o hurto total o destrucción total del vehículo asegurado cubiertos por la póliza pone a disposición del asegurado un auto durante cinco días y 500 km. libres.</li>
                </ul>
              </div>

              {/* Beneficios */}
              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Beneficios
                </h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>Valor de reposición: pagamos los siniestros al valor de reposición en pólizas de vigencia mensual. Esta condición, permite a nuestros asegurados recuperar el valor de venta al público al contado en plaza u obtener un vehículo de igual marca, modelo y características al asegurado, en caso de pérdida total, robo o hurto de su auto.</li>
                  <li>Cuando la póliza no es de vigencia mensual, ofrecemos cláusulas de adecuación automática de la suma asegurada durante la vigencia de la póliza, de hasta el 20%, 30% y 50% de la suma prevista al momento de la contratación.</li>
                  <li>Cobertura de daños ocasionados como consecuencia de robo total: en caso de robo total y posterior recupero del vehículo, los daños estarán cubiertos. Este beneficio tendrá vigencia contratando la cobertura Terceros Completo Premium o el Plan 0km.</li>
                  <li>Cobertura de cristales: incluye la reposición de los cristales de cualquier tipo, sin tope y sin límite. Este beneficio tendrá vigencia contratando la cobertura Terceros Completo Premium o el Plan 0km.</li>
                  <li>Robo de neumático: indemnizaremos a valor de reposición a nuevo el primer robo de neumático, sin aplicar depreciación.</li>
                  <li>Cobertura de daños por intento de robo: para los productos Terceros Completo Premium o el Plan 0km brindamos cobertura de vidrios laterales, luneta, parabrisa, consolas y cerraduras sin tope ni límite por evento.</li>
                  <li>Bonificación por no siniestralidad de hasta un 20%: le otorgamos 10% de descuento después del primer año, 15% al finalizar el segundo y 20% luego del tercero al no registrar siniestros.</li>
                  <li>Extensión de cobertura automática en Países Limítrofes: sin costo ni previo aviso, durante toda la vigencia de la póliza.</li>
                  <li>Representación en países del Cono Sur: Chile, Bolivia, Perú, Brasil, Paraguay y Uruguay, con un límite de Responsabilidad Civil.</li>
                  <li>Determinación de destrucción total cuando el costo de reparación supera el 80% del valor del vehículo: cuando el vehículo asegurado tiene una antigüedad menor a 5 años (*) al momento del siniestro y la suma asegurada es mayor a un monto establecido en vehículos nacionales y otro en vehículos importados se considera que existe destrucción total cuando el costo de reparación y los repuestos es mayor al 80% del valor de un vehículo de igual marca, modelo y características en el mercado. (*) Para el producto Terceros Completo Premium la antigüedad se extiende hasta 10 años.</li>
                  <li>Tarjeta Personal de Seguros: conjuntamente con la póliza, se entrega una tarjeta plástica que acredita la contratación del seguro de responsabilidad civil obligatoria requerido para circular.</li>
                </ul>
              </div>

              {/* Prevención */}
              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#a94442",
                  }}
                >
                  Prevención
                </h3>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>Conduzca con las luces bajas encendidas durante el día.</li>
                  <li>Utilice el cinturón de seguridad.</li>
                  <li>Evite el uso del celular mientras conduce.</li>
                  <li>Recuerde no llevar elementos sueltos en el vehículo.</li>
                  <li>Los niños deben ir sentados en el asiento trasero.</li>
                  <li>Respete las velocidades máximas de conducción en calles, avenidas, rutas y autopistas.</li>
                  <li>Si ha tomado alcohol, evite conducir.</li>
                  <li>Consejos para el manejo nocturno.</li>
                  <li>Mantenga una distancia de seguimiento prudente.</li>
                </ul>
                <p>
                  Elementos de seguridad a llevar en el vehículo:
                </p>
                <ul style={{ paddingLeft: "20px", listStyle: "disc", marginBottom: "20px" }}>
                  <li>Dos balizas portátiles triangulares retrorreflectoras. En caso de circular en ruta las balizas deben colocarse 75 metros antes y 75 metros después del vehículo. En autopistas, como la circulación posee un solo sentido y las velocidades son mayores, ambas balizas deben colocarse antes del auto: la primera a 150 metros y la segunda a 75 metros del vehículo.</li>
                  <li>Un matafuego que deberá ubicarse al alcance del conductor, dentro del habitáculo. El matafuego debe estar fabricado, mantenido y con un control de carga periódico conforme a las especificaciones de las normas IRAM. Los automóviles y camionetas de uso mixto, con peso bruto total hasta 1.500 kg. llevarán como mínimo 1 matafuego de 1 kg. de capacidad, con indicador de presión de carga.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutosService;
