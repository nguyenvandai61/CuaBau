import React from "react";
import "./app.css";
import Bau from './bau.jpg';
import Ca from './ca.jpg';
import Cua from './cua.jpg';
import Huou from './huou.jpg';
import Ga from './ga.jpg';
import Tom from './tom.jpg';

var HUOU = 0;
class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: HUOU,
        }
        this.pickNumber = this.pickNumber.bind(this);
        this.offRaiseDice = this.offRaiseDice.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isRaised !== nextProps.isRaised && nextProps.isRaised) {
           this.rollDice();
        }
    }
    async rollDice() {
        let loopRaise = await setInterval(
            this.pickNumber, 100 
        );
        setTimeout(() => { 
            clearInterval(loopRaise)
            this.offRaiseDice(this.state.point);
        }
        
        , 2000);
        
    }
    pickNumber() {
        const value = Math.floor((Math.random() * 6));
        this.setState({point: value});
    }

    offRaiseDice(point) {
        this.props.toogleEndRaise(point);
    }

    imageHandler() {
        switch(this.state.point) {
            case 1: return Cua;
            case 2: return Tom;
            case 3: return Ga;
            case 4: return Bau;
            case 5: return Ca;
            default: return Huou
        }
    }

    render() {
        return(
            <div className="dice">
                <img src={this.imageHandler()} alt="cua-bau"/>
            </div>
        )
    }
}

export default Dice;