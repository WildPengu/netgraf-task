import React from "react";
import Header from "./layouts/Header";
import Baner from "./layouts/Baner";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Baner />
      </div>
    );
  }
}

export default App;
