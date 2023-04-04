import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
