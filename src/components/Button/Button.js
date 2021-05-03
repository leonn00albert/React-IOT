import React from 'react';
import "./Button.css"
export class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="button" onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}