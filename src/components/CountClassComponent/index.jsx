import React from "react";

class CountClassComponent extends React.Component {
  timer = null;

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      btcPrice: 65000
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount Run!!!");

    this.timer = setInterval(() => {
      console.log("Cập nhật giá BTC");
      this.setState({
        btcPrice: 60000 + Math.floor(Math.random() * 10000)
      })
    }, 2000)
  }

  componentDidUpdate() {
    // console.log("ComponentDidUpdate Run!!!");
    if (this.state.btcPrice < 63000) {
      console.log("Buy BTC");
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount Run!!!");
    clearInterval(this.timer);
  }

  render() {
    console.log("Render Run !!!");

    return <div>
      <h1>Bitcoin Price</h1>
      <h3>{this.state.btcPrice}</h3>
    </div>
  }
}

export default CountClassComponent;
