import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SeekerRegister from "./Components/RegisterForm";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerSeeker" element={<SeekerRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
