import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../redux/recipeSlice';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading, filters } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes({ query: 'pizza', ...filters })); // Load default recipes with filters
  }, [dispatch, filters]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe App</h1>
      <SearchBar /> {/* Search Component */}
      <Filters /> {/* Filter Component */}

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
