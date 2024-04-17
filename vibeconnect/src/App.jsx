import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance.jsx";
import Setup from "./pages/Setup.jsx";
import Account from "./pages/SubPages/Account.jsx";
import Organisation from "./pages/SubPages/Organisation.jsx";
import Company from "./pages/SubPages/Company.jsx";
import Country from "./pages/SubPages/Country.jsx";
import Region from "./pages/SubPages/Region.jsx";
import Login from "./components/Authentication/Login.jsx";

function App() {
  return (
    <>
      <Router>
      {/* <Route path="/login" element={<Login />} /> */}
        <div className="flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/setup/account" element={<Account />} />
            <Route
              path="/setup/account/organisation"
              element={<Organisation />}
            />
            <Route path="/setup/account/company" element={<Company />} />
            <Route path="/setup/account/country" element={<Country />} />
            <Route path="/setup/account/region" element={<Region />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
