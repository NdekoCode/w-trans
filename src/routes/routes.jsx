import { lazy, Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
import About from "../pages/About";
import Assainissement from "../pages/Assainissement";
import Cards from "../pages/Cards";
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));
import Login from "../pages/Login";
import News from "../pages/News";
import Partners from "../pages/Partners";
import Project from "../pages/Project";
import Recyclage from "../pages/Recyclage";
import Services from "../pages/Services";

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
    path: "/about",
    name: "A propos",
    element: <About />,
  },
  {
    path: "/partners",
    name: "Partenaires",
    element: <Partners />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
    children: [
      { path: "/", name: "Ventes pavés", element: <Cards /> },
      { path: "/", name: "Assainissement", element: <Cards /> },
    ],
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
  {
    path: "/services/recyclage",
    name: "Recyclage",
    element: <Recyclage />,
  },
  {
    path: "/services/assainissement",
    name: "Assainissement",
    element: <Assainissement />,
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
    path: "/about",
    name: "A propos",
    element: <About />,
    children: [
      {
        path: "/about",
        name: "Qui somme nous",
        element: <About />,
      },
      {
        path: "/partners",
        name: "partenaires",
        element: <Partners />,
      },
    ],
  },
  {
    path: "/news",
    name: "Actualités",
    element: <News />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
    children: [
      {
        path: "/services/recyclage",
        name: "Recyclage",
        element: <Project />,
      },
      {
        path: "/services/assainissement",
        name: "Assainissement",
      },
    ],
  },
  {
    path: "/projets",
    name: "Projet",
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
