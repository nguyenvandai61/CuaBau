import React from "react";
import "./app.css";
    
class BoardItem extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
    <div className="item">
        <img src={this.props.file} alt={this.props.item} onClick={this.props.clickHandler}/>
        <h3 className="bet-coin">${this.props.betStore}</h3>
    </div>
        )
    }

} 
export default BoardItem;