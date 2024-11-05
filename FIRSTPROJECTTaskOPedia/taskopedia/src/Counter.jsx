import React from "react";
import Attack from "./Images/attack.png";
import Defense from "./Images/defend.png";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.state = {
      count: 0,
      gameStatus: " ",
      lastPlay: " ",
    };
  }

  handleAttack = () => {
    this.setState((previousState) => {
      let randomCount = previousState.count + Math.round(Math.random() * 10);

      return {
        count: randomCount,
        lastPlay: "Attack",
      };
    });
    this.handleGameStatus();
  };
  handleDefense = () => {
    this.setState((previousState) => {
      let randomCount = previousState.count - Math.round(Math.random() * 10);

      return { count: randomCount, lastPlay: "Defense" };
    });
    this.handleGameStatus();
  };

  handleRandomPlay = () => {
    let gameMode = Math.round(Math.random());
    if (gameMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  };

  handleReset = () => {
    this.setState((previousState) => {
      return {
        count: 0,
      };
    });
  };

  handleGameStatus = () => {
    this.setState((previousState) => {
      if (previousState.count <= -10) {
        return {
          gameStatus: "You Lost!!",
        };
      } else if (previousState.count >= 10) {
        return {
          gameStatus: "You Won!",
        };
      } else if (previousState.count < 10 && previousState.count > -10) {
        return {
          gameStatus: " ",
        };
      }
    });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="text-center"
      >
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Lets play: {this.state.lastPlay} </p>
        <h2>Game Status: {this.state.gameStatus} </h2>
        <div className="row text">
          <div className="col-6 col-md-3 offset-md-3">
            <img
              src={Attack}
              style={{
                width: "100%",
                border: "1px solid red",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              className="p-4"
              alt=""
              onClick={this.handleAttack}
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              src={Defense}
              style={{
                border: "1px solid green",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
              }}
              className="p-4"
              alt=""
              onClick={this.handleDefense}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-secondary ronded w-100 mt-3"
              onClick={this.handleRandomPlay}
            >
              Random Play
            </button>
            <br />
            <button
              className="btn btn-warning ronded w-100 mt-3"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
