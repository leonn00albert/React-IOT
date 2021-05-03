import React from 'react';
import './LedLight.css'
export class LedLight extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
      <p className="switch-label">{this.props.lightName}</p>
            <div className={"led-" + this.props.color}></div>
            </div>
      
        );
    }
}