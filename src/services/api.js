import axios from 'axios';

const API_URL = 'https://api.edamam.com/search';
const APP_ID = 'a5de3521';
const APP_KEY = '28f8a20bd893e2740e68d4bbb349b977';

export const fetchRecipes = async (query = 'pizza', mealType = '', diet = '') => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20${
        mealType ? `&mealType=${mealType}` : ''
      }${diet ? `&diet=${diet}` : ''}`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
