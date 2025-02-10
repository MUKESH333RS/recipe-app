// src/pages/Favorites.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import RecipeCard from '../components/RecipeCard';
import './Favorites.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favoriteRecipes);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <h1>Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite recipes added yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe.recipe}
              isFavorite={true}
              onRemove={() => dispatch(removeFavorite(recipe))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
