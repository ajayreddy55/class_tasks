import { Component } from "react";
import "./index.css";

class ShowHideApp extends Component {

    state = { isFirstNameShown: false, isLastNameShown: false };

    showHideFirstName = () => {
        this.setState(prevState => ({ isFirstNameShown: !prevState.isFirstNameShown }));
    }

    showHideLastName = () => {
        this.setState(prevState => ({ isLastNameShown: !prevState.isLastNameShown }));
    }

    render() {

        const { isFirstNameShown, isLastNameShown } = this.state;
        
        const displayingOrHidingFirstName = isFirstNameShown ? "" : "d-none";

        const displayingOrHidingLastName = isLastNameShown ? "" : "d-none";

        return (
            <div className="show-hide-bg-container">
                <h1 className="show-hide-main-heading">Show/Hide</h1>
                <div className="d-flex justify-content-around align-items-center mt-4">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-light show-hide-button" type="button" onClick={this.showHideFirstName}>Show/Hide Firstname</button>
                        <div className={`name-card-show-hide ${displayingOrHidingFirstName}`}>
                            <h3 className="name-show-hide">Joe</h3>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-light show-hide-button" type="button" onClick={this.showHideLastName}>Show/Hide Lastname</button>
                        <div className={`name-card-show-hide ${displayingOrHidingLastName}`}>
                            <h3 className="name-show-hide">Jonas</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowHideApp;

