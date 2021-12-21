import React from "react";
import { Header, Card } from "./component";
import "./App.css";
import DashBoard from "./component/dashboard";
function App() {
  return (
    <div className="app">
      <Header />
      <br />
      <DashBoard />
    </div>
  );
}

export default App;
