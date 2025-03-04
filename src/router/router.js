import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Heroes from "../pages/Heroes";
import Hero from "../pages/Hero";
import Favorites from "../pages/Favorites";
import Teams from "../pages/Teams";
import Page404 from "../pages/Page404";

export const routes = [
  {
    id: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "heroes",
    path: "/heroes",
    element: <Heroes />,
  },
  {
    id: "hero-stats",
    path: "/heroStats/:id",
    element: <Hero />,
  },
  {
    id: "favorites",
    path: "/favorites",
    element: <Favorites />,
  },
  {
    id: "teams",
    path: "/teams",
    element: <Teams />,
  },
  {
    id: "404",
    path: "*",
    element: <Page404 />,
  },
];

export const router = createBrowserRouter(routes);
