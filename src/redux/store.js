import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer
  }
});
