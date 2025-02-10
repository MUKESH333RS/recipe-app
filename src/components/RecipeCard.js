import React from 'react';
import './RecipeCard.css';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const { favoriteRecipes } = useSelector(state => state.favorites);

  const isFavorite = favoriteRecipes.some(
    (fav) => fav.recipe.label === recipe.recipe.label
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{recipe.recipe.label}</h3>
      <button
        onClick={handleFavoriteClick}
        className={`mt-2 px-4 py-2 rounded-lg ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300'
        }`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
        <p>{recipe.recipe.cuisineType}</p>
      </button>
    </div>
  );
};

export default RecipeCard;
