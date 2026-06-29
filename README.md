# 🎬 Movie Explorer

Movie Explorer is a modern, responsive web application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It allows users to log in, search for their favorite movies and TV shows via the **OMDb API**, view detailed listings with smooth infinite scrolling, and manage a personalized watchlist (categorized into Movies and TV Shows) with custom watch states.

---

## ✨ Features

- **🔑 Local Authentication**: A clean, local session login that personalizes the user experience using Redux state management.
- **🔍 Content Discovery**: Real-time searching of movies and TV shows using the OMDb API.
- **🏷️ Smart Filtering**: Effortlessly switch search contexts between **Movies** and **TV Shows** with tailored interfaces.
- **🔄 Infinite Scroll**: Smooth, automatic loading of additional results as you scroll down the page, powered by `react-infinite-scroll-component`.
- **🍿 Watchlist Management**:
  - Add/remove items directly from the search cards.
  - Toggle between **Movies** and **TV Shows** watchlist tabs.
  - Mark entries as **Watched** (which applies a visual line-through and opacity state) or active.
- **🎨 Modern Dark UI**: Sleek dark-mode aesthetic built using Tailwind CSS v4, containing clean spacing, modern typography, glassmorphism-inspired components, and subtle hover animations.
- **⏳ Skeleton Loading**: Premium placeholder cards (`SkeletonCard`) render while fetching API resources.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) & [Vite](https://vite.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4.0](https://tailwindcss.com/) (using the `@tailwindcss/vite` bundler integration)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Infinite Scrolling**: [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)

---

## 📂 Project Structure

```text
src/
├── api/
│   └── omdbApi.js          # API client configured for OMDb queries
├── components/
│   ├── common/
│   │   ├── Button.jsx      # Generic button component
│   │   └── SkeletonCard.jsx# Skeleton loader placeholder
│   ├── Header.jsx          # Main navigation bar and user logout control
│   ├── LoginForm.jsx       # Simple user onboarding/login form
│   ├── MovieCard.jsx       # Card displaying thumbnail, title, year, and watchlist actions
│   ├── MovieGrid.jsx       # Grid wrapper displaying lists with infinite scroll
│   ├── SearchBar.jsx       # Query inputs and category filters
│   ├── Watchlist.jsx       # Watchlist tab container (Movies vs TV shows)
│   └── WatchlistItem.jsx   # List item for watchlist showing check/remove features
├── features/
│   ├── auth/
│   │   └── authSlice.js    # Authentication Redux Slice (login/logout states)
│   ├── movies/
│   │   └── moviesSlice.js  # Redux slice for search filters, movies lists, & watchlists
│   └── thunk/
│       └── movieThunk.js   # Async Thunk handling paginated API search actions
├── pages/
│   ├── Discover.jsx        # Landing page for searching & browsing media
│   └── WatchlistPage.jsx   # Page hosting the user's Watchlist components
├── routes/
│   └── AppContet.jsx       # Application router/route mapping
├── store/
│   └── index.js            # Redux store configuration
├── App.jsx                 # Entry logic routing to Login or main App Layout
├── index.css               # Global Tailwind CSS imports
└── main.jsx                # Application root rendering point
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/aamir2003-star/Movie-Explorer.git
cd Movie-Explorer
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your OMDb API key:
```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```
*(You can obtain a free or paid API key from [OMDb API](http://www.omdbapi.com/apikey.aspx))*

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
This builds the application for production in the `dist` folder.

---

## 📄 License

This project is open-source and available under the MIT License.
