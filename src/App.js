import RegisterPage from "../src/pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import "./pages/RegisterPage/RegisterPage.module.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage/>}></Route>
          <Route path="/genre" element={<GenrePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;