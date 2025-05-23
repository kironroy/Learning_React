import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reactStyle.css";
import  "./tic-tac-toe.css";
// import App from "./App.jsx";
// import Try from "./Try.jsx";
// import HedyLamarr from "./HedyLamarr.jsx";
// import GroceryList from "./GroceryList.jsx";
// import Counter from "./Counter.jsx";
// import Profile from "./Profile.jsx";
// import Avatar from "./Avatar.jsx";
// import TodoList from "./Avatar.jsx";
// import PackingList from "./Cond.jsx";
// import DrinkList from "./CoffeeTea.jsx";
// import List from "./ScientistsRender.jsx";
// import RecipeList from "./Recipes.jsx";
// import TeaGathering from "./TeaGathering";
// import AppTwo from "./AppTwo.jsx";
// import Quiz from "./Quiz.jsx";
// import FullName from "./FullName.jsx";
// import Accordion from "./Accordion.jsx";
import TicTacToe from "./TicTacToe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
