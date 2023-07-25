import React from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "../../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="font-Inter flex w-screen overflow-hidden">
      <Sidebar />

      <Outlet />
    </div>
  )
}
export default Dashboard
