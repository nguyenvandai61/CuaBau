import React from "react";
import Dice from "./Dice";

import Bau from "./bau.jpg";
import Ca from "./ca.jpg";
import Cua from "./cua.jpg";
import Huou from "./huou.jpg";
import Ga from "./ga.jpg";
import Tom from "./tom.jpg";
import BoardItem from "./BoardItem";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRaised: false,
      coin: 10000,
      betStore: [0, 0, 0, 0, 0, 0],
      result: []
    };
    this.toggleRaise = this.toggleRaise.bind(this);
    this.toggleEndRaise = this.toggleEndRaise.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.item2Int = this.item2Int.bind(this);
    this.int2Item = this.int2Item.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  toggleRaise() {
    console.log("raise");
    this.setState({ isRaised: true });
  }

  toggleEndRaise(value) {
    this.setState({ isRaised: false });
    let newResult = this.state.result;
    newResult.push(value);
    if (newResult.length == 3) this.award();
  }
  award() {
    let principleFlag = false;
    let result = this.state.result;
    let betStore = this.state.betStore;
    console.log(result);
    console.log(betStore);
    let coin = this.state.coin;
    for (let i = 0; i < 3; i++) {
      if (betStore[result[i]] != 0) {
        if (!principleFlag) {
          coin += betStore[result[i]] * 1000;
          principleFlag = true;
          console.log("cộng tiền vốn");
        }
        coin += betStore[result[i]] * 1000;
        console.log("cộng tiền lời");
      }
      this.setState({ result: [], betStore: [0, 0, 0, 0, 0, 0], coin: coin });
    }
  }
  clickHandler(e) {
    let newBet = [];
    Object.assign(newBet, this.state.betStore);
    newBet[this.item2Int(e.target.alt)]++;
    let coin = this.state.coin;
    coin -= 1000;
    console.log(newBet);
    this.setState({ coin: coin, betStore: newBet });
  }

  int2Item(value) {
    let item = "";
    switch (value) {
      case 0:
        item = "huou";
        break;
      case 1:
        item = "cua";
        break;
      case 2:
        item = "tom";
        break;
      case 3:
        item = "ga";
        break;
      case 4:
        item = "bau";
        break;
      case 5:
        item = "ca";
        break;
    }
    return item;
  }
  item2Int(item) {
    switch (item) {
      case "huou":
        return 0;
      case "cua":
        return 1;
      case "tom":
        return 2;
      case "ga":
        return 3;
      case "bau":
        return 4;
      case "ca":
        return 5;
      default:
        break;
    }
    return item;
  }
  createBoard() {
    let board = [];
    let items = [Huou, Cua, Tom, Ga, Bau, Ca];
    for (let i = 0; i < 6; i++) {
      board.push(<BoardItem file={items[i]}
        item = {`${this.int2Item(i)}`}
        clickHandler = {this.clickHandler}
        betStore = {this.state.betStore[i] * 1000}
      />);
    }
    return board;
  }
  render() {
    
    return (
      <div>
        <div className="board-img">
          {this.createBoard()};
         </div>

        <div className="control-container">
          <div className="dices">
            <Dice
              isRaised={this.state.isRaised}
              toogleEndRaise={this.toggleEndRaise}
              getDiceValue={this.getDiceValue}
            />
            <Dice
              isRaised={this.state.isRaised}
              toogleEndRaise={this.toggleEndRaise}
              getDiceValue={this.getDiceValue}
            />
            <Dice
              isRaised={this.state.isRaised}
              toogleEndRaise={this.toggleEndRaise}
              getDiceValue={this.getDiceValue}
            />
          </div>

          <button className="raise-btn" onClick={this.toggleRaise}>
            Đổ
          </button>
          <div>
            <h2>Coin: </h2>
            <h1 className="coin"> {this.state.coin}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
