import { lazy } from "react";
import { Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
import About from "../pages/About";
import Cards from "../pages/Cards";
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));
import Login from "../pages/Login";
import News from "../pages/News";
import Partners from "../pages/Partners";
import Project from "../pages/Project";
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
    path: "partners",
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
    path: "/login",
    name: "Se connecter",
    element: <Login />,
  },
  {
    path: "Actualités",
    element: <News />,
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
  },
  {
    path: "/projets",
    name: "Projet",
    element: <Project />,
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
