import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{recipe.recipe.label}</h3>
    </div>
  );
};

export default RecipeCard;
