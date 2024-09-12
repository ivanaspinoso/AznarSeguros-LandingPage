import React from 'react';
import { Navigation } from '../components/navigation'; // Asegúrate de que tengas el componente Navigation disponible

const TerminosYCondiciones = () => {
  return (
    <>
      <Navigation />
      <div id="terminos-y-condiciones" style={{ backgroundColor: "#f6f6f6", padding: "50px 0", marginTop: "80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "5rem", paddingRight: "5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#333" }}>
            Términos y Condiciones
          </h1>

          <p style={{ fontSize: "1.75rem", marginBottom: "20px", color: "#333" }}>
            Los términos y condiciones aplicables a la utilización de esta página son los siguientes: <strong>AZNAR Seguros</strong> se reserva el derecho de modificar los términos y condiciones en cualquier momento. Las fotos y dibujos que se ilustran en la página <strong>www.aznarseguros.com.ar</strong> son meramente ilustrativas.
          </p>
          <p style={{ fontSize: "1.75rem", marginBottom: "20px", color: "#333" }}>
            Al utilizar la página <strong>www.aznarseguros.com.ar</strong>, Usted declara y reconoce que ha leído y comprendido en su totalidad los términos y condiciones descriptos aquí, y acepta los presentes términos y condiciones en su totalidad. Queda prohibida la utilización de la página <strong>www.aznarseguros.com.ar</strong> y/o la información allí suministrada por personas que carezcan de capacidad legal para contratar los productos y/o servicios ofrecidos en la misma. <strong>AZNAR Seguros</strong> no garantiza en forma alguna que no haya otros productos y/o otros valores en el mercado.
          </p>
          <p style={{ fontSize: "1.75rem", marginBottom: "20px", color: "#333" }}>
           <strong>AZNAR Seguros</strong> no garantiza la exactitud en la información contenida en <strong>www.aznarseguros.com.ar</strong> que puede contener datos inexactos, incorrectos y/o errores sustanciales o tipográficos. <strong>AZNAR Seguros</strong> no es propietario de los bienes y servicios que se publicitan, ni garantiza en forma alguna dichos bienes y servicios, ni garantiza al usuario respecto de la existencia, ni sobre ningún otro aspecto de tales bienes y servicios. La disponibilidad de los productos publicados en <strong>www.aznarseguros.com.ar</strong> están sujetos a la aceptación de las respectivas compañías aseguradoras. Los precios definitivos como la posibilidad real de contratación surgirá del resultado de la negociación que realice la firma <strong>AZNAR Seguros</strong> entre el interesado y la compañía.
          </p>
        </div>
      </div>
    </>
  );
};

export default TerminosYCondiciones;
