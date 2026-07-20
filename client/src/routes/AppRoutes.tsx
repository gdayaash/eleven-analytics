import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Header from "@/components/layout/Header";
import DateRangePicker from "@/components/forms/DateRangePicker";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/header" element={<Header/>} />
      <Route path="/daterangeform" element={<DateRangePicker/>} /> 
    </Routes>
  );
}

export default AppRoutes;
