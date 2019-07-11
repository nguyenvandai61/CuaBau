import React from "react";
import {render} from "react-dom";
import "./app.css";


import Game from './Game';
import registerServiceWorker from "./registerServiceWorker";


const App = () => {
    // componentDidMount
    return (
    <div className="app">
        <div className="title">
         <h1>Cua Bầu</h1>

        </div>
        
        <Game/>
    </div>
    )
}

render(<App />, document.getElementById("root"));
registerServiceWorker();
