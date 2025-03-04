import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useReducer } from "react";
import { themeInitialState, themeReducer } from "./store/theme/reducer";
import {
  favoritesInitialState,
  favoritesReducer,
} from "./store/favorites/reducer";
import { ThemeContext } from "./store/theme/context";
import { FavoritesContext } from "./store/favorites/context";
import { teamsInitialState, teamsReducer } from "./store/teams/reducer";
import { TeamsContext } from "./store/teams/context";

function App() {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    localStorage.getItem("theme") ?? themeInitialState
  );
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    favoritesInitialState
  );
  const [teamsState, teamsDispatch] = useReducer(
    teamsReducer,
    teamsInitialState
  );

  const themeContextValue = {
    themeState,
    themeDispatch,
  };

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  const teamsContextValue = {
    teamsState,
    teamsDispatch,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <FavoritesContext.Provider value={favoritesContextValue}>
        <TeamsContext.Provider value={teamsContextValue}>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </TeamsContext.Provider>
      </FavoritesContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
