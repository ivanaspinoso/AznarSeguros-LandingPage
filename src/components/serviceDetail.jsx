import React from 'react';
import { useParams } from 'react-router-dom';
import AutosService from '../components/autosService';  // Asegúrate de que esté correctamente importado
import CombinadoFamiliar from '../components/combinadoFamiliar';
import VidaService from '../components/VidaService';
import AgricolaService from './agricolaService';  // Asegúrate de que esté correctamente importado
import AgricolaIntegral from './agricolaIntegral';
import IntegralComercio from './integralComercio';
import MaquinasAgricolas from './maquinasAgricolas';
import PYMES from './pymes';
import Transporte from './transporte';
import GrandesEmpresas from './grandesEmpresas';
import Flotas from './flotas';
import Caucion from './caucion';

const ServiceDetail = () => {
  const { id } = useParams();

  if (id === 'autos') {
    return <AutosService />;
  }

  if (id === 'combinadofamiliar') {
    return <CombinadoFamiliar />;
  }

  if (id === 'vida') {
    return <VidaService />;
  }

  if (id === 'agricola') {
    return <AgricolaService />;
  }

  if (id === 'integralagricola') {
    return <AgricolaIntegral />;
  }

  if (id === 'integralcomercio') {
    return <IntegralComercio />;
  }

  if (id === 'maquinasagricolas') {
    return <MaquinasAgricolas />;
  }

  if (id === 'pymes') {
    return <PYMES />;
  }

  if (id === 'transporte') {
    return <Transporte />;
  }

  if (id === 'grandesempresas') {
    return <GrandesEmpresas />;
  }

  if (id === 'flotas') {
    return <Flotas />;
  }

  if (id === 'caucion') {
    return <Caucion />;
  }



  return <div>Servicio no encontrado</div>;
};

export default ServiceDetail;
