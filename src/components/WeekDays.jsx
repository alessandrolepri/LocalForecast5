import React from 'react';


class Days extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <section className="forecast">
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