
import React from 'react';
import './Toggle.css';
export class Toggle extends React.Component {
    render() {
        return (
            <div>
            <p className="switch-label">{this.props.switchName}</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            </div>
        )
    }
}
