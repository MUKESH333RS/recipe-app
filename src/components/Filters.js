import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, getRecipes } from '../redux/recipeSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.recipes);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    dispatch(setFilters(newFilters));
    dispatch(getRecipes({ query: 'pizza', ...newFilters })); // Fetch with filters
  };

  return (
    <div className="flex gap-4 mb-4">
      {/* Meal Type Filter */}
      <select
        name="mealType"
        value={filters.mealType}
        onChange={handleFilterChange}
        className="border px-3 py-2 rounded-lg"
      >
        <option value="">All Meals</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      {/* Diet Filter */}
      <select
        name="diet"
        value={filters.diet}
        onChange={handleFilterChange}
        className="border px-3 py-2 rounded-lg"
      >
        <option value="">All Diets</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="keto">Keto</option>
      </select>
    </div>
  );
};

export default Filters;
