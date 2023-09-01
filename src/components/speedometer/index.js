import { Component } from "react";
import "./index.css";

class Speedometer extends Component {

    state = { speed: 0 }
    
    increaseSpeed = () => {
        const { speed } = this.state;

        if (speed < 200) {
            this.setState(prevState => ({ speed: prevState.speed + 10 }));
        };

    }

    decreaseSpeed = () => {
        const { speed } = this.state;

        if (speed > 0) {
            this.setState(prevState => ({ speed: prevState.speed - 10 }));
        }
    }

    render() {

        const { speed } = this.state;

        return (
            <div className="bg-container-speed">
                <h1 className="main-heading-speed">SPEEDOMETER</h1>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/191/146/small/Electric_Car_Dashboard_UI_Free_Vector.jpg" alt="speedometer" className="speed-image" />
                <h3 className="speed-text">Speed is { speed }mph</h3>
                <p className="speed-limit">Min limit is 0mph, Max limit is 200mph</p>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <button className="btn btn-primary mr-4" type="button" onClick={this.increaseSpeed}>Accelerate</button>
                    <button className="btn btn-outline-light ml-4" onClick={this.decreaseSpeed}>Apply Brake</button>
                </div>
            </div>
        );
    }
}

export default Speedometer;

