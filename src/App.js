import "./App.css";
import FooterSection from "./Components/FooterSection/FooterSection";
import Footer from "./Components/Footer/Footer";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  console.log(rate);
  return (
    <div>
      <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
      <List search={search} rate={rate} />
      <FooterSection />
      <Footer />
    </div>
  );
}

export default App;
