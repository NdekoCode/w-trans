import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
