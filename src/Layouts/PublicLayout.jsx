import React from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";


function PublicLayout({ children, setSearch }) {

  return (
    <div>
      <NavBar       setSearch={setSearch} />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
