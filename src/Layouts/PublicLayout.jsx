import React from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";


function PublicLayout({ setSearch, setRate }) {

  return (
    <div>
      <NavBar       setSearch={setSearch} setRate={setRate} />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
