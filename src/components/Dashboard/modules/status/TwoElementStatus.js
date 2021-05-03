
import React from 'react';
import { Row, Column } from '../../../Bootstrap/Layout';
const axios = require('axios');

export class TwoElementStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
        this.getWeather = this.getWeather.bind(this);

    }

x
    async getWeather() {
        const apiKey = "6089f6509a50304980cd0037f70fe8b1";
        const city = "tbilisi";
        const unit = "metric"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

        let myPromise = new Promise((resolve, reject) => {
            axios.get(url)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
      
        let tmp = await myPromise;
   
        this.setState({data: tmp.main});
      
        console.log(tmp)
    }

    componentDidMount(){
        this.getWeather()
      
    }

 

    render() {
        return (
            <div>
            <Row>
                <Column size="6">
               
                        <p>Temperature</p>
                        <h1>{this.state.data.temp}°C</h1>
                        <p>{new Date().toString().substring(0,10)}</p>
                    
                </Column>
                <Column size="6">
                
                        <p>Humidity</p>
                        <h1>{this.state.data.humidity}<span>%</span></h1>
                        <p>{new Date().toString().substring(0,10)}</p>
            
                </Column>
            </Row>
            </div>
        )
    }
}
