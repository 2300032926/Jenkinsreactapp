import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Dashboard from "./pages/DashBoard";
import EmployeeForm from "./pages/Employeeform";
import Login from "./pages/Login";
import DepartmentPage from "./pages/Departmentpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};


export default App;