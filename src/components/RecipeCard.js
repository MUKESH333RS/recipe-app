// src/components/RecipeCard.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import './RecipeCard.css';

const RecipeCard = ({ recipe, isFavorite, onRemove }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemove();
    } else {
      dispatch(addFavorite({ recipe }));
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
      <p>{recipe.source}</p>
      <button className="favorite-btn" onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;
