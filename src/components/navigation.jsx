import React, { useEffect } from "react";

export const Navigation = (props) => {
  useEffect(() => {
    const closeMenu = () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("in")) {
        navbarCollapse.classList.remove("in");
      }
    };

    const menuLinks = document.querySelectorAll(".nav a");

    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            style={{'marginLeft':14}}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/img/logoAznar.jpg" alt="Logo Aznar" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
