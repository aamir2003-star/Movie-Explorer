import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '../../api/omdbApi';

const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ searchTerm, page, type }, { rejectWithValue }) => {
    try {
      const data = await searchMovies(searchTerm, page, type);
      if (data.Response === 'False') {
        return rejectWithValue(data.Error);
      }
      return {
        movies: data.Search,
        totalResults: parseInt(data.totalResults, 10),
        page,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export default fetchMovies;