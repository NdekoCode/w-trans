const routes = [
  //   {
  //     path: "users",
  //     element: <DashboardLayout />,
  //     children: [
  //       { path: "account", element: <AccountView /> },
  //       { path: "customers", element: <CustomerListView /> },
  //       { path: "dashboard", element: <DashboardView /> },
  //       { path: "products", element: <ProductListView /> },
  //       { path: "settings", element: <SettingsView /> },
  //     ],
  //   },
  {
    path: "/",
    name: "Acceuil",
    element: <Home />,
  },
  {
    path: "/about",
    name: "A propos",
    element: <About />,
  },
  //   {
  //     path: "partners",
  //     name: "partners",
  //    element: <Partners /> },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
    children: [
      { path: "/", name: "Ventes pavés", element: <AccountView /> },
      { path: "/", name: "Assainissement", element: <CustomerListView /> },
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
    path: "partners",
    element: <Partners />,
  },
  {
    path: "Actualités",
    element: <News />,
  },
];

export default routes;
