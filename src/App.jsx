import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";
import ServiceDetail from "./components/serviceDetail"; 
import TerminosYCondiciones from "./components/terminosycondiciones";
import {InsuranceSlider} from "./components/insuranceSlider";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
    <Routes>
      <Route path="/" element={
        <div>
          <Navigation />
          <Header data={landingPageData.Header} />
          <Features data={landingPageData.Features} />
          <About data={landingPageData.About} />
         <InsuranceSlider data={landingPageData.InsuranceSlider} />  
          <Gallery data={landingPageData.Gallery} />
          <Contact data={landingPageData.Contact} />
        </div>
      } />
      <Route path="/services/:id" element={<ServiceDetail data={JsonData.Gallery} />} />
      <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />

    </Routes>
  </Router>
  
  );
};

export default App;
