import React from "react";
import "./App.css";
import super1 from "./img/super1.png";

import Stars from "./Stars";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div className="App">
        <div style={{ top: "50%", left: "50%" }}>
          <img src={super1} style={{ height: "70px" }} />
          <h1>фильм: Supermen</h1>
          <p>Рейтинг фильма:</p>
            <Stars count={this.state.count} />
          <div>
            <button className="inc" onClick={(e) => this.increment(e)}>
              Increment!
            </button>
            <button className="dec" onClick={(e) => this.decrement(e)}>
              Decrement!
            </button>
            <button className="reset" onClick={(e) => this.reset(e)}>
              Reset
            </button>
            <h1>Current Count: {this.state.count}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
