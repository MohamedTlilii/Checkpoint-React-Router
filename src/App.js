import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import Home from "./Pages/Home";
import ListMovies from "./Pages/ListMovies";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import React, { useState } from "react";
import Movie from "./Components/Movie";
function App() {
  const [search, setSearch] = useState(""); 
  const [rate, setRate] = useState(0); 
  return (
    <Routes>
      <Route path="/" element={<PublicLayout setSearch={setSearch} setRate={setRate}  />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<ListMovies search={search} rate={rate} />} />
        <Route path="/movie" element={<Movie/>} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>


      

    </Routes>
    
  );
}

export default App;
