import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Utility/Navbar";
import Main from "./Component/Utility/Main";
import Search from "./Component/pages/Search";
import { Routes, Route } from "react-router-dom";
import DisplayPage from "./Component/pages/DisplayPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/DisplayPage" element={<DisplayPage />} />
      </Routes>
    </>
  );
}

export default App;
