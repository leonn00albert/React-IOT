import React from 'react';
import {BarChart} from '../../Charts/Chart'

const axios = require('axios');


const options = {

    title: "Tbilisi Weather Chart",
    lables: ["Dates", "Temperature", "Humidity"],
    axis: {
        h: {
            color: "blue",
            title: "Example Horizontal"
        },
        v: {
            color: "#ffab91",
            title: "Example Vertical"
        }
    }
  }


export class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherResponse: '',
            weatherData:[options.lables],
            data:[options.lables]
        }
        this.getWeather = this.getWeather.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    getData(){
        let tmpData = this.state.weatherData;
        let tmpArr = [];
        tmpArr.push(options.lables)
        let date= new Date()
        tmpData.map((data, i)=>{
            tmpArr.push([new Date().toString(),data.temp, data.humidity])
     
        })
     
        return tmpArr
    }

    handleData(){
        this.setState({data: this.getData})
    }


     getWeather() {
        setInterval(async ()=>{
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
            console.log(this.state.weatherData)
            let tmp = await myPromise;
       
            this.setState(state => {
                const weatherData = state.weatherData.concat(tmp.main);
                let tmpArr = [new Date().toString(),tmp.main.temp, tmp.main.humidity]
                const data = state.data.concat([tmpArr]);
                console.log(data)
                
                return {
                    weatherData,
                    weatherResponse: '',
                    data
                }
            });
        },5000)
     


    }

    componentDidMount(){
        this.getWeather()
      
    }


    render() {
        return (
            <div>
               
                <BarChart width="400" options={options} data={this.state.data} chartStyle={this.props.chartStyle} />
            </div>
        )
    }
}