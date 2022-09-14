import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
