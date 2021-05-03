import React from 'react';
import './Card.css';
import {Button} from "../Button/Button"
import EventHandlers from '../../Modules/eventHandlers'
const axios = require('axios');

// Make a request for a user with a given ID



export class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "red",
            chuckNorrisQuote: ""
        }
        
        this.clickHandler = this.clickHandler.bind(this);
        this.chuckNorris = this.chuckNorris.bind(this);
    } 

    clickHandler() {
        let newColor = this.state.color == "red"? "yellow" : "red";
        this.setState({ color : newColor})
        
    }

    async chuckNorris(){
       let myPromise = new Promise((resolve,reject)=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
          return resolve(response.data.value);
        
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
       }) 
       console.log( await myPromise)
   

        this.setState({chuckNorrisQuote : await myPromise});
    }

    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h3>Hello</h3>
                </div>
                <div className="card-body" style={{color: this.state.color}}>
                    <p>{this.state.chuckNorrisQuote}</p>
                    <Button onClick={this.chuckNorris}>Click me</Button>
                </div>
            </div>
        )
    }
}