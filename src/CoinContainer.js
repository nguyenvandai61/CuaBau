import React from "react";
import CoinContainerImg from "./coin.png"
class CoinContainer extends React.Component {
   

    render() {
        return (
            <div className="coin-container">
                <img src={CoinContainerImg} alt="CoinContainer"/>
                <p className="coin">{this.props.coin}</p>
            </div>
        )

    }
}
export default CoinContainer;