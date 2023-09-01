import { Component } from "react";
import "./index.css";

class EvenOdd extends Component {

    state = { count: 0 };

    incrementCount = () => {
        let randomNumber = Math.ceil(Math.random() * 100);
        this.setState(prevState => ({ count: prevState.count + randomNumber }));
    }

    render() {

        const { count } = this.state;

        const oddEvenText = count % 2 === 0 ? "Even" : "Odd";

        return (
            <div className="even-odd-bg-container">
                <h1 className="even-main-heading">Count { count }</h1>
                <h3 className="even-odd-text">Count is { oddEvenText }</h3>
                <button className="btn btn-light mt-3" type="button" onClick={this.incrementCount}>Increment</button>
                <p className="even-odd-des">*Increase by random number between 0 to 100</p>
            </div>
        );
    }
}

export default EvenOdd;


