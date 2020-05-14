import React from 'react';

class Temperature extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: '',
        };
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=c7d072a22273d71b69d9585961a298cd&units=metric`)
            .then(response => response.json()
                    .then(data => {

                            let datas = data.list;
                            // console.log(datas);

                            for (let i = 0; i < 8; i++) {
                                // console.log(datas[i].main.temp, 'check data');
                                let temp = this.setState({ temp: Math.floor(datas[i].main.temp)});
                            }
                        }
                    )
            )
    }
    render() { 
        return ( 
            <div className='curr-temp'>
                {this.state.temp}
            </div>
        );
    }
}
export default Temperature;