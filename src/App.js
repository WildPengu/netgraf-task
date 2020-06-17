import React from "react";
import Header from "./layouts/Header";
import Baner from "./layouts/Baner";
import "./styles/App.css";
import "./responsive/Responsive.css";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Baner />
      </div>
    );
  }
}

export default App;
