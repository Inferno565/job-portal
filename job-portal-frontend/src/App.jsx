import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import ListingPage from "./Pages/ListingPage";
import JobPage from "./Pages/JobPage";
import RecruitDashPage from "./Pages/RecruitDashPage";
import ProfilePage from "./Pages/ProfilePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/viewJob" element={<JobPage />} />
          <Route path="recruit/dash" element={<RecruitDashPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
