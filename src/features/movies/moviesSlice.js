import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '../../api/omdbApi';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ searchTerm, page }, { rejectWithValue }) => {
    try {
      const data = await searchMovies(searchTerm, page);
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

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchTerm: '',
    movies: [],
    totalResults: 0,
    currentPage: 1,
    hasMore: false,
    loading: false,
    error: null,
    watchlist: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    clearMovies(state) {
      ((state.movies = []),
        (state.currentPage = 1),
        (state.totalResults = 0),
        (state.hasMore = false),
        (state.error = null));
    },

    addToWatchlist(state, action) {
      const exists = state.watchlist.find(
        (v) => v.imdbID === action.payload.imdbID
      );
      if (!exists) {
        state.watchlist.push({ ...action.payload, watched: false });
      }
    },

    removeFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter(
        (m) => m.imdbID !== action.payload
      );
    },

    toggleWatched(state, action) {
      const movie = state.watchlist.find((m) => m.imdbID === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { movies, totalResults, page } = action.payload;
        if (page === 1) {
          state.movies = movies;
        } else {
          state.movies = [...state.movies, ...movies];
        }
        state.totalResults = totalResults;
        state.currentPage = page;
        state.hasMore = state.movies.length < totalResults;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const {
  setSearchTerm,
  clearMovies,
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched,
} = moviesSlice.actions;
export default moviesSlice.reducer;
