import React from "react";
import Dice from "./Dice";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRaised: false
        }
        this.toggleRaise = this.toggleRaise.bind(this);
        this.toggleEndRaise = this.toggleEndRaise.bind(this);
    }

    toggleRaise() {
        console.log('raise');
        this.setState({isRaised: true});
    }

    toggleEndRaise() {
        this.setState({isRaised: false});
    }
    render() {
        return (
            <div className="control-container">
                <div className="dices">
                    <Dice isRaised={this.state.isRaised} toogleEndRaise={this.toggleEndRaise}/>
                    <Dice isRaised={this.state.isRaised} toogleEndRaise={this.toggleEndRaise}/>
                    <Dice isRaised={this.state.isRaised} toogleEndRaise={this.toggleEndRaise}/>
                </div>

                
                <button className="raise-btn" onClick={this.toggleRaise}>Đổ</button>
            </div>
        )
    }
}

export default Game;