import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const { favoriteRecipes } = useSelector(state => state.favorites);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Recipes</h1>

      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet. Add some!</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favoriteRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
