import React from 'react';


class Days extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            icon: '',
            description: '',
            imgLink: '',

        }
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=c7d072a22273d71b69d9585961a298cd&units=metric`)
            .then(response => response.json()
                    .then(data => {

                            let datas = data.list;
                            // console.log(datas);

                            for (let i = 0; i < 8; i++) {
                                // console.log(datas[i].main.temp, 'check data');
                                this.setState({ temp: Math.floor(datas[i].main.temp)});
                                let icon = datas[i].weather[0].icon;
                                let imgLink = '<img class= weatherImg src= https://openweathermap.org/img/wn/';
                                let endImgLink = '@2x.png><img>';

                                this.setState({ description: datas[i].weather[0].description })
                                this.setState({ icon: datas[i].weather[0].icon })
                            }
                        }
                    )
            )
    }
    render() { 
        return (  
            <section className="forecast">
                <div className="days">
                    <div className="day-one"> MON </div> 
                    < div className = "day-temp"
                    temp={this.props.temp}> {this.props.temp} </div>
                    <div className="det-icon">
                        <p className="description"> {this.state.description}</p>
                    </div>
                </div>

                <div className="days"> 
                    <div className="day-one"> MON </div> 
                    <div className="day-temp"> 22</div>
                    <div className="det-icon">
                        <p className="description"> RAIN</p>
                    </div>
                </div>

                <div className="days"> 
                    <div className="day-one"> MON </div> 
                    <div className="day-temp"> 22</div>
                    <div className="det-icon">
                        <p className="description"> RAIN</p>
                    </div>
                </div>

                <div className="days"> 
                    <div className="day-one"> MON </div> 
                    <div className="day-temp"> 22</div>
                    <div className="det-icon">
                        <p className="description"> RAIN</p>
                    </div>
                </div>

                <div className="days"> 
                    <div className="day-one"> MON </div> 
                    <div className="day-temp"> 22</div>
                    <div className="det-icon">
                        <p className="description"> RAIN</p>
                    </div>
                </div>

            </section>
        );
    }
}

export default Days;