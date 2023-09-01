import { Component } from "react";
import "./index.css"

class ClickCounter extends Component {

    state = { count: 0 }
    
    addCountByOne = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {

        const { count } = this.state;

        return (
            <div className="bg-container-counter">
                <h1 className="main-heading-counter">
                    The button has been clicked <br /><span className="counter-span">{ count }</span> times
                </h1>
                <p className="text-counter">Click the button to increase the count</p>
                <div className="text-center">
                    <button type="button" className="btn btn-primary" onClick={this.addCountByOne}>Click Me!</button>
                </div>
            </div>
        );
    }
}

export default ClickCounter

