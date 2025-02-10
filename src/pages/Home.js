import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../redux/recipeSlice';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Recipe App</h1>
      {loading && <p>Loading recipes...</p>}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {allRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
