import React,{useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "bootstrap-icons/font/bootstrap-icons.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="bi bi-arrow-right-circle-fill" style={{ fontSize: "24px", color: "#333" }}></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="bi bi-arrow-left-circle-fill" style={{ fontSize: "24px", color: "#333" }}></i>
    </div>
  );
};

export const InsuranceSlider = (props) => {

  useEffect(() => {
    const slickTrack = document.querySelector('.slick-track');
    if (slickTrack) {
      slickTrack.style.marginTop = '50px' 
    }
  }, []); 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="insurance-slider" style={{ padding: "120px 0", backgroundColor: "#fff", textAlign: "center" }}>
      <style>
        {`
          .slick-slide {
            height: auto !important; 
          }
        `}
      </style>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      
        <Slider {...settings}>
          {props.data && props.data.companies && props.data.companies.length > 0
            ? props.data.companies.map((company, index) => (
                <div key={index} style={{ padding: "0 15px" }}>
                  <img
                    src={company.logo}
                    alt={`Logo de la compañía aseguradora ${company.name}`}
                    className="img-fluid shadow-sm rounded"
                    style={{
                      maxWidth: "150px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </div>
              ))
            : <div style={{ textAlign: "center", width: "100%", padding: "30px" }}>Cargando...</div>}
        </Slider>
      </div>
    </div>
  );
};
