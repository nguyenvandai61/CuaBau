import React from "react";

class GameOver extends React.Component {
  
  render() {
    return (
      <div className="gameover">
        <p className="gameover-text">Game Over</p>
        <button className="restart-btn" onClick={this.props.restartGame}>Restart</button>
      </div>
    );
  }
}
export default GameOver;
