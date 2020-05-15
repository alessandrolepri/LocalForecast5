import React, { Component } from 'react';
import axios from 'axios';

class Temperature extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            forecast: [],
        }
    }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${process.env.APIKEY}&units=metric`)
            .then(res => this.setState({ forecast: res.data.list }))
            .catch(err => console.log(err, 'Looks like there is an error'))
    }


    render() {

        const projections = this.state.forecast.map(forecast => {
            return (
                <div key={forecast.id} temp={forecast.main.temp} >
                    {Math.floor(forecast.main.temp)}
                </div> );
        });

        return (
            <div className='curr-temp'>
                {projections.slice(0,1)}
            </div>
        )
    }
}
export default Temperature;