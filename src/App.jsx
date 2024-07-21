import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
};

export default App;
