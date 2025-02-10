import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../services/api';

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async ({ query, mealType, diet }) => {
    return await fetchRecipes(query, mealType, diet);
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    allRecipes: [],
    loading: false,
    filters: {
      mealType: '',
      diet: ''
    }
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  },
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

export const { setFilters } = recipeSlice.actions;
export default recipeSlice.reducer;
