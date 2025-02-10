import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer
  }
});

export default store; // Make sure store is exported as default
