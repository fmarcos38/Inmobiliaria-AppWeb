import React from 'react';
import './estilos.css'; // Archivo CSS para los estilos del mapa

const Map = ({ address }) => {
  // Función para generar la URL de Google Maps con la dirección proporcionada
  const generateMapUrl = () => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDTWvXLWa60GstsRFuNgXS1mZUAOKFydIo';
    const encodedAddress = encodeURIComponent('Diagonal Pueyrredon 3291');
    return `${baseUrl}&q=${encodedAddress}`;
  };

  return (
    <div className="map-container">
      <iframe
        title="Map"
        className="map"
        src={generateMapUrl()}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
