import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, element }, index) => {
          if (path === "/") {
            return <Route key={index} path={path} element={element} end />;
          }
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
