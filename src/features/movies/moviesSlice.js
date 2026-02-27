import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '../../api/omdbApi';
import fetchMovies from '../thunk/movieThunk';

// export const fetchMovies = createAsyncThunk(
//   'movies/fetchMovies',
//   async ({ searchTerm, page, type }, { rejectWithValue }) => {
//     try {
//       const data = await searchMovies(searchTerm, page, type);
//       if (data.Response === 'False') {
//         return rejectWithValue(data.Error);
//       }
//       return {
//         movies: data.Search,
//         totalResults: parseInt(data.totalResults, 10),
//         page,
//       };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchTerm: '',
    searchType: 'movie', 
    movies: [],
    totalResults: 0,
    currentPage: 1,
    hasMore: false,
    loading: false,
    error: null,
    watchlist: [],
    tvWatchList: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchType(state, action) {
      state.searchType = action.payload;
    },
    clearMovies(state) {
      state.movies = [];
      state.currentPage = 1;
      state.totalResults = 0;
      state.hasMore = false;
      state.error = null;
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

    addToTvWatchList(state, action) {
      const existstvShow = state.tvWatchList.find(
        (v) => v.imdbID === action.payload.imdbID
      );
      if (!existstvShow) {
        state.tvWatchList.push({ ...action.payload, watched: false });
      }
    },
    removeFromTvWatchList(state, action) {
      state.tvWatchList = state.tvWatchList.filter(
        (m) => m.imdbID !== action.payload
      );
    },
    toggleTvWatched(state, action) {
      const tvShow = state.tvWatchList.find((m) => m.imdbID === action.payload);
      if (tvShow) {
        tvShow.watched = !tvShow.watched;
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
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const {
  setSearchTerm,
  setSearchType,
  clearMovies,
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched,
  addToTvWatchList,
  removeFromTvWatchList,
  toggleTvWatched,
} = moviesSlice.actions;
export default moviesSlice.reducer;
