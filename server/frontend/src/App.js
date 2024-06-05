import LoginPanel from "./components/Login/Login"
import RegisterPanl from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanl />} />
    </Routes>
  );
}
export default App;
