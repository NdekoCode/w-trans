import { lazy, Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
import Login from "../pages/Login";
import News from "../pages/News";
import Project from "../pages/Project";
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    path: "/",
    name: "Acceuil",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
  {
    path: "/projets",
    name: "Projet",
    element: <Project />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Home />,
  },
  {
    path: "/login",
    name: "Se connecter",
    element: <Login />,
  },
  {
    path: "/news",
    name: "Actualités",
    element: <News />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
];
export const navbarRouter = [
  {
    path: "/",
    name: "Acceuil",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/news",
    name: "Actualités",
    element: <News />,
  },
  {
    path: "/projets",
    name: "Projet",
    element: <Project />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Project />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
  {
    path: "Actualités",
    element: <News />,
  },
];
export default routes;
