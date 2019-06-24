import React from "react";
import {render} from "react-dom";
import "./app.css";
import mainImg from './cuabau.jpg';
import Game from './Game';
import registerServiceWorker from "./registerServiceWorker";


const App = () => {
    // componentDidMount
    return (
    <div className="app">
        <div className="title">
         <h1>CUA BẦU</h1>

        </div>
        <img className="board-img" src={mainImg} alt="cuabau"/>
        <Game/>
    </div>
    )
}

render(<App />, document.getElementById("root"));
registerServiceWorker();
