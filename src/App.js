import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import AdminPanel from "./components/AdminPanel";

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Header/>
          <div className="row">
              <Order/>
              <Inventory/>
              <AdminPanel/>
          </div>
      </div>
    );
  }
}

export default App;
