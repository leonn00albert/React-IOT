
import React from 'react';
import './DPad.css';
export class DPad extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="center">
                    <div className="center-circle"></div>
                </div>

                <div className="up direction">
                    <div id="forward" className="up-triangle btn"></div>
                </div>

                <div className="right direction">
                    <div id="right" className="right-triangle btn"></div>
                </div>
                <div className="down direction">
                    <div id="back" className="down-triangle btn"></div>
                </div>

                <div className="left direction">
                    <div id="left" className="left-triangle btn"></div>
                </div>

            </div>

        )
    }
}
