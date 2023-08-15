import { lazy, Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
import Login from "../pages/Login";
import News from "../pages/News";
import Project from "../pages/Project";
import Register from "../pages/Register";
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
    path: "/register",
    name: "Se connecter",
    element: <Register />,
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
    element: (
      <Suspense fallback={<LoadingPage />}>
        <News />
      </Suspense>
    ),
  },
  {
    path: "/projets",
    name: "Projet",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Project />
      </Suspense>
    ),
  },
  {
    path: "/services",
    name: "Services",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Project />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    name: "Contact",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "Actualités",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <News />
      </Suspense>
    ),
  },
];
export default routes;
