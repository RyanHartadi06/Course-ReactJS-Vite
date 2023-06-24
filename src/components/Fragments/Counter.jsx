import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">Count: {this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-black text-white p-3"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
