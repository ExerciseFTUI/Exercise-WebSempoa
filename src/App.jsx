import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import PilihCabang from "./pages/PilihCabang";

function App() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}

export default App;
