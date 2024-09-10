import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";


function App() {
  return (
    <>
      <div>
        <NavBar />
        <HomeContainer />
        <Footer/>
      </div>
    </>
  );
}

export default App;
