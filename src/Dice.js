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
        this.raiseDice = this.raiseDice.bind(this);
        this.offRaiseDice = this.offRaiseDice.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isRaised !== nextProps.isRaised && nextProps.isRaised) {
            let loopRaise = setInterval(
                this.raiseDice, 100 
            );
            setTimeout(() => { clearInterval(loopRaise)}, 2000);
            this.offRaiseDice();
        }
    }
    raiseDice() {
        const value = Math.floor((Math.random() * 6));
        this.setState({point: value});
    }

    offRaiseDice() {
        console.log("offRaiseDice");

        this.props.toogleEndRaise();
    }

    imageHandler() {
        switch(this.state.point) {
            case 1: return Bau;
            case 2: return Ga;
            case 3: return Ca;
            case 4: return Cua;
            case 5: return Tom;
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