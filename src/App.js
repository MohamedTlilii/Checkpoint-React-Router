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
import Data from "./Data";

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  const [movies, setMovies] = useState(Data);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout rating={rate} setSearch={setSearch} setRate={setRate} />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/movies"
          element={
            <ListMovies
              setMovies={setMovies}
              movies={movies}
              search={search}
              rate={rate}
            />
          }
        />
        <Route path="/movie/:id" element={<Movie movies={movies} />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
