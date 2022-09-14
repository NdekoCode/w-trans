import { lazy } from "react";
import { Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
import About from "../pages/About";
import Cards from "../pages/Cards";
import Contact from "../pages/Contact";
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
    path: "Se connecter",
    element: <Login />,
  },
  {
    path: "Actualités",
    element: <News />,
  },
];
export const navrouter = [
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
    path: "Projet",
    name: "Partenaires",
    element: <Project />,
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
    path: "Se connecter",
    element: <Login />,
  },
  {
    path: "Actualités",
    element: <News />,
  },
];
export default routes;
