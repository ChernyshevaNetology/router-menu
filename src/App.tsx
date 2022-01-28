import React from 'react';
import './App.css';
import { Menu } from "components/menu";
import { Router } from "./Router";

const App = () => {
  return (
    <div>
        <Menu />
        <Router />
    </div>
  );
}

export default App;
