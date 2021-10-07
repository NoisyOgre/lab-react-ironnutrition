import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, { useState } from "react";
function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
        {foods.map((food) => {
        return(
        <div>
        <p>{food.name}</p>
        <img src={food.image} width="100px" alt={food.name} />
        </div>
        );
        })};
    </div>
  );
}
export default App;
