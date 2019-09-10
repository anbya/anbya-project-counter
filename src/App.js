import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './bootstrap.min.css';
import Greeting from "./commponent/greeting";
import GreetingState from "./commponent/greetingState";

function App() {
  return (
    <div>
      <div className="row justify-content-center">
        <GreetingState />
      </div>
    </div>
  );
}

export default App;
