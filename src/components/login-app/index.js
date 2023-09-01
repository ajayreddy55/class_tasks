import { Component } from "react";
import "./index.css";

class LoginUser extends Component {

    state = { isLoggedIn: false };

    loginOrLogoutUser = () => {
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    }

    render() {

        const { isLoggedIn } = this.state;

        const buttonText = isLoggedIn ? "Logout" : "Login";

        const headingText = isLoggedIn ? "Welcome User" : "Please Login";

        return (
            <div className="login-bg-container">
                <h1 className="login-main-heading">{ headingText }</h1>
                <button className="btn btn-light mt-3" type="button" onClick={this.loginOrLogoutUser}>{ buttonText }</button>
            </div>
        );
    }
}

export default LoginUser;


