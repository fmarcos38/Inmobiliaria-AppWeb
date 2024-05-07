import React, { useState, useEffect } from 'react';
import './estilos.css'; // Archivo CSS para los estilos

const Favorito = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Cargar favoritos desde localStorage al cargar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  // Función para alternar el estado de favorito
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter(id => id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={toggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default Favorito;
