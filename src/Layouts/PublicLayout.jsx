import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

function PublicLayout({ setSearch, setRate, rating }) {
  return (
    <div>
      <NavBar rating={rating} setSearch={setSearch} setRate={setRate} />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
