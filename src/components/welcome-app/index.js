import { Component } from "react";
import "./index.css"

class WelcomeApp extends Component {

    state = { isSubscribed: false }

    toggleSubscribe = () => {
        this.setState(prevState => ({ isSubscribed: !prevState.isSubscribed }));
    }
    

    render() {

        const { isSubscribed } = this.state
        const subsText = isSubscribed ? "Subscribed" : "Subscribe";

        return (
            <div className="welcome-bg-container">
                <h1 className="welcome-main-heading">Welcome</h1>
                <p className="welcome-text">Thank you! Happy Learning</p>
                <button className="btn btn-light mt-3" type="button" onClick={this.toggleSubscribe}>{subsText}</button>
            </div>
        );
    }
}

export default WelcomeApp;

