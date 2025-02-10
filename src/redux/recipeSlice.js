import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../services/api';

export const getRecipes = createAsyncThunk('recipes/getRecipes', async (query) => {
  return await fetchRecipes(query);
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    allRecipes: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.allRecipes = action.payload;
        state.loading = false;
      })
      .addCase(getRecipes.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default recipeSlice.reducer;
