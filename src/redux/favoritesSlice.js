import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteRecipes: [] // Stores favorite recipes
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteRecipes.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteRecipes = state.favoriteRecipes.filter(
        recipe => recipe.recipe.label !== action.payload.recipe.label
      );
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
