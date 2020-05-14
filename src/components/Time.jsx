import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);

    let today = new Date(Date.now()).toTimeString().substr(0, 5);

        this.state = {
        date: today
        };
    }

    render() {
        return (
            <div className='time'> 
                { this.state.date } 
            </div>
        )
    }
}
export default Time;