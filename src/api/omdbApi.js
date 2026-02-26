import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (searchTerm, page = 1, type='movie') => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: searchTerm,
      type: type,
      page,
    },
  });
  return response.data;
};

