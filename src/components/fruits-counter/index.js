import { Component } from "react";
import "./index.css"

class FruitsCounter extends Component {

    state = { mangos: 0, bananas: 0 }
    
    increaseMangos = () => {
        this.setState(prevState => ({ mangos: prevState.mangos + 1 }));
    }

    increaseBananas = () => {
        this.setState(prevState => ({ bananas: prevState.bananas + 1 }));
    }

    render() {

        const { mangos, bananas } = this.state;

        return (
            <div className="fruit-bg-container">
                <div className="fruit-card">
                    <h1 className="fruits-main-heading">Bob ate <span className="fruit-span">{mangos}</span> mangoes <span className="fruit-span">{ bananas }</span> bananas</h1>
                    <div className="d-flex justify-content-around align-items-stretch mt-4">
                        <div className="d-flex flex-column justify-content-around align-items-center">
                            <img src="https://static.vecteezy.com/system/resources/previews/006/643/446/original/illustration-fresh-mango-fruit-free-vector.jpg" alt="mango" className="fruit-image mt-0" />
                            <button className="btn btn-primary mt-3" type="button" onClick={this.increaseMangos}>Eat Mango</button>
                        </div>
                        <div className="d-flex flex-column justify-content-around align-items-center">
                            <img src="https://img.freepik.com/free-vector/sticker-design-with-banana-isolated_1308-77292.jpg?w=2000" alt="banana" className="fruit-image" />
                            <button className="btn btn-primary mt-3" type="button" onClick={this.increaseBananas}>Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FruitsCounter;

