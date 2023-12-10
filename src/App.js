import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import Home from "./Pages/Home";
import ListMovies from "./Pages/ListMovies";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import React, { useState } from "react";
function App() {
  const [search, setSearch] = useState(""); 
  return (
    <Routes>
      <Route path="/" element={<PublicLayout setSearch={setSearch}  />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<ListMovies search={search} />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
