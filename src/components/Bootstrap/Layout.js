import React from 'react';

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

export class Column extends React.Component {
    render() {
        return (
            <div className={"col-md-" + this.props.size}>
                {this.props.children}
            </div>
        )
    }
}
