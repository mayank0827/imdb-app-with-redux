import "./App.css";
import MovieList from "./Components/MovieList";
import MovieDetail from './Components/MovieDetails'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header";
import Favourite from "./Components/Favourite";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./store/FavouriteStore";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MovieList />,
//   },{
//     path: "/movie-detail",
//     element: <MovieDetail />,
//   },
// ]);

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const persistedFavourites = localStorage.getItem('favourites');
    if (persistedFavourites) {
      dispatch(init(JSON.parse(persistedFavourites)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList />
            }
          />
          <Route path="/movie-list" element={<Navigate to={"/"} />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route
            path="/favourite"
            element={
              <Favourite />
            }
          />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;