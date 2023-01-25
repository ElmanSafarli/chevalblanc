import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fourth from "./components/Fourth/Fourth";
import Fifth from "./components/Fifth/Fifth";
import Six from "./components/Six/Six";
import Seven from "./components/Seven/Seven";
import Eight from "./components/Eight/Eight";
import Nine from "./components/Nine/Nine";
import Last from "./components/Last/Last";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Last />
      <Footer />
    </div>
  );
};

export default App;
