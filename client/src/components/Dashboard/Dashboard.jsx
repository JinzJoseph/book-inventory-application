import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <>
    <div  className="flex gap-4 flex-col md:flex-row">
    <SideBar />
      <div>
        <Outlet />
      </div>
    </div>
   
    </>
  );
};

export default Dashboard;
