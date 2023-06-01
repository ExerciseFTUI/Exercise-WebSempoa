import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}

export default App;
